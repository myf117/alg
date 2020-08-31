<template>
  <div>
    <ul class="categories">
      <li>狗狗商品</li>
      <li>猫猫商品</li>
      <li>奇趣小宠</li>
      <li>水族鱼缸</li>
      <li>{{pname}}</li>
    </ul>
  </div>
</template>
<script >
export default {
  props:["pname"],


};
</script>
<style scoped>
/* 设置商品管理下拉内容 */
.categories {
  padding-left: 0px;
}
.categories li {
  padding-left: 40px;
  list-style: none;
  border-bottom: 1px solid #2c3441;
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  /* 鼠标移出时效果不会立马消失 */
  transition: all 0.3s linear;
}
.categories li:hover {
  border-left: 0px solid #15a848;
  background-color: rgb(71, 76, 92);
}
</style>