<template>
    <div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            hide-on-single-page 
            @current-change='currntChange'
            @prev-click="preClick"
            @next-click="nextClick">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        methods: {
            currntChange(){},
            preClick(curr){
                console.log(curr);
            },
            nextClick(curr){
                console.log(curr);
            }
        },
    }
</script>