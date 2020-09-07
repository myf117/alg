<template>
    <div class="productall">
        <showproduct v-for="item in productArr" :key="item.id" :img_url='item.img_url' :count="item.count"
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
        props:['class_id','goods_id','page'],
        provide:{

        },
        components:{
            showproduct
        },
        methods: {
            getAllProduct(){
                // console.log(this.goods_id);
                this.$http.get('/limitClassProduct',{
                    params:{
                        class_id:this.class_id,
                        goods_id:this.goods_id,
                        page:this.page
                    }
                }).then(res => {
                    this.productArr = res.data.list;
                    this.$emit('pagecountevent',res.data.page_count);
                    //将查询出的数组暂存在store的productArr中
                    // this.$store.commit('modifyProductArr',this.productArr);
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
            },
            'page':function(){
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
        /* font-size: 4px; */
    }
    .productall {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        height: 680px;
    }
</style>