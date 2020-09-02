<template>
        <el-steps :active="1" simple class="range">
            <el-step title="选择商品" icon="el-icon-s-fold"></el-step>
            <el-step title="提交订单" icon="el-icon-upload"></el-step>
            <el-step title="处理成功" icon="el-icon-check"></el-step>
        </el-steps>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .range {
        width: 700px;
        background-color: #ffffff;
    }
</style>