<template>
  <div class="main-page-div">
    <div class="taday">
      <div class="topst">
        <div class="iconhome">
          <span class="el-icon-loading clspan"></span>
        </div>
        <div class="topstdiv">今日数据统计</div>
      </div>
      <div class="cont">
        <ul class="homeul">
          <li class="homeli">
            <div class="posjt" :class="{ 'el-icon-top':top1,'el-icon-bottom':bottom1}"></div>
            <div class="leftcon">
              <p>今日数订单数量</p>
              <h2>{{newtimeArr}}</h2>
            </div>
            <div class="rightcon">
              <p>与昨日数量对比</p>
              <h2>{{qty1}}{{timeArr}}</h2>
            </div>
          </li>
          <li class="homeli">
            <div class="posjt" :class="{ 'el-icon-top':top2,'el-icon-bottom':bottom2}"></div>
            <div class="leftcon">
              <p>今日数订单总额</p>
              <h2>{{newTotalPrice}}</h2>
            </div>
            <div class="rightcon">
              <p>与昨日金额对比</p>
              <h2>{{qty2}}{{TotalPrice}}</h2>
            </div>
          </li>
          <li class="homeli">
            <div class="posjt" :class="{'el-icon-top':top3,'el-icon-bottom':bottom3}"></div>
            <div class="leftcon">
              <p>今日下单用户数</p>
              <h2>{{newUser}}</h2>
            </div>
            <div class="rightcon">
              <p>与昨日数量相比</p>
              <h2>{{qty}}{{oldUser}}</h2>
            </div>
          </li>
          <li class="homeli">
            <div class="posjtbottom" :class="{'el-icon-top':top4,'el-icon-bottom':bottom4}"></div>
            <div class="bottomcon">
              <p>平台拥有总用户数</p>
              <h2>{{usercount}}</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 出单时段 -->
    <div class="TimePeriod">
      <div class="topinfo">
        <i class="el-icon-time"></i>
        <span>出单时段统计</span>
      </div>
      <div class="bac-box">
        <ul class="timeli">
          <li>
            <span>00:00</span>
          </li>
          <li>
            <span>02:00</span>
          </li>
          <li>
            <span>04:00</span>
          </li>
          <li>
            <span>06:00</span>
          </li>
          <li>
            <span>08:00</span>
          </li>
          <li>
            <span>10:00</span>
          </li>
          <li>
            <span>12:00</span>
          </li>
          <li>
            <span>14:00</span>
          </li>
          <li>
            <span>16:00</span>
          </li>
          <li>
            <span>18:00</span>
          </li>
          <li>
            <span>20:00</span>
          </li>
          <li>
            <span>22:00</span>
          </li>
        </ul>
        <ul class="progressBar">
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t0"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t1"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t2"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t3"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t4"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t5"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t6"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t7"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t8"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t9"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t10"></el-progress>
          </li>
          <li>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="t11"></el-progress>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script >
import clock from "../../assets/js/clock";
export default {
  data() {
    return {
      top1: true,
      bottom1: false,
      top2: true,
      bottom2: false,
      top3: true,
      bottom3: false,
      top4: true,
      bottom4: false,
      // 用户数量
      usercount: "",
      // 今天订单数量
      newtimeArr: 0,
      // 昨天订单数量
      oldtimeArr: 0,
      timeArr: 0,
      qty1: "",
      // 今日订单总额
      newTotalPrice: 0,
      // 昨日订单总额
      oldTotalPrice: 0,
      TotalPrice: 0,
      qty2: "",
      // 今日下单用户数
      newUser: 0,
      add: "",
      // 今日下单用户数
      oldUser: 0,
      reduce: "",
      qty: "",
      // 时间段数
      t0: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0,
      t5: 0,
      t6: 0,
      t7: 0,
      t8: 0,
      t9: 0,
      t10: 0,
      t11: 0,
      t12: 0,
      // 今日订单总数
    };
  },
  mounted() {
    //获取订单
    this.$http
      .get("/getOrderInfo", {
        params: {},
      })
      .then((list) => {
        let r=list.data
        this.dataCom(r);
        this.timeCom(r);
      })
      .catch((e) => {
        console.log(e);
      });
    //获取总用户数
    this.$http
      .get("/user.do", {
        params: {},
      })
      .then((res) => {
        this.usercount = res.data.length;
        // console.log(this.usercount);
      })
      .catch((e) => {});
  },
  methods: {
    submitForm() {},
    resetForm() {},
    // 左侧数据处理
    dataCom(r) {
      let nowTime = new Date();
      let y = nowTime.getFullYear();
      let m = nowTime.getMonth() + 1;
      let d = nowTime.getDate();
      //  console.log(y,m,d)
      //  今日定单数
      this.newtimeArr = 0;
      //  昨天订单数
      this.oldtimeArr = 0;
      // 今日订单总额
      this.newTotalPrice = 0;
      // 昨日订单总额
      this.oldTotalPrice = 0;
      //  今日下单用户数
      let newUser = [];
      let oldUser = [];
      console.log(r)
      for (let i = 0; i < r.length; i++) {
        // 订单年
        let oYear = r[i].otime.substring(0, 4);
        // 订单月
        let oMonth = r[i].otime.substring(5, 7);
        // 订单日
        let oMday = r[i].otime.substring(8, 10);
        console.log(r[i].otime)
        // 订单 时
        // 今日数据处理
        // console.log(oMday)
        // console.log(oMonth)
        // console.log(y,m,d)
        // console.log(d)
        // console.log(oMday)
        if (y == oYear && m == oMonth && d == oMday) {
          
          // 今天
          this.newtimeArr += 1;
          // console.log(this.newtimeArr)
          // 订单总额
          this.newTotalPrice += r[i].total;
          // 下单用户数据处理
          newUser.push(r[i].uname);
        } else if (y == oYear && m == oMonth && d == oMday - 1) {
          // 昨天数据
          this.oldtimeArr += 1;
          // console.log(this.oldtimeArr)
          // 订单总额
          this.oldTotalPrice += r[i].total;
          console.log(this.oldTotalPrice)
          // 下单用户数据处理
          oldUser.push(r[i].uname);
        }
      }
      // 去掉重复的用户
      let a = new Set(newUser);
      let b = new Set(oldUser);
      this.newUser = a.size;
      this.oldUser = b.size;
      // 判断是增加还是减少
      if (this.newUser >= this.newUser) {
        let v = this.newUser - this.oldUser;
        // console.log(v);
        // 增
        this.oldUser = v;
        this.qty = "+";
      } else {
        let n = this.oldUser - this.newUser;
        // 减少
        this.oldUser = v;
        this.qty = "-";
      }
      // 定单数量判断
      if (this.newtimeArr >= this.oldtimeArr) {
        // 增
        this.qty1 = "+";
        this.timeArr = this.newtimeArr - this.oldtimeArr;
      } else {
        this.qty1 = "-";
        this.timeArr = this.oldtimeArr - this.newtimeArr;
      }
      // 订单总额
      if (this.newTotalPrice >= this.oldTotalPrice) {
        // 增
        this.qty2 = "+";
        this.TotalPrice = this.newTotalPrice - this.oldTotalPrice;
      } else {
        this.qty2 = "-";
        this.TotalPrice = this.oldTotalPrice - this.newTotalPrice;
      }
    },
    // 右侧时间段处理
    timeCom(r) {
        // console.log(r)
      
      for (let i = 0; i <r.length; i++) {
        // console.log(r[i].otime)
        //  截取时间
        // 订单年
        let oYear = r[i].otime.substring(0, 4);
        // 订单月
        let oMonth = r[i].otime.substring(5, 7);
        // 订单日
        let oMday = r[i].otime.substring(8, 10);
        // 订单 时
        let oHour = r[i].otime.substring(11, 13);
        let reg = /^[0].*/;
        if (reg.test(oHour)) {
          oHour = oHour.substring(1);
        }
        // 时间段处理
        if (oHour >= 22 && oHour < 24) {
          this.t12 += 1;
        } else if (oHour >= 0 && oHour < 2) {
          this.t1 += 1;
        } else if (oHour >= 2 && oHour < 4) {
          this.t2 += 1;
        } else if (oHour >= 4 && oHour < 6) {
          this.t3 += 1;
        } else if (oHour >= 6 && oHour < 8) {
          this.t4 += 1;
        } else if (oHour >= 8 && oHour < 10) {
          this.t5 += 1;
        } else if (oHour >= 10 && oHour < 12) {
          this.t6 += 1;
        } else if (oHour >= 12 && oHour < 14) {
          this.t7 += 1;
        } else if (oHour >= 14 && oHour < 16) {
          this.t8 += 1;
        } else if (oHour >= 16 && oHour < 18) {
          this.t9 += 1;
        } else if (oHour >= 18 && oHour < 20) {
          this.t10 += 1;
        } else if (oHour >= 20 && oHour < 22) {
          this.t11 += 1;
        }
      }

      if (this.t0 != 0) {
        this.t0 = parseInt(r.length / this.t0);
      } else if (this.t0 == 0) {
        this.t0 = 0;
      }
      if (this.t1 != 0) {
        this.t1 = parseInt(r.length / this.t1);
      } else if (this.t1 == 0) {
        this.t1 = 0;
      }
      if (this.t2 != 0) {
        this.t2 = parseInt(r.length / this.t2);
      } else if (this.t2 == 0) {
        this.t2 = 0;
      }
      if (this.t3 != 0) {
        this.t3 = parseInt(r.length / this.t3);
      } else if (this.t3 == 0) {
        this.t3 = 0;
      }
      if (this.t4 != 0) {
        this.t4 = parseInt(r.length / this.t4);
      } else if (this.t4 == 0) {
        this.t4 = 0;
      }
      if (this.t5 != 0) {
        this.t5 = parseInt(r.length / this.t5);
      } else if (this.t5 == 0) {
        this.t5 = 0;
      }
      if (this.t6 != 0) {
        this.t6 = parseInt(r.length / this.t6);
      } else if (this.t6 == 0) {
        this.t6 = 0;
      }
      if (this.t7 != 0) {
        this.t7 = parseInt(r.length / this.t7);
      } else if (this.t7 == 0) {
        this.t7 = 0;
      }
      if (this.t8 != 0) {
        this.t8 = parseInt(r.length / this.t8);
      } else if (this.t8 == 0) {
        this.t8 = 0;
      }
      if (this.t9 != 0) {
        this.t9 = parseInt(r.length / this.t9);
      } else if (this.t9 == 0) {
        this.t9 = 0;
      }
      if (this.t10 != 0) {
        this.t10 = parseInt(r.length / this.t10);
      } else if (this.t10 == 0) {
        this.t10 = 0;
      }
      if (this.t11 != 0) {
        this.t11 = parseInt(r.length / this.t11);
      } else if (this.t11 == 0) {
        this.t11 = 0;
      }
    },
  },
};
</script>
<style >
.main-page-div {
  widows: 800px;
  display: flex;
  justify-content: space-between;
}
.clockC {
  border: 1px solid black;
  position: relative;
}
/* 今日统计数据 */

.taday {
  background-color: blanchedalmond;
  width: 400px;
  height: 540px;
  margin-left: 80px;
  border-radius: 15px;
  margin-top: 45px;
  box-shadow: 10px 10px 9px #888888;
  display: inline-block;
  color: #383636;
}
.iconhome {
  height: 13px;
  width: 13px;
  display: flex;
  color: red;
}
.clspan {
  position: relative;
  top: 10px;
}
/* 今日数据栏 */
.topst {
  padding: 0px 50px;
  justify-content: space-between;
  width: 95%;
  height: 30px;
  border-bottom: 3px solid #ccc;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin: 10px;
}
.homeul {
  padding: 0px;
}
.homeli {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: left;
  flex-direction: row;
  flex-flow: nowrap;
  position: relative;
}
/* 详细数据样式 */
.leftcon {
  height: 50px;
  width: 150px;
  /* background-color: red; */
  position: absolute;
  left: 50px;
  text-align: center;
}
.rightcon {
  position: absolute;
  right: 0px;
  height: 50px;
  width: 150px;
  /* background-color: #bbbbbb; */
  text-align: center;
}
.leftcon p,
.rightcon p {
  margin: 15px 5px;
}
.posjt,
.posjtbottom {
  /* background: chartreuse; */
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  margin-top: 20px;
}
.posjtbottom {
  margin-top: 10px;
}
.bottomcon {
  width: 300px;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  height: 30px;
  line-height: 30px;
}
.el-icon-top {
  color: #67c23a;
}
.el-icon-bottom {
  color: #f56c6c;
}
/* 出单时段 */
.TimePeriod {
  background-color: blanchedalmond;
  width: 433px;
  margin-left: 2.5%;
  border-radius: 15px;
  margin-top: 45px;
  box-shadow: 10px 10px 9px #888888;
  position: absolute;
  display: inline-block;
  right: 300px;
  top: 0px;
  height: 540px;
}
/* 时间段 */
.topinfo {
  margin: 10px;
  width: 95%;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 50px;
  font-size: 20px;
  border-bottom: 3px solid #ccc;
}
.bac-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.timeli {
  display: flex;
  position: absolute;
  width: 17%;
  height: 500px;
  flex-direction: column;
  left: 0px;
  list-style: none;
  text-align: center;
  padding: 0px;
}
.progressBar {
  display: flex;
  position: absolute;
}
.progressBar {
  display: flex;
  position: absolute;
  width: 80%;
  height: 500px;
  flex-direction: column;
  right: 10px;
  list-style: none;
  text-align: center;
  padding: 0px;
}
.timeli span {
  display: block;
  margin: 10px 0px;
}
.progressBar li {
  display: block;
  margin: 10px 0px;
}
</style>