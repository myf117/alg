<template>
  <div>
    <div class="daohanglan" >
      <div class="img">
        <img class="img1" src="../assets/logoll.png" @click="toHome" />
      </div>
      <el-tabs @tab-click="checked" type="border-card">
        <el-tab-pane name="myzhuye">
          <span slot="label">
            <i class="el-icon-date"></i> 我的主页
          </span>
        </el-tab-pane>
        <el-tab-pane label="社区主页" name="shequzheye"></el-tab-pane>
        <el-tab-pane label="个人设置"  name="privateset">
        </el-tab-pane>
        
      </el-tabs>
      <input class="shuru" v-model="input" placeholder="宠物用品/宠物百科" />
      <!-- <el-icon-search> -->
      <i class="el-icon-right" @click="search"></i>
      <!-- <productall :product="prodArr"></productall> -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import zhuye from "../components/usercenter/zhuye.vue";
// import shequ from "../components/usercenter/shequ.vue";
// import privateset from "../components/usercenter/privateset.vue";
// import productall from "../components/usercenter/productall.vue";

export default {
  components: {
    // zhuye,
    // shequ,
    // productall,
    // privateset,
  },
  data() {
    return {
      input: "",
      prodArr: [],
    };
  },
  methods: {
    toHome(){
      this.$router.push('/');
    },
    checked(tab, event) {
      console.log(tab.name);
      if (tab.name == "myzhuye") {
        this.$router.push({ path: "/mypage/zhuye" });
      }
      if (tab.name == "shequzheye") {
        this.$router.push({ path: "/mypage/shequ" });
      }
      if (tab.name == "privateset") {
        this.$router.push({ path: "/mypage/gerenziliao" });
      }
    },
    search() {
      console.log("search");
      this.getAllProduct();
      // if(this.$router.path!="/mypage" ){
      // this.$router.go(0);
      this.$router.push({ path: "/mypage/productall", query:this.prodArr });
      console.log(this.prodArr)
      // console.log(111)
      // }else{

      // }
    },
    getAllProduct() {
      console.log(this.input);
      this.$http
        .get("/getAllProduct", {
          params: {
            keyword: this.input,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.prodArr = res.data;
          console.log(this.prodArr);
          this.$router.push({
            path: "/mypage/productall",
            query: this.prodArr,
          });
        })
        .catch((e) => {
          console.log("请求失败");
        });
    },
  },
  created() {
    // this.prodArrlist=this.prodArr
    console.log(this);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.daohanglan {
  position: relative;
}
.daohanglan  .el-tabs__nav {
  background-color: #f05030;
  float: none !important;
  height: 100px;
  line-height: 100px;
}
.el-tabs__item is-top {
  color: white !important;
  font-size: 16px;
  line-height: 36px;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  font-size: 16px;
  color: white !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: red !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active:hover {
  color: red !important;
}

.shuru {
  position: absolute;
  right: 50px;
  top: 30px;
  z-index: 100;
  width: 300px;
  height: 38px;
  padding-left: 10px;
  border: transparent;
  /* background-color: burlywood; */
}
.el-icon-right {
  position: absolute;
  right: 55px;
  top: 40px;
  font-size: 20px;
  color: black;
  z-index: 101;
}
.img {
  display: inline-block;
  width: 200px;
  position: absolute;
  left: 55px;
  top: 20px;
  z-index: 50;
}
.img1 {
  width: 200px;
  height: 60px;
}
a {
  color: #1481bd;
  text-decoration: none;
}
a:hover {
  color: #fe730c;
  text-decoration: underline;
}

/* 消息 */
.xiaoxi:hover {
  color: #fe730c;
}
</style>