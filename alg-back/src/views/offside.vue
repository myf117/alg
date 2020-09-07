<template>
  <!-- 核心区开始 -->
  <div>
    <!-- <newlyIncreased class="main-boxs"></newlyIncreased> -->
    <router-view class="main-boxs"></router-view>
  </div>
</template>

<script >
import router from "../router/index.js";
// 引入中央控制总线
import bus from "../assets/js/bus";
export default {
  data() {
    return {
      getIndexNum: "",
      level1: "",
      level2: "",
    };
  },
  mounted() {
    // 接受传过来的index值
    bus.$on("passClickIndex", (index) => {
      this.getIndexNum = index;
      this.level1 = index.f;
      this.level2 = index.s;
      // console.log(this.level1);
      // console.log(this.level2);
    });
  },
  watch: {
    level1: function () {
      let path;
      if (this.level1 == "1") {
        path = "/homepage";
      } else if (this.level1 == "2") {
        path = "/orderManagement";
      } else if (this.level1 == "3") {
        path = "/modifyProduct";
      } else if (this.level1 == "4") {
        path = "/petEncyclopedia";
      } else if (this.level1 == "5") {
        path = "/userInfo";
      } 
      if (this.$route.fullPath != path) {
        router.push(path);
      }
    },
    level2: function () {
      let path;
      if (this.level2 == "3-1") {
        // 点击商品 详情跳转
        path = "/newlyIncreased";        
      } else if(this.level2 == "3-2" ) {
        path = "/modifyProduct";
      } else if(this.level2 == "5-1"){
        path = "/petEncyclopedia";
      }else if(this.level2 == "5-2"){
        path = "/modifyEncyclopedia";
      }else if(this.level2 == "5-3"){
        path = "/uploadImage";
      }
      if (this.$route.fullPath != path) {
        router.push(path);
      }
    },
  },
};
</script>

<style scoped>
/* 设置主要内容区排版 */
.main-boxs {
  width: 95%;
  height:730px;
  position: absolute;
  border-top: 1px solid #ccc;
  left: 200px;
  background-color: rgb(240, 238, 238);
}
</style>