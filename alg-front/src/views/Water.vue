<template>
    <div class="class_content">
        <!-- 左侧显示条件 -->
        <div class="class_left">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title" >
                    <span class="class_title" @click="getGoods">鱼粮</span>
                    </template>
                    <div class="many">
                        <span>鱼粮</span>
                        <span>喂食器</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">鱼缸</span>
                    </template>
                    <div class="many">
                        <span>小型鱼缸</span>
                        <span>中型鱼缸</span>
                    </div>
                    <div class="many">
                        <span>大型鱼缸</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title" @click="getGoods">器材</span>
                    </template>
                    <div class="many">
                        <span>过滤器</span>
                        <span>滤材</span>
                    </div>
                    <div class="many">
                        <span>增氧泵</span>
                        <span>潜水泵</span>
                    </div>
                    <div class="many">
                        <span>温控设备</span>
                        <span>照明设备</span>
                    </div>
                    <div class="many">
                        <span>清洁用具</span>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                    <span class="class_title">药水</span>
                    </template>
                    <div class="many">
                        <span>硝化细菌</span>
                        <span>水质调理</span>
                    </div>
                    <div class="many">
                        <span>预防疾病</span>
                        <span>抑菌杀菌</span>
                    </div>
                    <div class="many">
                        <span>水草肥料</span>
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
                clazz_id:4,
                good_id:401,
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
                    case '鱼粮':this.good_id = 401;break;
                    case '鱼缸':this.good_id = 402;break;
                    case '器材':this.good_id = 403;break;
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