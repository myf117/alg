<template>
    <div class="pag">
        <el-pagination
            background
            layout="prev, pager, next"
            hide-on-single-page 
            :page-count="page_count"
            @current-change='currntChange'
            @prev-click="preClick"
            @next-click="nextClick">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        props:['page_count'],
        methods: {
            currntChange(cpage){
                this.$emit("pageevent",cpage);
            },
            preClick(curr){
            },
            nextClick(curr){
            }
        },
    }
</script>
<style  scoped>
   
    .pag{
        display: block;
        width: auto;
    }
</style>