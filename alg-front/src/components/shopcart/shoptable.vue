<template>
    <div id="shop-table">
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            show-summary
            :summary-method="getTotal"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <!-- <el-table-column
            label="图片"
            width="120"
            height="150">
            <img :src="img_url">
            </el-table-column> -->
            <el-table-column
            label="商品名称"
            prop="product_name"
            width="120">
            </el-table-column>
            <el-table-column
            prop="price"
            label="价格"
            width="120">
            </el-table-column>
            <el-table-column
            prop="count"
            label="数量"
            show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-input-number :value="scope.row.count" 
                        size="small"  
                        @change="handleChangeLevels(scope.row,$event)" 
                        :min="1" >
                    </el-input-number>
                </template>
            </el-table-column>
            <!-- <template slot-scope="scope">
                <span :class="(scope.row.type && scope.row.type == 'sum') ? 'text_bule_underline': ''">{{scope.row.price}}</span>
            </template> -->
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button @click="delItem(multipleSelection)">删除选中商品</el-button>
            <span id="all">总价：{{sum}}</span>
            <el-button @click="submitMenu()">提交订单</el-button>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            multipleSelection: [],
            tableData:[],
            img_url:'',
            arr:[],
            sum:0,
            countAll:0
        }
    },

    methods: {
            //取消选中
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
            //删除选中
        delItem(rows){
            
            this.$confirm('真的要删除这些商品吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //用户点击确认时删除数据库中数据,
                rows.forEach(item => {
                    this.arr.push(
                        {
                            user_id:item.user_id,
                            product_name:item.product_name
                        }
                    )
                })
                for(let i = 0; i < this.arr.length; i++){
                    this.$http.get('/delshoplist',{
                        params:{
                            user_id:this.arr[i].user_id,
                            product_name:this.arr[i].product_name
                        }
                    }).then(res => {
                        console.log('删除成功');
                        //删除成功后刷新
                        this.$router.go(0);
                        this.getAll(this.multipleSelection);
                        // this.reload();
                    }).catch(err => {
                        console.log(err);
                    })
                }
                
                //提示用户
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                //用户点击取消时
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
            //删除数据库中的数据
            
        },
            //计算总价
        getAll(selected){
            this.sum = 0;
            selected.forEach(item => {
                this.sum = this.sum + item.price * item.count;
            });
        },
            //提交订单
        submitMenu(){},
         //全选或选中某行
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
            this.getAll(this.multipleSelection);
        },
            //商品数量发生改变
        handleChangeLevels(row,val){
            // console.log(row);
            this.tableData.map(v => {
                if (row.id === v.id) {
                    this.$set(v, 'count', val) //通过$set设置数据集合里面的参数进行渲染
                }
                //更改数据库中的购物车商品数量
                this.$http.get("/shopcount",{
                    params:{
                        count:val,
                        user_id:row.user_id,
                        product_name:row.product_name
                    }
                }).then(res => {
                    console.log('数量改变成功');
                    this.getAll(this.multipleSelection);
                }).catch(err => {
                    console.log(err);
                })
		    })
        },
        //获取购物车数据
        getTableData(){
            this.$http.get('/showlist',{
                params:{
                    username:this.cookie.getCookie('user')
                }
            }).then(res => {
                this.tableData = res.data;
            }).catch(err => {
                console.log(err);
            })
        },
        //重新加载组件
        reload() {
            //强制刷新组件重新渲染
            this.$forceUpdate()
        },
        //合计行
        getTotal(param){
            const {columns,data} = param;
            const sums = [];
            columns.forEach((column,index) => {
                if(index === 0){
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                //计算购物车商品数量以及购物车所有商品总价
                if (column.property === 'count' || column.property === 'price') {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index];
                } else {
                    sums[index] = '--';
                }
            })
            this.countAll = sums[3];
            return sums;
        }
        
    },
    mounted() {
        if(this.cookie.getCookie('user')){
            this.getTableData();
        }else {
            this.$router.push("/loginregist/login");
        }
    },
    watch: {
        'tableData.length':function(){
            this.getTableData();
        },
        
    }
}
</script>

<style>
    #all {
        color: red;
        font-size: 16px;
        display: inline-block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        box-shadow: 1px 1px 5px lightgrey;
        margin: 0 10px;
    }
    #shop-table {
        margin-bottom: 10px;
    }
    
</style>