<template>
    <div class="showOrderProduct">
        <img :src="img_url"  width="60px" height="80px">
        <span class="product-name">{{product_name}}</span>
        <span>{{price}}</span>
        <span>{{count}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                img_url:''
            }
        },
        props:['img_src','product_name','price','count'],
        mounted() {
            this.img_url = this.img_src;
        }
    }
</script>
<style scoped>
    .showOrderProduct {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        height: 100px;
    }
    .showOrderProduct > span {
        font-size: 14px;
        color: grey;
    }
    .product-name {
        word-break: break-all;
        white-space: normal;
        width: 120px;
    }
</style>