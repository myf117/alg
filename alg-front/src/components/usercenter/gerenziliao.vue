<template>
  <div>
    <div class="peopel" style="text-align: left;width:500px;">
      <h2 style="margin-bottom: 20px;text-align: center;">个人资料</h2>

      <div id="photo">
        <!-- 上传头像 -->
        <img width="80px" height="80px" id="myImg"  src="../../assets/touxiang.gif" />
        <input type="file" id="myFile" />
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="nichen">
          <el-input v-model="ruleForm.nichen"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="出生日期">
          <!-- <el-col :span="11"> -->
            <el-form-item prop="birth">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birth"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          <!-- </el-col> -->
        </el-form-item>

        <el-form-item label="收货地址" prop="address">
          <el-input type="input" v-model="ruleForm.address"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input type="number" v-model="ruleForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="个性签名" prop="qianmin">
          <el-input type="textarea" v-model="ruleForm.qianmin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <router-link to="/mypage">返回个人中心</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myselfxinxi: [],
      ruleForm: {
        nichen: "", //昵称
        birth: "", //出生日期
        sex: "", //性别
        qianmin: "", //签名
        head_url: "", //图片地址
        address: "", //收货地址
        phone: "", //手机号码
        username: ""
      },
      rules: {
        nichen: [
          { required: false, message: "请输入昵称", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        birth: [
          {
            type: "date",
            // required: true,
            message: "请选择日期",
            trigger: "change"
          },
        ],
        sex: [{ required: false, message: "请选择性别", trigger: "change" }],
        qianmin: [
          { required: false, message: "请填写个性签名", trigger: "blur" },
        ],
        address: [
          { required: false, message: "请填写收货地址", trigger: "blur" },
        ],
        phone: [
          { required: false, message: "请填写手机号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度为11个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //传给后端的个人资料的数据
      // console.log(this.ruleForm)
      // this.privatdata = this.ruleForm
      let arr = this.ruleForm;
      console.log(arr);
      this.$http
        .post("/gerenziliao", { arr:arr })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log("请求失败");
        });

      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
        } else {
          this.$message.error('修改失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    upMyFile(formData, config) {
      this.$http
        .post("/uploadFile", formData, config)
        .then((res) => {
          console.log("文件上传成功");
          // console.log(res.data);
          this.ruleForm.head_url = res.data;
          console.log(this.ruleForm.head_url);
          let myImg = document.getElementById("myImg");
          // console.log(myImg);
          myImg.setAttribute("src", this.ruleForm.head_url);
          // console.log(this.ruleForm.head_url);
          //   this.upPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log("上传文件ajax出错");
        });
    },
    //上传头像到数据库
    upPhoto(result) {
      this.$http
        .post("/upPhoto.do", {
          photo: result,
          //   username: username,
        })
        .then((res) => {
          console.log(res.data);
          console.log("上传头像成功");
        })
        .catch((err) => {
          console.log(err);
          console.log("上传头像ajax请求出错");
        });
    },
  },
  mounted() {
    //上传并及时返回图片
    this.ruleForm.username = this.cookie.getCookie("user");
    let myFile = document.getElementById("myFile");
    myFile.onchange = () => {
      let choose_file = myFile.files[0];
      let formData = new FormData();
      formData.append("uploadFile", choose_file, choose_file.name);
      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data;boundary=" + new Date().getTime(),
        },
      };
      let fType = choose_file.name.substring(
        choose_file.name.lastIndexOf(".") + 1
      );
      if (
        fType == "jpg" ||
        fType == "png" ||
        fType == "jpeg" ||
        fType == "JPG"
      ) {
        let size = choose_file.size / 1024 / 1024;
        if (size > 2) {
          alert("文件不能超过2M");
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(choose_file);
        this.upMyFile(formData, config);
        console.log(this.adatar);

        reader.onload = () => {
          let myImg = document.getElementById("myImg");
          myImg.setAttribute("src", this.ruleForm.adatar);
          console.log(this.ruleForm.adatar);
        };
      } else {
        alert("文件格式不正确");
        return false;
      }
    };
    //上传文件到指定文件夹
  },
  created() {
    let username1 = this.cookie.getCookie("user");
    this.$http
      .get("/getperson", {
        params: {username1},
      })
      .then((res) => {
        console.log("成功取到个人资料");
        console.log(res.data);
        this.ruleForm = res.data[0];
        console.log(this.ruleForm);
      })
      .catch((err) => {
        console.log(err);
        console.log("ajax出错");
      });
  },
};
</script>

<style>
.peopel {
  padding: 40px;
  display: inline-block;
  background-color: blanchedalmond;
}
#photo {
  border: 1px solid #999999;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  line-height: 80px;
  margin: 10px auto;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
#myImg {
  background-color: blanchedalmond;
  position: absolute;
  left: 0;
  top: 0;
  visibility: visible;
}
#myFile {
  width: 80px;
  height: 80px;
  /* visibility: hidden; */
  position: absolute;
  left: 0;
  top: 20px;
  opacity: 0;
}
</style>