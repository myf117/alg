<template>
    <div>
        <el-pagination
            background
            layout="prev, pager, next"
            hide-on-single-page 
            :page-count="5"
            @current-change='currntChange'
            @prev-click="preClick"
            @next-click="nextClick">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        // props:['class_id','goods_id'],
        methods: {
            currntChange(cpage){
                // console.log(cpage);
                // this.$http.get('/showClassProduct',{
                //     params:{
                //         class_id:this.class_id,
                //         goods_id:this.goods_id,
                //         page:cpage
                //     }
                // }).then(res => {
                //     console.log(res.data);
                // })
                this.$emit("pageevent",cpage);
            },
            preClick(curr){
                // console.log(curr);
            },
            nextClick(curr){
                // console.log(curr);
            }
        },
    }
</script>