<template>
  <div>
    <div class="omList">
      <el-table :data="MyOderMaArr" style="width: 90%" :height="600">
        <el-table-column prop="my" label="序号" width="75" sortable></el-table-column>
        <el-table-column prop="oid" label="订单号" width="90" sortable></el-table-column>
        <el-table-column prop="otime" label="下单时间" width="120" sortable></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="phone" label="联系方式" width="120" sortable></el-table-column>
          <el-table-column prop="uname" label="收货人" width="88" sortable></el-table-column>
          <el-table-column prop="address" width="120" label="收货地址"></el-table-column>
        </el-table-column>
        <el-table-column label="商品信息">
          <el-table-column prop="pname" label="商品名称" sortable></el-table-column>
          <el-table-column prop="count" label="数量" width="75" sortable></el-table-column>
          <el-table-column prop="total" label="总价" width="75" sortable></el-table-column>
        </el-table-column>
        <el-table-column prop="resolve" label="状态" width="75" sortable></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagenation @pageevent="getpage" class="pagenation" :page_count="page_count" ></pagenation>
    </div>
    <!-- 修改状态对话框 -->
    <el-dialog title="提示" :visible.sync="OderM" width="40%" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        label-hight="50px"
        class="demo-ruleForm"
        validate="valRes"
      >
        <el-form-item label="状态修改" prop="Oderstate">
          <el-input v-model="ruleForm.oderstateD"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </span>
    </el-dialog>
    <!-- 修改用信息对话框结束 -->
  </div>
</template>

<script >
import pagenation from "./../common/pagenation";
export default {
  data() {
    return {
      // 原始数据
      OderMaArr: [],
      // 我的数据，会修改
      MyOderMaArr: [],
      search: "",
      // 启用
      OderM: false,
      // 修改表单验证对象
      ruleForm: {
        oderstateD: "",
      },
      hdid: "",
      // 用于储存编辑改变的状态
      updateStat: "",
      //规则
      rules: {
        oderstateD: [
          { required: true, message: "状态不能为空", trigger: "blur" },
        ],
      },
      page: 1,
      page_count:1
    };
  },
  methods: {
    // 点击编辑
    handleEdit(index, row) {
      this.ruleForm.oderstateD = row.resolve;
      this.hdid = row.id;
      this.OderM = true;
      this.updateStat = row.resolve;
    },
    // 点击删除
    handleDelete(index, row) {
      this.hdid = row.id;
      if (row.resolve == "已完成") {
        this.$confirm("一旦删除无法恢复，确认删除吗？")
          .then((_) => {
            this.$http
              .get("/delOder", {
                params: {
                  id: this.hdid,
                },
              })
              .then((r) => {
                this.$alert("提示", "删除成功！", {});
                this.$router.go(0);
              })
              .catch((e) => {
                this.$alert("提示", "删除失败！", {});
              });
          })
          .catch((_) => {});
      } else {
        this.$confirm("只能删除已完成订单哦！")
          .then((_) => {})
          .catch((_) => {});
      }
    },
    // 点击关闭
    handleClose(done) {
      this.$confirm("还未提交哦，确认关闭吗？")
        .then((_) => {
          // 清空表格
          this.$refs[formName].resetFields();
          this.OderM = false;
          done();
        })
        .catch((_) => {});
    },
    // 点击取消
    resetForm(formName) {
      this.$confirm("还未提交哦，确认取消吗？")
        .then((_) => {
          // 清空表格
          this.$refs[formName].resetFields();
          // 关闭表格
          this.OderM = false;
          // 关闭对话框
          done();
        })
        .catch((_) => {});
    },
    // 点击编辑
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.updateStat == this.ruleForm.oderstateD) {
            // 未修改数据
            this.OderM = false;
          } else if (
            this.ruleForm.oderstateD == "未完成" ||
            this.ruleForm.oderstateD == "已完成" ||
            this.ruleForm.oderstateD == "处理中"
          ) {
            this.$http
              .post("/editOderState", {
                resolve: this.ruleForm.oderstateD,
                id: this.hdid,
              })
              .then((r) => {
                this.oderstateD = false;
                this.$alert("提示", "修改状态成功！", {});
                this.OderM = false;
                this.$router.go(0);
              })
              .catch((e) => {
                this.$alert("提示", "操作失败！", {
                  confirmButtonText: "确定",
                });
                this.oderstateD = false;
              });
          } else {
            this.$alert("状态只能为未处理、已完成、处理中", "提示", {
              confirmButtonText: "确定",
            });
          }
        } else {
          this.$alert("提示", "请输入有效的信息", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    getOder() {
      // 请求数据
      this.$http
        .get("/getAllOrder", {
          params: {
            page:this.page
          },
        })
        .then((list) => {
          let arr0 = [];
          let res = list.data.list;
          this.page_count = list.data.page_count;
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            let my = i + 1;
            let id = res[i].id;
            let oid = res[i].oid;
            let otime = res[i].otime;
            let address = res[i].address;
            let phone = res[i].phone;
            let total = res[i].total;
            let resolve = res[i].resolve;
            let pname = res[i].pname;
            let count = res[i].count;
            let uname = res[i].uname;
            arr0.push({
              my,
              count,
              id,
              oid,
              otime,
              address,
              phone,
              pname,
              total,
              resolve,
              uname,
            });
          }
          this.OderMaArr = arr0;
          this.MyOderMaArr = arr0;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 页数设置
    getpage(page) {
      this.page = page;
    },
  },
  mounted() {
    this.getOder();
  },
  watch: {
    // 分页查询
    page() {
      this.getOder();
    },
  },
  components: {
    pagenation,
  },
};
</script>
<style >
.omList {
  margin: 10px 15px;
}
.cell{max-height: 35px !important;overflow: hidden !important;}
.el-table tr,
.el-table__body td {
  text-align: center;
}
.pagenation{
  margin-top: 5px;
  position: relative;
  left: 470px;
  width: auto;
}
</style>