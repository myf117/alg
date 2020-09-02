<template>
  <div>
    <div style="padding-left:50px">
      <div class="sear_goods_list" v-for="item in product" :key="item.id">
        <div class="dl">
          <img :src="item.img_url" alt />
          <p class="name">{{item.discription}}</p>
          <p class="sear_price">¼Û¸ñ£º£¤{{item.price}}</p>
        </div>
      </div>
  </div>
  </div>
  
</template>

<script>
export default {
   data() {
    return {
      product: [],
    };
  },
  mounted() {
  //   console.log(this);
  //   console.log(this.$route.query);
    this.product=this.$route.query
    console.log(this.product);
  },
  methods: {
   
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
</style>