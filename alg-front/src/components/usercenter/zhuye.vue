<template>
  <div style="padding:20px">
       <div class="personal-side fl">
        <div class="left-modul">
            <span class="ps-sd-md-name ">交易管理</span>
            <div>
                <span class="little">商城订单</span><br>
                <span class="little">到货通知</span><br>
                <span class="little">我的收藏</span>
            </div>
        </div>
         <div class="left-modul">
            <span class="ps-sd-md-name ">资金管理</span>
            <div>
                <span class="little">余额</span><br>
                <span class="little">波奇豆</span><br>
                <span class="little">礼品卡</span><br>
                <span class="little">优惠券</span><br>
                <span class="little">奖品兑换</span>
            </div>
        </div>
         <div class="left-modul">
            <span class="ps-sd-md-name " @click="toSetting">个人设置</span>
            <div>
                <span class="little">个人资料</span><br>
                <span class="little">安全设置</span><br>
                <span class="little">收货地址</span><br>
                <span class="little">发票抬头</span><br>
                <span class="little">绑定账号</span><br>
                <span class="little">实名认证</span>
            </div>
        </div>
        <div class="left-modul">
            <span class="ps-sd-md-name ">消息管理</span>
            <div>
                <span class="little">咨询回复</span><br>
                <span class="little">系统通知</span><br>
                <span class="little">私信</span>
            </div>
        </div>
    </div>
    <div class="main">
      <div class="personal-module">
        <div>
          <img :src="imgurl?imgurl:require('../../assets/touxiang.gif')" alt class="tou" />
        </div>
        <div>
          <div class="ziliao">
            <div>
              <span>欢迎回来！</span>
              <router-link to="/mypage/gerenziliao">编辑个人资料</router-link>
              <router-view></router-view>
              <!-- <a href>编辑个人资料</a> -->
            </div>
            <div class="zhanghu">
              账户安全：
              <el-progress :text-inside="true" :stroke-width="15" :percentage="60"></el-progress>
            </div>
            <div>
              <a href>账户设置</a>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <p>我的资金:￥0</p>
          <p>现有资金:￥0</p>
          <p>波奇豆：10</p>
        </div>
      </div>
      <div class="ps-order-module">
        <div class="gouwudindan">
          <span>商城实物订单（shop.com）</span>
          <span>
            <a href="" style="font-size:12px; color: blue;" class="mall">去购物商城</a>
          </span>
        </div>

        <div class="dindan">
          <div>
            <i class="el-icon-s-order" @click="mydindan"></i>
            <p class="p">我的订单</p>
          </div>
          <div>
            <i class="el-icon-s-shop"></i>
            <p class="p">待支付</p>
          </div>
          <div>
            <i class="el-icon-s-finance"></i>
            <p class="p">待收货</p>
          </div>
          <div>
            <i class="el-icon-s-claim"></i>
            <p class="p">待评价</p>
          </div>
        </div>
      </div>
      <div class="personal-module-shiwu">
        <span>近期商城实物订单</span>
        <span>
          <router-link to="/shopcart/carttable">查看实物订单</router-link>
          <!-- <a href style="font-size:12px; color: blue;" class="mall">查看实物订单</a> -->
        </span>
      </div>
      <div class="personal-module-shiwu">
          <span>猜你喜欢</span>
      </div>
      <div class="personal-module-shiwu">
          <span>历史浏览</span>
      </div>
    </div>
   
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: "",
    };
  },
  methods: {
    toSetting() {
      this.$router.push("/mypage/gerenziliao");
    },
    mydindan() {
      this.$router.push("/shopcart/order");
    },
  },
  created() {
    console.log(this.cookie.getCookie("user"));
    let username = this.cookie.getCookie("user");
    this.$http
        .get("/gettouxiang", {
            params:{username}
        })
        .then((res) => {
          console.log("成功取到头像");
          console.log(res.data);
          this.imgurl = res.data[0].head_url;
          console.log(this.imgurl);
        })
        .catch((err) => {
          console.log(err);
          console.log("ajax出错");
        });
  },
};
</script>

<style>
.el-tabs__content {
  background-color: rgb(248, 245, 221);
}
.main {
  width: 800px;
  margin: 0 auto;
}

/* 个人信息部分 */
.personal-module {
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  width: 870px;
  height: 150px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}
.tou {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.ziliao {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 400px;
  height: 140px;
}
.zhanghu {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.el-progress-bar {
  width: 200px;
  height: 20px !important;
}

/* 个人订单部分 */
.ps-order-module {
  background-color: #fff;
  width: 870px;
  height: 150px;
  margin-bottom: 20px;
  padding: 20px;
}
.dindan {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}
.gouwudindan{
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.el-icon-s-order,
.el-icon-s-shop,
.el-icon-s-finance,
.el-icon-s-claim {
  font-size: 30px;
}
.p:hover {
  color: #F05030;
}

/* 近期实物订单 */
.personal-module-shiwu {
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
}
.mall:hover{
    color: #F05030 !important;
}

/* 左边导航框 */
.personal-side{
    float: left;
    
}
.left-modul{
    margin-left: 107px;
    width: 100px;
    text-align: left !important;
    margin-bottom: 10px;
}
.ps-sd-md-name {
    font-size: 16px;
    font-weight: 700;
    line-height: 31px;
    color: #3a3333;
}
.little{
    color: #6A6666;
    font-size: 14px;
    line-height: 30px;
    display: inline-block;
    height: 30px;
}
.little:hover{
  color: #F05030;
  cursor: pointer;
}
</style>