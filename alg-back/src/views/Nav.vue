<template>
  <div class="Nav" v-cloak>
    <!-- 头部开始 -->
    <div class="nav-top">
      <div class="nav-top-set">
        <div>
          <i class="el-icon-user"></i>
          <span>管理员名字</span>
        </div>
        <div>
          <i class="el-icon-edit"></i>
          <span>修改密码</span>
        </div>
        <div>
          <i class="el-icon-switch-button"></i>
          <span>注销</span>
        </div>
      </div>
      <!-- 头部结束 -->
      <!-- 核心区开始 -->
      <div class="main">
        <div class="main-boxs"></div>
      </div>
      <!-- 核心区结束 -->
    </div>
    <!-- 侧边开始 -->
    <div>
      <div class="nav-left">
        <div class="head-logo">
          <img src="../assets/img/logo.png" alt="#" />
          <span class="span-one">A&LG</span>
          <span class="span-two">后台管理系统</span>
          <i class="el-icon-caret-left"></i>
        </div>
        <!-- :cmessage="isClick" :clickli="value" -->
        <div class="list">
          <el-collapse v-model="activeName" accordion @change="handleChange">
            <el-collapse-item name="1" :soncotent="pname" id="">
              <template slot="title">
                <i class="header-icon el-icon-s-home">后台主页</i>
              </template>
              <pulldownboult ></pulldownboult>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <i class="header-icon el-icon-s-order">订单管理</i>
              </template>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <i class="header-icon el-icon-s-goods">商品管理</i>
              </template>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template slot="title">
                <i class="header-icon el-icon-s-data">库存管理</i>
              </template>
            </el-collapse-item>
            <el-collapse-item name="5">
              <template slot="title">
                <i class="header-icon el-icon-picture">界面管理</i>
              </template>
            </el-collapse-item>
            <el-collapse-item name="6">
              <template slot="title">
                <i class="header-icon el-icon-menu">用户信息管理</i>
              </template>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <!-- 侧边结束 -->
    </div>
  </div>
</template>

<script>
import pulldown from "../components/common/pullDown";
import pulldownboult from "../components/common/pullDownBoult";

export default {
  data() {
    return {
      //判断是否点击
      isClick: false,
      //将e.target.innerHTML传给子组件
      value: "",
      activeName: "1",
      pname: "",
    };
  },
  methods: {
    // 获取点击的activeName
    handleChange(val) {
      console.log(val);
      this.pname = val;
      console.log(this.pname);
    },
    hand() {
      console.log(1);
    },
  },
  // 注册子组件
  components: {
    pulldown,
    pulldownboult: {
      props: ["soncotent"],
    },
  },
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
  width: 250px;
  height: 100%;
  background-color: #1c1c1c;
  position: absolute;
  z-index: 1;
  top: 0px;
  color: #c2c2c2;
}

/* 修改样式 */
.el-collapse-item__header {
  background-color: #1c1c1c !important;
  border-bottom: 1px solid #2c3441 !important;
  color: #c2c2c2 !important;
  font-size: 16px !important;
  padding-left: 20px;
}
.el-collapse-item__content {
  background-color: #1c1c1c !important;
  border-bottom: 1px solid #2c3441 !important;
}
/* 设置鼠标滑过，加左边框效果 */
.el-collapse-item :hover {
  border-left: 8px solid #15a848;
  transition: all 0.3s linear;
  background-color: rgb(71, 76, 92);
}
.el-icon-arrow-right :hover {
  border-left: 0px solid #15a848;
  transition: all 0.3s linear;
  background-color: #2c3441;
}
/* 设置主要内容区排版 */
.main {
  background-color: #fff;
  height: 100%;
  width: 100%;
  top: 60px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
.main-boxs {
  width: 100%;
  position: absolute;
  border-top: 1px solid #eee;
  left: 250px;
  padding: 10px;
}
</style>