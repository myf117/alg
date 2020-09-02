<template>
  <div>
    <div class="peopel" style="text-align: left;width:500px;">
      <h2 style="margin-bottom: 20px;text-align: center;">个人资料</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="出生日期" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="你感兴趣的:" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="结识更多的宠友" name="type"></el-checkbox>
            <el-checkbox label="记录爱宠的成长" name="type"></el-checkbox>
            <el-checkbox label="学习、分享养护知识" name="type"></el-checkbox>
            <el-checkbox label="在线问诊，得到宠物医院的帮助" name="type"></el-checkbox>
            <el-checkbox label="更丰富的宠物用品" name="type"></el-checkbox>
            <el-checkbox label="线下宠友交流活动" name="type"></el-checkbox>
            <el-checkbox label="领养或转让宠物" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="个性签名" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个兴趣内容",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写个性签名", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.peopel {
  padding: 40px;
  display: inline-block;
  background-color: blanchedalmond;
}
</style>