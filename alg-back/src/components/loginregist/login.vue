<template>
  <div class="login">
    账户：
    <el-input placeholder="请输入用户名" v-model="user"></el-input>
    <br />密码：
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <br />
    <div class="pwd-oper">
      <el-switch v-model="value" inactive-text="记住密码" @change="getpwd" style="margin-top:15px "></el-switch>
      <el-link type="primary" @click="unknowPwd" style="margin-left:10px;margin-top:15px">忘记密码</el-link>
    </div>
    <el-row style="margin-top:20px;margin-bottom:100px">
      <el-button type="primary" @click="login" style="margin-right:90px;width:160px">登录</el-button>
      <!-- <el-button   type="primary" @click="toHome" >返回主页</el-button> -->
    </el-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user: "",
      pwd: "",
      value: false,
      knowPwd: false,
    };
  },
  methods: {
    //返回主页
    // toHome(){
    //     this.$router.push("/");
    // },
    //当输入后，发起请求登录，登录成功后去到某个界面
    login() {
      if (this.user !== "" && this.pwd !== "" && this.user == "admin") {
        this.$http
          .post("/login", {
            username: this.user,
            password: this.pwd,
          })
          .then((res) => {
            // this.$router.router.push()
            console.log(res.data);
            //将用户名存放在cookie
            this.cookie.setCookie("user", this.user);
            if (this.knowPwd) {
              //当点击了记住密码时，将密码放在cookie中，cookie中存放的是加密的
              this.cookie.setCookie("pwd", this.pwd);
              // this.cookie.setCookie('user_id',res.data[0].id);
            }

            // this.$router.push('/shopcart');
            this.$router.push("/homepage");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //记住密码
    getpwd() {
      if (this.value == true) {
        this.knowPwd = true;
      }
    },
    //从cookie中获取用户数据
    loadAccountInfo() {
      let cookieUser = this.cookie.getCookie("user");
      let cookiePwd = this.cookie.getCookie("pwd");
      if (cookieUser !== "" && cookiePwd !== "") {
        this.user = cookieUser;
        this.pwd = cookiePwd;
        this.value = true;
      }
    },
    //忘记密码
    unknowPwd() {
      //判断用户输入了用户名后，将用户名传入后台进行判断
      // if(this.user !== ''){
      //     this.$http.post('/unkown',{
      //         username:this.username
      //     }).then(res => {
      //         console.log(res.data);
      //     }).catch(err => {
      //         console.log(err);
      //     })
      // }
    },
  },
  mounted() {
    this.loadAccountInfo();
    
  },
};
</script>
<style scoped>
.login {
  box-sizing: border-box;
  color: #fff;
}
.el-input {
  width: 350px;
  height: 60px;
  margin: 15px;
}
.pwd-oper {
  width: 400px;
  display: flex;
  justify-content: space-around;
  color: #fff;
}
.login {
  width: 500px;
  box-shadow: 0, 0 0 6px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.el-button {
  margin: 10px 150px;
  font-size: 18px;
  text-align: center;
  color: white;
  border-radius: 5px;
  background-color: rgba(185, 184, 184, 0.623);
  border: 1px solid rgba(92, 85, 85, 0.425);
}
.el-button:hover {
  background-color: rgba(240, 238, 238, 0.89);
  color: rgb(35, 135, 250);
}

</style>