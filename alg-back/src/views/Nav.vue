<template>
  <div class="Nav" v-cloak>
    <!-- 头部开始 -->
    <div class="nav-top">
      <div class="nav-top-set">
        <div>
          <i class="el-icon-user"></i>
          <span>{{user}}</span>
        </div>
        <!-- <div>
          <i class="el-icon-edit"></i>
          <span>修改密码</span>
        </div> -->
        <div @click="logout">
          <i class="el-icon-switch-button"></i>
          <span>注销</span>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 侧边开始 -->
    <div>
      <div class="nav-left">
        <!-- 导航栏头部logo -->
        <div class="head-logo">
          <img src="../assets/img/logo.png" alt="#" />
          <span class="span-one">A&LG</span>
          <span class="span-two">后台管理系统</span>
          <i class="el-icon-caret-left"></i>
        </div>
        <!-- 导航栏操作列表 -->
        <div class="list">
          <el-col :span="12">
            <el-menu
              :default-active=AC
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handClick"
              background-color="#1c1c1c"
              text-color="#c2c2c2"
              active-text-color="#ffd04b"
            >
              <!-- 后台主页 -->
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">后台主页</span>
              </el-menu-item>
              <!-- 订单管理 -->
              <el-menu-item index="2">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
              <!-- 商品管理 -->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">新增商品</el-menu-item>
                  <el-menu-item index="3-2">修改商品</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 界面管理 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-picture"></i>
                  <span>界面管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">修改百科</el-menu-item>
                  <el-menu-item index="5-2">新增百科</el-menu-item>
                  <el-menu-item index="5-3">上传图片</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 用户信息管理 -->
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">用户信息管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </div>
      <!-- 侧边结束 -->
    </div>
    <!-- 侧边开始 -->
  </div>
</template>

<script>
// 引入中央控制总线
import bus from "../assets/js/bus";

export default {
  data() {
    return {
      //判断是否点击
      isClick: false,
      //将e.target.innerHTML传给子组件
      value: "",
      activeName: "1",
      soncotent: "",
      // 点击的index初始值
      clickIndex: { f: "", s: "" },
      user:(this.cookie.getCookie('user') === 'admin')? 'admin': '登录',
      AC:"1"
    };
  },
  methods: {
    logout(){this.$router.push('/login')},
    // 获取点击的activeName
    handleChange(val) {
      console.log(val);
      if (val) {
        this.soncotent = val;
        console.log(this.soncotent);
      }
    }, //点击事件 将点击的值赋给clickIndex
    handClick(key, keyPath) {
      if (
        key == "1" ||
        key == "2" ||
        key == "3" ||
        key == "4" ||
        key == "5" ||
        key == "6"
      ) {
        this.clickIndex.f = key;
        this.AC=key
      } else {
        this.clickIndex.s = key;        
      }
      this.passClickIndex(this.clickIndex);      
      // console.log(this.clickIndex.f,this.clickIndex.s)
    },
    //展开事件 // 将点击的值赋给clickIndex
    handleOpen(index, keyPath) {
      this.clickIndex.f = index;
      this.passClickIndex(this.clickIndex);  
      //  console.log(this.clickIndex.f,this.clickIndex.s)
    },
    //关闭事件  将点击的值赋给clickIndex
    handleClose(index) {
      this.clickIndex.f = index;
      this.passClickIndex(this.clickIndex);  
      // console.log(this.clickIndex.f,this.clickIndex.s)
    },
    passClickIndex(index) {
      bus.$emit("passClickIndex", this.clickIndex);
    },
    routerchange(){

    }
  },
  // 注册子组件
  components: {},
};
</script>

<style >
[v-cloak] {
  display: none;
}
/* 设置顶端导航导航栏样式 */
.nav-top {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: relative;
}
/* 设置修改密码注销等样式 */
.nav-top-set {
  width: auto;
  height: 60px;
  display: flex;
  background-color: #fff;
  position: absolute;
  right: 50px;
}
.nav-top-set div {
  padding: 0 15px;
  height: 60px;
  line-height: 60px;
  color: rgb(145, 143, 143);
  cursor: pointer;
}
/* 设置logo样式 */
.head-logo {
  width: 100%;
  height: 110px;
  padding: 20px 0;
  overflow: hidden;
  box-sizing: border-box;
  line-height: 110px;
  border-bottom: 1px solid #2c3441;
  position: relative;
}
.head-logo img {
  width: 70px;
  height: 70px;
  background-color: #383838;
  border-radius: 10px;
  margin-left: 10px;
}
.span-one {
  /* display: block; */
  position: absolute;
  width: 100px;
  top: -10px;
  left: 109px;
  font-size: 18px;
  font-weight: 600;
  color: #bdc2c8;
}
.el-icon-caret-left {
  position: absolute;
  top: 24.5px;
  right: -6px;
  color: #fff;
}
.span-two {
  position: absolute;
  top: 60px;
  left: 88px;
  width: 100%;
  height: 25px;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  text-transform: Uppercase;
  color: #bdc2c8;
}
/* 设置左侧导航栏 */
.nav-left {
  width: 200px;
  height: 100%;
  background-color: #1c1c1c;
  position: absolute;
  z-index: 1;
  top: 0px;
  color: #c2c2c2;
}

/* 修改模版样式 */

.el-menu-vertical-demo {
  width: 200px;
   height:692px;
}
.el-submenu,
.el-menu-item {
  border-bottom: 1px solid #2c3441 !important;
}
.el-menu-vertical-demo :hover {
  background-color: rgb(71, 76, 92) !important;
}
.el-menu-item-group__title {
  padding-top: 0px !important;
}
/* 设置鼠标滑过，加左边框效果 */
/* .el-menu-vertical-demo li :hover {
  border-left: 8px solid #15a848;
  transition: all 0.3s linear;
  background-color: rgb(71, 76, 92);
} */
</style>