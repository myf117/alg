<template>
    <div class="class_content">
        <!-- 左侧显示条件 -->
        <div class="class_left">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title" >
                    <span class="class_title" @click="getGoods">狗狗主粮</span>
                    </template>
                    <div class="many">
                        <span>进口粮</span>
                        <span>国产粮</span>
                    </div>
                    <div class="many">
                        <span>处方粮</span>
                        <span>冻干粮</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">狗狗零食</span>
                    </template>
                    <div class="many">
                        <span>罐头湿粮</span>
                        <span>肉类零食</span>
                    </div>
                    <div class="many">
                        <span>磨牙洁齿</span>
                        <span>奶酪饼干</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">狗狗玩具</span>
                    </template>
                    <div class="many">
                        <span>益智玩具</span>
                        <span>磨牙玩具</span>
                    </div>
                    <div class="many">
                        <span>训练玩具</span>
                        <span>漏食玩具</span>
                    </div>
                    <div class="many">
                        <span>互动玩具</span>
                        <span>毛绒玩具</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title">狗狗美容</span>
                    </template>
                    <div class="many">
                        <span>洗液香波</span>
                        <span>梳剪工具</span>
                    </div>
                    <div class="many">
                        <span>洗澡用品</span>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        
        <div class="class_right">
            <!-- 右边显示商品 -->
            <showproductall :class_id="clazz_id" :goods_id="good_id" :page="page" @pagecountevent='getpageCount'></showproductall>
            <rightfloat></rightfloat>
            <!-- 分页器 -->
            <pagenation @pageevent="getPage" :page_count="page_count"></pagenation>
        </div>
    </div>
</template>
<script>
    import showproductall from '../components/shopping/showProductAll';
    import pagenation from '../components/shopping/pagenation';
    export default {
        data() {
            return {
                clazz_id:1,
                good_id:101,
                page:1,
                page_count:1
            }
        },
        components:{
            showproductall,
            pagenation
        },
        methods: {
            getGoods(e){
                switch(e.target.innerHTML){
                    case '狗狗主粮':this.good_id = 101;break;
                    case '狗狗零食':this.good_id = 102;break;
                    case '狗狗玩具':this.good_id = 103;break;
                }
                
            },
            getPage(page){
                this.page = page;
            },
            getpageCount(page_count){
                this.page_count = page_count;
            }
        },
        mounted() {
            // if(!this.$route.query.goods_id){
            //     this.good_id = this.$route.query.goods_id;
            //     console.log(this.goods_id);
            // }
        },
        watch: {
            '$route.query.goods_id'(){
                this.goods_id = this.$route.query.goods_id;
            }
        }
    }
</script>
<style>
    .class_left {
        width: 25%;
        height: 500px;
        border: 1px solid #F3F3F3;
        margin-top: 20px;
    }
    .class_right {
        width: 65%;
    }
    .class_left,.class_right {
        display: inline-block;
    }
    .class_content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    .el-collapse-item {
        background-color: #F3F3F3 !important;
    }
    .class_title {
        padding-left: 20px;
    }
    .class_title:hover{
        color: lightsalmon;
    }
    .many {
        display: flex;
        justify-content: space-around;
        cursor: pointer;
    }
    .many >span {
        margin-top: 20px;
    }
    .many >span:hover {
        color: lightcoral;
    }
</style>