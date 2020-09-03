<template>
    <div class="product" >
        <img :src="img" width="150" height="160" style="width:140px;height:140px;margin:5px" @click="toXQ(product_id)">
        <p class="price" style="font-size:10px">￥{{price}}</p>
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
        // watch: {
        //     "$route.params"(){
        //         this.toXQ(product_id,price,img_url,discription)
        //     }            
        // },
        props:['product_id','img_url','price','discription'],
        methods: {
            addToCart(){
                if(this.cookie.getCookie('user')){
                    this.$http.get('/addToCart',{
                        params:{
                            id:this.product_id,
                            user:this.cookie.getCookie('user'),
                            count:1
                        }
                    }).then(res => {
                        // console.log('添加购物车成功');
                        this.$alert('添加购物车成功', '成功提示', {
							confirmButtonText: '确定'
						});
                    }).catch(err => {
                        console.log(err);
                    })
                }else {
                    this.$router.push("/loginregist/login");
                }
            },
            toXQ(product_id){
                
                this.$router.push({
                    name:'gouwu',
                    query:{
                        product_id:product_id
                    }
                });
                // console.log(value)
            }
        },
        mounted() {
            this.img = this.img_url; 
        }
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
    .product:hover{
        border:2px solid #EE5533;
    } 
    .product .dis{
        width: 90px;
        font-size: 10px;
        position: absolute;
        top:155px;
        right: 10px;
    }
    .product:hover {
        top: -10px;
    }
    .price {
        position: absolute;
        top:153px;
        left:10px;
        color: red;
    }
    .shopcart {
        background-color: lightgrey;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        width: 80%;
        margin: 10px auto 0 auto;
        border-radius: 5px;
        position: absolute;
        top:230px;
        left: 15px;
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