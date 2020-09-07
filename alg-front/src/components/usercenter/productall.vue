<template>
  <div class="showproduct-one">
    <div style="margin:20px auto;" >
      <div class="sear_goods_list" v-for="item in product" :key="item.id" @click="toXQ(item.id)">
          <div class="dl">
            <img :src="item.img_url" alt />
            <p class="name">{{item.discription}}</p>
            <p class="sear_price">￥{{item.price}}</p>
          </div>
      </div>
  </div>
  <!-- <pagenation :page_count="page_count" @pageevent="getpage"></pagenation> -->
  </div>
  
</template>

<script>
import pagenation from "../shopping/pagenation";
export default {
   data() {
    return {
      product: [],
      page_count:1,
      page:1
    };
  },
  components:{
    pagenation
  },
  mounted() {
    this.product=this.$route.query
  },
  methods: {
    toXQ(product_id){
        this.$router.push({
          name:'gouwu',
          query:{
              product_id:product_id
          }
      });
    },
    getpage(page){
      this.page = page;
    }
  },
};
</script>

<style>
.sear_goods_list {
  float: left;
  width: 228px;
  height: 328px;
  border: 1px solid #e6e6e6;
  position: relative;
  margin: 10px;
  cursor: pointer;
}
.sear_goods_list:hover {
  border: 1px solid #f65;
}
.sear_goods_list .dl {
  padding: 9px;
}
.sear_goods_list .dl img {
  width: 210px;
  height: 210px;
}
.sear_goods_list .dl .name {
  height: 34px;
  font: 14px Arial, "SimSun";
  overflow: hidden;
  margin-top: 7px;
}
.sear_goods_list .dl .name:hover {
  color: #f65;
}
.sear_goods_list .dl .sear_price {
  color: #f65;
  font: 16px "Arial";
  margin-top: 15px;
}
.showproduct-one {
  margin: 10px auto;
}
</style>