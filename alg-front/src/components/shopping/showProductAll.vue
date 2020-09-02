<template>
    <div class="productall">
        <showproduct v-for="item in productArr" :key="item.id" :img_url='item.img_url'
            :price="item.price" :discription="item.discription" :product_id="item.id" class="showproduct"
            > </showproduct>
    </div>
</template>
<script>
    import showproduct from './showProduct';
    export default {
        data() {
            return {
                productArr:[]
            }
        },
        props:['class_id','goods_id'],
        provide:{

        },
        components:{
            showproduct
        },
        methods: {
            getAllProduct(){
                this.$http.get('/showClassProduct',{
                    params:{
                        class_id:this.class_id,
                        goods_id:this.goods_id
                    }
                }).then(res => {
                    this.productArr = res.data;
                    //将查询出的数组暂存在store的productArr中
                    this.$store.commit('modifyProductArr',this.productArr);
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        mounted() {
            this.getAllProduct();
        },
        watch: {
            'goods_id':function(){
                this.getAllProduct();
            }
        },
    }
</script>
<style  scoped>
    .showproduct {
        margin: 20px;
        width: 150px;
        height: 300px;
    }
    .productall {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        height: 680px;
    }
</style>