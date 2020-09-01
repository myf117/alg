<template>
  <div>
    <mynav></mynav>
    <offside class="main"></offside>
  </div>
</template>
<script >
import offside from "../views/offside";
import mynav from "../views/Nav";
export default {
  // 注册子组件
  components: {
    offside,
    mynav,
  },
};
</script>
<style scoped>
.main {
  background-color:#fff;
  height:695px ;
  width: 100%;
  top: 0px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
</style>