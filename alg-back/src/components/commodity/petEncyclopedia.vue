<template>
  <div class="pet-modify">
    <div class="classifyne" >
          <label class="theFrist-cll theFrist-ch">分类</label>
            <el-dropdown split-button type="primary">
              {{firstClass}}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item,index) in dropdownArr"
                  :key="index"
                  @click.native="dropdownClick"
                >{{dropdownArr[index]}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button type="primary" class="submit-lunbo" @click="delbaike">删除</el-button>
    </div>
    <el-table
      :data="whileShowEnlist"
      style="width: 85%;"
      height="590"
      class="prtform"
      border
      :show-overflow-tooltip="true"
      :row-style="iRowStyle"
      :cell-style="iCellStyle"
      @selection-change="handleSelectionChange"
    >
      <!-- :cell-style="{height:'60px'}" :row-style="{height:'10px'}" -->
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="序号" prop="myid" width="75px" sortable></el-table-column>
      <el-table-column label="宠物名称" prop="myname" width="115px" sortable></el-table-column>
      <el-table-column
        label="详细信息"
        prop="mdiscription"
        sortable
        style="height:40px; text-overflow: ellipsis;"
      ></el-table-column>
      <el-table-column label="宠物图片" prop="date" width="100px">
        <template slot-scope="scope">
          <img :src="scope.row.myUrl" width="60" height="60" />
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="myclass" width="75" sortable></el-table-column>
      <el-table-column align="center" width="85px" label="操作">
        <!-- <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>-->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改用信息对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisiblebianji"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="130px"
        class="demo-ruleForm"
        validate="valRes"
      >
        <el-form-item label="宠物名称" prop="myname">
          <el-input v-model="ruleForm.myname"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="myclass">
          <el-input v-model="ruleForm.myclass"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <span slot="footer" class="dialog-footer">
          <el-button @click="resetForm('ruleForm')">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </span>
      </span>
    </el-dialog>
    <div class="mpagenation">
      <pagenation @pageevent="getpage" :page_count="page_count"></pagenation>
    </div>
  </div>
</template>
<script >
import pagenation from "../common/pagenation";
export default {
  components:{
    pagenation
  },
  data() {
    return {
      // 获取百科数据，并保存。不会改变的数据
      displayEnlist: [],
      // 保存被渲染的数据
      whileShowEnlist: [],
      // 保存会改变的数据
      whilechangedEnlist: [],
      // 搜索框初始化值
      search: "",
      firstClass: "狗狗",
      dropdownArr: ["狗狗", "猫咪", "小宠", "水族"],
      class_id: 1,
      page: 1,
      multipleSelection: [],
      dialogVisiblebianji: false,
      page_count: 1,
      id: "",
      // 修改表单验证对象
      ruleForm: {
        myname: "",
        myclass: "",
      },
      //规则
      rules: {
        myname: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        myclass: [{ required: true, message: "类别不能为空", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getMsg();
    
  },
  watch: {
    page() {
      this.getMsg();
    },
    class_id() {
      this.getMsg();
    },
    // 'page_count'(){
    //   this.getMsg()
    // }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
      // this.getAll(this.multipleSelection);
    },
    delbaike() {
      if (this.multipleSelection.length !== 0) {
        for (let i = 0; i < this.multipleSelection.length; i++) {
          this.$http
            .post("/delbaike", {
              id: this.multipleSelection[i].pid,
            })
            .then((res) => {
              this.$router.go(0);
              // this.$message({
              //   message: '删除成功',
              //   type: 'success'
              // });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        this.$alert("您还未选择要删除的信息", "错误提示", {
          confirmButtonText: "确定",
        });
      }
    },
    iRowStyle: function ({ row, rowIndex }) {
      return "height:60px";
    },
    iCellStyle: function ({ row, column, rowIndex, columnIndex }) {
      return "padding:0px";
    },
    getpage(page) {
      this.page = page;
    },
    getMsg() {
      this.$http
        .get("/limitbaike", {
          params: {
            class_id: this.class_id,
            page: this.page,
          },
        })
        .then((list) => {
          // console.log(list.data);
          // 将查询的原始值保存起来,不改变

          this.displayEnlist = list.data.list;
          // console.log(this.displayEnlist)
          this.page_count = list.data.page_count;
          // 对数据库传来的数据进行处理
          let arr = [];
          let res = list.data.list;
          for (let i = 0; i < res.length; i++) {
            let pid, myid, myname, myclass, myUrl, discription;
            pid = res[i].id;
            myid = i + 1;
            myname = res[i].pet_name;
            discription = res[i].context;
            myUrl = res[i].pet_img;
            // 将数据分类 myclass
            if (res[i].class_id === 1) {
              myclass = "狗狗类";
            } else if (res[i].class_id === 2) {
              myclass = "猫猫类";
            } else if (res[i].class_id === 3) {
              myclass = "奇趣小宠类";
            } else if (res[i].class_id === 4) {
              myclass = "水族类";
            }
            arr.push({
              pid: pid,
              myid: myid,
              myname: myname,
              myclass: myclass,
              myUrl: myUrl,
              mdiscription: discription,
            });
          }
          this.displayEnlist = arr;
          this.whileShowEnlist = arr;
          // console.log(arr);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    dropdownClick(e) {
      this.firstClass = e.target.innerHTML.substring(7);
      // 根据一级分类判断二级分类显示内容
      console.log(this.firstClass);
      switch (this.firstClass) {
        case "狗狗":
          this.class_id = 1;
          break;
        case "猫咪":
          this.class_id = 2;
          break;
        case "小宠":
          this.class_id = 3;
          break;
        case "水族":
          this.class_id = 4;
          break;
      }
    },
    handleEdit(index, row) {
      this.dialogVisiblebianji = true;
      this.ruleForm.myname = row.myname;
      this.ruleForm.myclass = row.myclass;
      // 用于提交时判断是否有修改的数据
      this.namep = row.myname;
      this.mychangeclass = row.myclass;
      this.id = row.pid;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //编辑用户信息点击表格外部或取消
    handleClose(done) {
      this.$confirm("还未提交哦，确认取消吗？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 编辑商品信息，点击取消的回调函数
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.namep == this.ruleForm.myname &&
            this.mychangeclass == this.ruleForm.myclass
          ) {
            // 未修改数据
            this.dialogVisiblebianji = false;
          } else {
            console.log(this.ruleForm.myname);
            console.log(this.ruleForm.myclass);
            console.log(this.id);
            this.$http
              .get("/editEncycle", {
                params: {
                  pet_name: this.ruleForm.myname,
                  id: this.id,
                  class_id: this.ruleForm.myclass,
                },
              })
              .then((r) => {
                this.dialogVisiblebianji = false;
                this.$alert("提示", "修改成功！", {
                  confirmButtonText: "确定",
                });
                this.$router.go(0);
              })
              .catch((e) => {
                this.$alert("提示", "操作失败！", {
                  confirmButtonText: "确定",
                });
                this.dialogVisiblebianji = false;
              });
          }
        } else {
          this.$alert("提示", "请输入有效的信息", {
            confirmButtonText: "确定",
          });
        }
      });
    },

    // 点击取消按钮
    resetForm(formName) {
      this.$confirm("还未提交哦，确认取消吗？")
        .then((_) => {
          // 清空表格
          this.$refs[formName].resetFields();
          // 关闭表格
          this.dialogVisiblebianji = false;
          // 关闭对话框
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style >
.cell {
  max-height: 60px !important;
  overflow: hidden !important;
}
.classifyne {
  position: relative;
  left: 20%;
  display: flex;
  align-items: center;
}
.mpagenation {
  position: relative;
  left: 470px;
  top: 5px;
}
.theFrist-cll {
  margin-right: 20px;
}
.el-table td {
  text-align: center !important;
}
.submit-lunbo {
  margin: 5px 20px;
}
</style>