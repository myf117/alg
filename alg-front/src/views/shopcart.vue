<template>
    <div class="shopcart">
        <div class="shopcart-top">
            <p class="goback" @click="goback">返回</p>
            <p class="title">购物车</p>
            <cartrange></cartrange>
        </div>
        <router-view ></router-view>
        <!-- <carttable @cartevent="cartevent"></carttable>
        <order  id="user-order"></order> -->
    </div>
</template>
<script>
import cartrange from "../components/shopcart/range";
import carttable from "../components/shopcart/shoptable";
import order from "../components/shopcart/order";
    export default {
        data() {
            return {
                arr:[],
                cartNum:0
            }
        },
        components:{
            cartrange,
            carttable,
            order
        },
        methods: {
            goback(){
                this.$router.go(-1);
            },
            cartevent(value){
                this.arr = value.selectedArr;
                this.cartNum = value.cartNum;
            }
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
        border-bottom: 2px solid red;
    }
    .title {
        color: lightcoral;
        font-size: 30px;
    }
    .goback {
        font-size: 16px;
        cursor: pointer;
    }
    .goback:hover {
        color: lightcoral;
    }
</style>