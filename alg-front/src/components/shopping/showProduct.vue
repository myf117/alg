<template>
    <div class="product">
        <img :src="img" width="150" height="150">
        <p class="price">￥{{price}}</p>
        <p class="dis">{{discription}}</p>
        <div @click="addToCart()" class="shopcart">
            <span class="el-icon-goods"></span>
            加入购物车
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                img:''
            }
        },
        props:['product_id','img_url','price','discription'],
        methods: {
            addToCart(){
                if(this.cookie.getCookie('user')){
                    this.$http.get('/addToCart',{
                        params:{
                            id:this.product_id,
                            user:this.cookie.getCookie('user')
                        }
                    }).then(res => {
                        console.log('添加购物车成功');
                        
                    }).catch(err => {
                        console.log(err);
                    })
                }else {
                    this.$router.push("/loginregist/login");
                }
            }
        },
        mounted() {
            this.img = this.img_url; 
        },
    }
</script>
<style scoped>
    .product {
        width: 120px;
        height: 200px;
        box-shadow: 2px 2px 10px lightgrey;
        position: relative;
        cursor: pointer;
    }
    .product:hover {
        top: -10px;
    }
    .price {
        color: red;
        font-size: 18px;
    }
    .shopcart {
        background-color: lightgrey;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        width: 90%;
        margin: 10px auto 0 auto;
        border-radius: 5px;
    }
    .shopcart:hover {
        background-color: red;
        color: #ffffff;
    }
    .dis {
        color: grey;
        font-size: 14px;
        height: 50px;
    }
    .price,.dis {
        margin-bottom: 10px;
    }
</style>