<template>
    <div class="class_content">
        <!-- 左侧显示条件 -->
        <div class="class_left">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title" >
                    <span class="class_title" @click="getGoods">猫咪主粮</span>
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
                    <span class="class_title" @click="getGoods">猫咪零食</span>
                    </template>
                    <div class="many">
                        <span>罐头湿粮</span>
                        <span>肉类零食</span>
                    </div>
                    <div class="many">
                        <span>猫草薄荷</span>
                        <span>休闲零食</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">猫砂毛厕</span>
                    </template>
                    <div class="many">
                        <span>彭润土猫砂</span>
                        <span>水晶猫砂</span>
                    </div>
                    <div class="many">
                        <span>松木猫砂</span>
                        <span>纸砂豆腐砂</span>
                    </div>
                    <div class="many">
                        <span>矿物猫砂</span>
                        <span>猫砂除臭</span>
                    </div>
                    <div class="many">
                        <span>猫咪厕所</span>
                        <span>排便清洁</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">猫咪玩具</span>
                    </template>
                    <div class="many">
                        <span>猫爬架</span>
                        <span>猫抓板</span>
                    </div>
                    <div class="many">
                        <span>逗猫玩具</span>
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
                clazz_id:2,
                good_id:201,
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
                    case '猫咪主粮':this.good_id = 201;break;
                    case '猫咪零食':this.good_id = 202;break;
                    case '猫砂毛厕':this.good_id = 203;break;
                    case '猫咪玩具':this.good_id = 204;break;
                }
            },
            getPage(page){
                this.page = page;
            },
            getpageCount(page_count){
                this.page_count = page_count;
            }
        },
        watch: {
            '$route.query.goods_id'(){
                this.goods_id = this.$route.query.goods_id;
            }
        },
        mounted() {
            // console.log(this.page);
        },
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