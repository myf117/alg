<template>
    <div class="class_content">
        <!-- 左侧显示条件 -->
        <div class="class_left">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title" >
                    <span class="class_title" @click="getGoods">兔子</span>
                    </template>
                    <div class="many">
                        <span>兔粮</span>
                        <span>用具</span>
                    </div>
                    <div class="many">
                        <span>笼窝</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">仓鼠</span>
                    </template>
                    <div class="many">
                        <span>仓鼠粮</span>
                        <span>笼窝</span>
                    </div>
                    <div class="many">
                        <span>器具</span>
                        <span>玩具</span>
                    </div>
                    <div class="many">
                        <span>磨牙</span>
                        <span>清洁</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">龙猫</span>
                    </template>
                    <div class="many">
                        <span>龙猫粮</span>
                        <span>龙猫用品</span>
                    </div>
                    <div class="many">
                        <span>龙猫</span>
                        <span>笼窝</span>
                    </div>
                    <div class="many">
                        <span>用具</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title">乌龟</span>
                    </template>
                    <div class="many">
                        <span>龟粮</span>
                        <span>龟箱</span>
                    </div>
                    <div class="many">
                        <span>医疗</span>
                        <span>器材</span>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="class_right">
            <!-- 右边显示商品 -->
            <showproductall :class_id="clazz_id" :goods_id="good_id" :page="page" @pagecountevent='getpageCount'></showproductall>
            <!-- 分页器 -->
            <rightfloat></rightfloat>
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
                clazz_id:3,
                good_id:301,
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
                    case '兔子':this.good_id = 301;break;
                    case '仓鼠':this.good_id = 302;break;
                    case '龙猫':this.good_id = 303;break;
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