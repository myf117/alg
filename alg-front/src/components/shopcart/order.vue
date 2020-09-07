<template>
    <div class="ordersss">
        <h3 class="order-h3" style="margin:40px 0">请填写订单信息</h3>
        地址：<input type="text" class="myinput" v-model.lazy="address">
        <p class="addText" style="margin:5px 0;margin-right:195px">{{addText}}</p>
        电话：<input type="text" class="myinput"  v-model="pnumber">
        <p class="phoText" style="margin:5px 0;margin-right:235px">{{phoText}}</p>
        <orderproduct v-for="item in selectedArr" :key="item.id"
            :img_src="item.img_url" :product_name="item.product_name"
            :price="item.price" :count="item.count" class="order-product"
        ></orderproduct>
        <!-- <div v-for="item in selectedArr" :key="item.id">
            1111122222
        </div> -->
        <el-button type="primary" @click="addToOrder" style="width:200px">提交</el-button>
    </div>
</template>
<script>
    import Bus from '../../assets/js/Bus';
    import orderproduct from './oderProduct';
    export default {
        data() {
            return {
                addText:'例如：成都金牛区营门口街道',
                phoText:'填写11位数的电话号码',
                selectedArr:[],
                sum:0,
                pnumber:'',
                address:''
            }
        },
        components:{
            orderproduct
        },
        methods: {
            addToOrder(){
                console.log('this.selectedArr',this.selectedArr)
                if(this.phoText === ''){
                    for(let i = 0; i < this.selectedArr.length; i++){
                        let otime = this.time();
                        let oid = this.randomOid();
                        console.log(otime,oid);
                        this.$http.post('/addToOrder',{
                                uname:this.cookie.getCookie('user'),
                                pname:this.selectedArr[i].product_name,
                                total:parseFloat(this.sum),
                                count:this.selectedArr[i].count,
                                otime:otime,
                                oid:oid,
                                address:this.address,
                                phone:this.pnumber
                        }).then(res => {
                            console.log(res.data);
                            this.selectedArr = [];
                            this.$router.go(-1);
                            // this.$alert('订单已提交处理', '消息通知', {
                            //     confirmButtonText: '确定',
                            //     callback: action => {
                            //         this.$message({
                            //             type: 'info',
                            //             message: `订单已提交，正在为您跳转回到购物车`
                            //         });
                                    
                            //     }
                            // });
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                }
            },
            time(){
                let timer = new Date();
                let year = timer.getFullYear();
                let month = check(timer.getMonth() + 1);
                let day = check(timer.getDate());
                let hours = check(timer.getHours());
                let minutes = check(timer.getMinutes());
                let seconds = check(timer.getSeconds());
                function check(key) {
                        if (key < 10) {
                            key = `0${key}`;
                        }
                        return key;
                    }
                let time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                return time;
            },
            randomOid(){
                console.log('this.selectedArr',this.selectedArr)
                let oid = Math.floor(Math.random() * 1000000);
                return oid;
            }
        },
        mounted() {
            this.selectedArr = this.$store.state.selected
            this.sum = this.$store.state.sum;
            // console.log(this.selectedArr)
        },
        watch: {
            'pnumber':function(){
                let reg=/^1[3-9]\d{9}$/;
                if(reg.test(this.pnumber)){
                    this.phoText=""
                }
            },
            'address':function(){
                this.addText = ''
            }
        },
    }
</script>
<style scoped>
    .myinput{
        margin: 10px;
        width: 400px;
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left:5px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    }
    .myinput:focus{
            border-color: #66afe9;
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    .addText,.phoText {
        color: lightgrey;
        font-size: 12px;
    }
    .order-product {
        margin: 20px auto;
    }
    .order-product img{
        width: 60px;
        height:60px;
    }
    .order-h3 {
        color: grey;
    }
</style>