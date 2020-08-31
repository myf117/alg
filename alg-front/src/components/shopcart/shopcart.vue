<template>
    <div class="shopcart">
        <div class="shopcart-top">
            <p class="title">购物车</p>
            <cartrange></cartrange>
        </div>
        <carttable></carttable>
    </div>
</template>
<script>
import cartrange from "./range";
import carttable from "./shoptable";
    export default {
        components:{
            cartrange,
            carttable
        }
    }
</script>
<style scoped>
    /* .shopcart {
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    } */
    .shopcart-top {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .title {
        color: lightcoral;
        font-size: 30px;
    }
</style>