<template>
    <div class="mylogin" style="padding-bottom:100px">  
        账户：<el-input placeholder="请输入用户名" v-model="user" ></el-input><br>
        <p>{{textuser}}</p>
        密码：<el-input placeholder="请输入密码" v-model="pwd1" show-password></el-input><br>
        <p>{{textpwd1}}</p>
        确认：<el-input placeholder="请再次输入密码" v-model="pwd2" show-password></el-input><br>
        <p style="padding-right:70px">{{textpwd2}}</p>
        <el-row style="margin-top:10px">
            <el-button type="primary" @click="regist" class="button"
             style="margin-right:90px;width:160px">注册</el-button>
            <el-button type="primary" @click="toHome" class="button">返回主页</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:"",
            pwd1:"",
            pwd2:"",
            textuser:'5-18个字符，需以字母开头',
            textpwd1:'6~16个字符，区分大小写',
            textpwd2:'再次输入密码'
        }
    },
    watch: {
        "user":function(){
            if (this.user != '') {
				let reg = /^[A-Za-z][A-Za-z\d]{4,17}$/;
				if (this.user.match(reg)) {
					this.textuser = '';
				} else {
					this.textuser = '用户名格式错误';
				}
			} else {
				this.textuser = '用户名不能为空';
			}
			return this.textuser;
        },
        "pwd1":function(){
            if (this.pwd1 != '') {
				let reg = /^.{6,16}$/i;
				if (this.pwd1.match(reg)) {
					let res1 = /^[0-9][0-9]{5,15}$/;
					let res2 = /^[A-Za-z][A-Za-z]{5,15}$/;
					if (this.pwd1.match(res1)) {
						this.textpwd1 = '密码过于简单不能纯数字';
					} else if (this.pwd1.match(res2)) {
						this.textpwd1 = '密码过于简单不能纯字母';
					} else {
						this.textpwd1 = '';
					}
				} else {
					this.textpwd1 = '密码格式错误';
				}
			} else {
				this.textpwd1 = '密码不能为空';
			}
			return this.textpwd1;
        },
        "pwd2":function(){
            if(this.pwd1 === this.pwd2) {
                this.textpwd2 = '';
            }else {
                this.textpwd2 = '两次密码不相同';
            }
            return this.textpwd2;
        }
    },
    methods: {
        //返回主页
        toHome(){
            this.$router.push("/");
        },
        regist(){
            //当提示信息为空时，发起请求注册，注册成功后跳转到登录子路由
            if(this.textuser === '' && this.textpwd1 === '' && this.textpwd2 === ''){
                this.$http.post('/regist',{
                    username:this.user,
                    password:this.pwd1
                }).then(res => {
                    this.$router.push('/loginregist/login')
                    console.log(res.data);
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    },
}
</script>
<style scoped>
    .mylogin .el-input {
        width: 300px;
        height: 50px;
        margin-bottom: 0;
        margin-top: 5px;
    }
    .mylogin .pwd-oper {
        width: 500px;
        display: flex;
        justify-content: space-around;
        margin: 5px auto;
    }
    .mylogin .login {
        width: 500px;
        box-shadow: 0,0 0 6px rgba(0, 0, 0, .04),0 2px 4px rgba(0, 0, 0, .12);
        border-radius: 4px;
        /* margin: -20px auto; */
    }
    .mylogin p {
        font-size: 10px;
        color: lightgray;
        margin-bottom: 5px;
        margin-right: 110px;
    }
    .mylogin .el-button {
        background-color:#ccc;
    }
    .mylogin .el-button:hover{
        background-color: #ddd;
    }
</style>