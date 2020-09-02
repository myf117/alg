<template>
  <div class="mypro">
    <div class="zhanshi">
      <div class="sear_goods_list" v-for="item in prodArrlist" :key="item.id">
        <div class="dl">
          <img :src="item.img_url" alt />
          <p class="name">{{item.discription}}</p>
          <p class="sear_price">价格：￥{{item.price}}</p>
        </div>
      </div>
    </div>

    <!-- <h2>从mypage组件接收到的值：{{product}}</h2> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodArrlist: [],
    };
  },
  mounted() {
    this.prodArrlist = this.product;
    console.log(this.prodArrlist);
  },
  watch: {
    product: function () {
      this.prodArrlist = this.product;
    },
  },
  components: {},
  props: ["product"],
};
</script>

<style>
.mypro {
  /* width: 1000px;
  margin: 0 auto;
  height: 900px; */
}
/* .zhanshi {
  width: 900px;
  margin: 0 auto;
  height: 900px;
} */
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