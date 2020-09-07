<template>
  <div>
    <!-- 头部开始 -->
    <div class="mptop">
      <el-input v-model="input" placeholder="请输入商品名称" class="md-search" @blur="searchForPN"></el-input>
      <div class="mpclass">
        <label class="theFrist-cll theFrist-mp">一级分类</label>
        <div class="classify">
          <el-dropdown split-button type="primary">
            {{firstClass}}
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in dropdownArr"
                :key="index"
                split-button="true"
                @click.native="dropdownClick"
              >{{dropdownArr[index]}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 二级分类 -->
        <label class="theFrist-cll theFrist-mp2 mdf">二级分类</label>
        <div class="secondLevelmp">
          <el-dropdown split-button type="primary">
            {{secondClass}}
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in secondLevelVal"
                :key="index"
                @click.native="secondLevelClick"
              >{{secondLevelVal[index]}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-button type="info" plain class="batchDeletion" :disabled="changedel" @click="open">批量删除</el-button>
        <el-button type="info" plain class="batchDeletion" @click="clickRet">重置</el-button>
      </div>
    </div>
    <!-- 头部结束-->
    <!-- 表格开始 -->
    <el-table
      :data="changedData"
      style="width: 85%;"
      border
      class="product-list"
      :height="585"
      @selection-change="handleSelectionChange"
      @select="handlechexCh"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="mid" label="序号" width="80" sortable></el-table-column>
      <el-table-column prop="mpdname" label="商品名称" sortable ref="kpi"></el-table-column>
      <el-table-column label="商品图片" width="130">
        <template slot-scope="scope">
          <img :src="scope.row.mimgUrl" width="65" height="50" />
        </template>
      </el-table-column>
      <el-table-column prop="mprice" label="参考价格(元)" width="130" sortable row.showEdit></el-table-column>
      <el-table-column prop="firstClass" label="一级分类" width="105" sortable></el-table-column>
      <el-table-column prop="secondClass" label="二级分类" width="105" sortable></el-table-column>
      <el-table-column prop="minventoryQuantity" label="库存" width="80" sortable></el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            :disabled="false"
          >删除</el-button>
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
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="一级分类" prop="cfirstClass">
          <el-input v-model="ruleForm.cfirstClass"></el-input>
        </el-form-item>
        <el-form-item label="二级分类" prop="csecondClass">
          <el-input v-model="ruleForm.csecondClass"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="mychangeprice">
          <el-input v-model="ruleForm.mychangeprice"></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="mychangeQty">
          <el-input v-model="ruleForm.mychangeQty"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </span>
    </el-dialog>
    <!-- 修改用信息对话框结束 -->
    <!-- 分页 -->
    <div class="mypage1">
      <pagenation @pageevent="getpage" :page_count="page_count"></pagenation>
    </div>
  </div>
</template>
<script >
import router from "../../router/index";
import pagenation from "./../common/pagenation";
// 引入中央控制总线
import bus from "../../assets/js/bus";
export default {
  data() {
    return {
      //分类初始化数据
      dropdownArr: ["狗狗商品", "猫猫商品", "奇趣小宠", "水族市场"],
      secondLevelVal: ["主粮", "零食", "玩具"],
      secondLevelObj: {
        dog: ["主粮", "零食", "玩具"],
        cat: ["主粮", "零食", "猫砂", "玩具"],
        miniPet: ["兔子", "仓鼠", "龙猫"],
        fish: ["鱼食", "鱼缸", "器材"],
      },
      firstClass: "狗狗商品",
      secondClass: "主粮",
      //初始化搜索框的值
      input: "",
      //  保存数据库查询的数据
      displayGoodslist: [],
      // 被转换成前端需要的数据，不会变
      willChangeDate: [],
      // 被修改的数据,会变
      changedData: [],
      // 初始化图片地址
      imgUrl: "",
      //序号
      mid: "",
      // 设置批量删除按钮初始值
      changedel: false,
      //把要批量删除的数据储存起来
      willdelval: [],
      // 确认框
      dialogVisible: false,
      // 删除一个要传给后端删除的id
      backDelId: "",
      tableData: [
        {
          editTag: {
            isShow: true,
            value: 123,
          },
          test: "Demo",
        },
      ],
      // 修改商品信息对话框
      dialogVisiblebianji: false,
      // 编辑初始参数 用于提交时是否有修改数据
      showBtnOrdinary: true,
      namep: "",
      mychangepricep: "",
      mychangeQtyp: "",
      cfirstClassp: "",
      csecondClassp: "",
      cid: "",
      // 修改表单验证对象
      ruleForm: {
        name: "",
        mychangeprice: "",
        mychangeQty: "",
        cfirstClass: "",
        csecondClass: "",
      },
      //规则
      rules: {
        cfirstClass: [
          { required: true, message: "一级分类不能为空", trigger: "blur" },
        ],
        name: [
          { required: true, message: "商品名称不能为空", trigger: "blur" },
        ],
        csecondClass: [
          {
            message: "二级分类不能为空",
            trigger: "blur",
            required: true,
          },
        ],
        mychangeprice: [
          {
            message: "价格不能为空",
            trigger: "blur",
            required: true,
          },
        ],
        mychangeQty: [
          {
            message: "库存不能为空",
            trigger: "blur",
            required: true,
          },
        ],
      },
      page: 1,
      page_count:1,
      // 初始化保存bus传过来的值
      level1:"",
      level2:""
    };
  },
  mounted() {
    // 发送请求并展示数据
    this.getMsg();
    // 接受传过来的index值
    bus.$on("passClickIndex", (index) => {
      this.getIndexNum = index;
      this.level1 = index.f;
      this.level2 = index.s;
    });
  },
  watch: {
    page() {
      this.getMsg();
    },
    firstClass() {
      this.getMsg();
    },
    secondClass() {
      this.getMsg();
    },
    // 监听willdelval，如果要删除的为空，则批量删除的button为禁用状态
    willdelval: function () {
      if (this.willdelval.length === 0) {
        this.changedel = true;
      } else {
        this.changedel = false;
      }
    },
    // 利用中央控制总线将点击商品的详细信息实现筛选
    level2() {
      console.log(this.level2);
      if (this.level2 == "3-2") {
        // 点击分类 渲染对应类别
        this.firstClass = "狗狗商品";
      } else if (this.level2 == "3-3") {
        this.firstClass = "猫猫商品";
      } else if (this.level2 == "3-4") {
        this.firstClass = "奇趣小宠";
      } else if (this.level2 == "3-5") {
        this.firstClass = "水族市场";
      }
       this.getMsg();
       console.log( this.firstClass)
    },
  },
  methods: {
    // 一级分类 给子选项设置click事件,并将值赋值给input框
    dropdownClick(e) {
      this.changedData = this.willChangeDate;
      this.firstClass = e.target.innerHTML.substring(7);
      // 根据一级分类判断二级分类显示内容
      switch (this.firstClass) {
        case "狗狗商品":
          this.secondLevelVal = this.secondLevelObj.dog;
          this.secondClass = "主粮";
          break;
        case "猫猫商品":
          this.secondLevelVal = this.secondLevelObj.cat;
          this.secondClass = "主粮";
          break;
        case "奇趣小宠":
          this.secondLevelVal = this.secondLevelObj.miniPet;
          this.secondClass = "兔子";
          break;
        case "水族市场":
          this.secondLevelVal = this.secondLevelObj.fish;
          this.secondClass = "鱼食";
          break;
      }
      // 将所有一级分类展示出来
      console.log(this.firstClass);
      let karr2 = [];
      for (let i = 0; i < this.changedData.length; i++) {
        if (
          this.firstClass === this.changedData[i].firstClass &&
          this.secondClass == this.changedData[i].secondClass
        ) {
          karr2.push(this.changedData[i]);
        }
      }
      // console.log(karr2)
      this.changedData = karr2;
    },
    //点击二级分类，将选中的值赋给父级
    secondLevelClick(e) {
      this.changedData = this.willChangeDate;
      this.secondClass = e.target.innerHTML.substring(7);
      let arr = [];
      for (let i = 0; i < this.changedData.length; i++) {
        if (
          this.firstClass === this.changedData[i].firstClass &&
          this.secondClass == this.changedData[i].secondClass
        ) {
          // console.log(this.firstClass,this.secondClass)
          // 找到所有这类的商品，并筛选
          arr.push(this.changedData[i]);
        }
      }
      // 渲染
      this.changedData = arr;
    },
    // 点击编辑时的回调函数
    handleEdit(index, row) {
      this.dialogVisiblebianji = true;
      this.ruleForm.name = row.mpdname;
      this.ruleForm.mychangeprice = row.mprice;
      this.ruleForm.mychangeQty = row.minventoryQuantity;
      this.ruleForm.cfirstClass = row.firstClass;
      this.ruleForm.csecondClass = row.secondClass;
      this.cid = row.pid;
      // 用于提交时判断是否有修改的数据
      this.namep = row.mpdname;
      this.mychangepricep = row.mprice;
      this.mychangeQtyp = row.minventoryQuantity;
      this.cfirstClassp = row.firstClass;
      this.csecondClassp = row.secondClass;
    },
    //编辑用户信息点击表格外部或取消
    handleClose(done) {
      this.$confirm("还未提交哦，确认关闭吗？")
        .then((_) => {
          // 清空表格
          this.$refs[formName].resetFields();
          this.dialogVisiblebianji=false;
          done();
        })
        .catch((_) => {});
    },
    // 编辑商品信息，点击取消的回调函数
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.namep == this.ruleForm.name &&
            this.mychangepricep == this.ruleForm.mychangeprice &&
            this.mychangeQtyp == this.ruleForm.mychangeQty &&
            this.cfirstClassp == this.ruleForm.firstClass &&
            this.csecondClassp == this.ruleForm.csecondClass
          ) {
            // 未修改数据
            this.dialogVisiblebianji = false;
          } else {
            this.$http
              .post("/updateProduct", {
                product_name: this.ruleForm.name,
                price: this.ruleForm.mychangeprice,
                count: this.ruleForm.mychangeQty,
                firstClass: this.ruleForm.cfirstClass,
                secondClass: this.ruleForm.csecondClass,
                id: this.cid,
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
    // 单行删除回调的函数,并发送删除请求
    handleDelete(index, row) {
      this.backDelId = "";
      console.log(index, row);
      this.backDelId = row.pid;
      console.log(this.backDelId);
      this.$confirm("确认要删除吗？")
        .then((_) => {
          this.$http
            .get("/adminDelProduct", {
              params: {
                idArr: this.backDelId,
              },
            })
            .then((r) => {
              console.log(r);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              router.go(0);
            })
            .catch((e) => {
              this.$message({
                type: "info",
                message: "请求失败",
              });
            });
          done();
        })
        .catch((_) => {});
    },
    // 选中回调的函数 val为选中的行
    handleSelectionChange(val) {
      this.willdelval = val; //被选中要删除的数据
      let arr3 = [];
      for (let i = 0; i < val.length; i++) {
        arr3.push(val[i].mid);
      }
      let l = 2;
      // this.SingleStatus=arr3.toString();
      this.SingleStatus = arr3.toString();
      // console.log(this.SingleStatus);
      // console.log(this.SingleStatus.search(l)!=-1?false:true)
    },
    // 单选框选中的回调函数
    handlechexCh(selection, row, e) {
      // console.log(selection, row);
    },
    // 点击批量，并发起删除请求
    open() {
      // console.log(this.willdelval);
      if (this.willdelval.length != 0) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            let arr0 = [];
            // 点击确认,获取id,arr0
            for (let i = 0; i < this.willdelval.length; i++) {
              arr0.push(this.willdelval[i].pid);
            }
            // console.log(arr0)
            this.willdelval = arr0;
            console.log(this.willdelval);
            for (let i = 0; i < this.willdelval.length; i++) {
              console.log(this.willdelval[i]);
              this.$http
                .get("/adminDelProduct", {
                  params: {
                    idArr: this.willdelval[i],
                  },
                })
                .then((r) => {
                  console.log(r);
                })
                .catch((e) => {
                  this.$message({
                    type: "info",
                    message: "请求失败",
                  });
                });
            }
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            router.go(0);
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      } else {
        this.$alert("请选择要删除的条目", "提示", {
          confirmButtonText: "确定",
        });
      }
    },
    // 搜索商品名
    searchForPN() {
      if (this.input != "") {
        console.log(this.input)
         this.$http
        .get("/getAllProduct", {
          params: {
            keyword: this.input
          },
        }).then(r=>{
           this.dispose(r.data)
        }).catch(e=>{
          console.log(e)
        })     
       
      }
    },
    // 点击重置
    clickRet() {
      this.firstClass = "狗狗商品";
      this.secondClass = "主粮";
      this.page = 1;
      this.getMsg();
    },
    // 页数设置
    getpage(page) {
      this.page = page;
    },
    // 分页查询
    getMsg() {
      let class_id, goods_id;
      // 分类判断
      switch (this.firstClass) {
        case "狗狗商品":
          class_id = 1;
          break;
        case "猫猫商品":
          class_id = 2;
          break;
        case "奇趣小宠":
          class_id = 3;
          break;
        case "水族市场":
          class_id = 4;
          break;
      }
      if (class_id === 1) {
        switch (this.secondClass) {
          case "主粮":
            goods_id = 101;
            break;
          case "零食":
            goods_id = 102;
            break;
          case "玩具":
            goods_id = 103;
            break;
        }
      } else if (class_id === 2) {
        switch (this.secondClass) {
          case "主粮":
            goods_id = 201;
            break;
          case "零食":
            goods_id = 202;
            break;
          case "猫砂":
            goods_id = 203;
            break;
          case "玩具":
            goods_id = 204;
            break;
        }
      } else if (class_id === 3) {
        switch (this.secondClass) {
          case "兔子":
            goods_id = 301;
            break;
          case "仓鼠":
            goods_id = 302;
            break;
          case "龙猫":
            goods_id = 303;
            break;
        }
      } else if (class_id === 4) {
        switch (this.secondClass) {
          case "鱼食":
            goods_id = 401;
            break;
          case "鱼缸":
            goods_id = 401;
            break;
          case "器材":
            goods_id = 401;
            break;
        }
      }
      this.$http
        .get("/adminGetProduct", {
          params: {
            page: this.page,
            class_id: class_id,
            goods_id: goods_id
          },
        })
        .then((list) => {
          this.dispose(list.data.list);
          this.page_count = list.data.page_count;
          // console.log(arr);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 处理数据
    dispose(list){
          // console.log(list.data);
          // 将查询的原始值保存起来,不改变
          this.displayGoodslist = list;
          //整理过的数据
          this.willChangeDate = list;
          // 对数据库传来的数据进行处理
          let arr = [];
          let res = list;
          // console.log(list.data)
          for (let i = 0; i < res.length; i++) {
            let id,
              discription,
              firstClass,
              secondClass,
              price,
              pdname,
              imgUrl,
              inventoryQuantity,
              pid,
              woid = i + 1;
            discription = res[i].discription;
            // 库存
            inventoryQuantity = res[i].count;
            price = res[i].price;
            pdname = res[i].product_name;
            imgUrl = res[i].img_url;
            pid = res[i].id;
            this.mid = i + 1;
            secondClass = "";
            // 将数据分类 firstClass, secondClass
            if (res[i].class_id === 1) {
              firstClass = "狗狗商品";
              switch (res[i].goods_id) {
                case 101:
                  secondClass = "主粮";
                  break;
                case 102:
                  secondClass = "零食";
                  break;
                case 103:
                  secondClass = "玩具";
                  break;
              }
            } else if (res[i].class_id === 2) {
              firstClass = "猫猫商品";
              switch (res[i].goods_id) {
                case 201:
                  secondClass = "主粮";
                  break;
                case 202:
                  secondClass = "零食";
                  break;
                case 203:
                  secondClass = "猫砂";
                  break;
                case 204:
                  secondClass = "玩具";
                  break;
              }
            } else if (res[i].class_id === 3) {
              firstClass = "奇趣小宠";
              switch (res[i].goods_id) {
                case 301:
                  secondClass = "兔子";
                  break;
                case 302:
                  secondClass = "仓鼠";
                  break;
                case 303:
                  secondClass = "龙猫";
                  break;
              }
            } else if (res[i].class_id === 4) {
              firstClass = "水族市场";
              switch (res[i].goods_id) {
                case 401:
                  secondClass = "鱼食";
                  break;
                case 402:
                  secondClass = "鱼缸";
                  break;
                case 403:
                  secondClass = "器材";
                  break;
              }
            }
            arr.push({
              mid: woid,
              pid: pid,
              mprice: price,
              minventoryQuantity: inventoryQuantity,
              mpdname: pdname,
              mimgUrl: imgUrl,
              mdiscription: discription,
              firstClass: firstClass,
              secondClass: secondClass,
            });
            // console.log(arr[0].mid,arr[0].pid)
            this.SingleStatus = arr[i].mid;
          }
          this.displayGoodslist = arr;
          this.willChangeDate = arr;
          this.changedData = arr;
    }
  },
  components: {
    pagenation,
  },
};
</script>
<style >
.mpclass {
  position: absolute;
  top: 10px;
  height: 40px;
  width: 800px;
  left: 260px;
  text-align: left;
}
/* 商品名称搜索 */
.md-search {
  height: 38px;
  width: 230px;
  position: absolute;
  left: 25px;
  top: 10px;
  padding-left: 5px;
}
/* 一级搜索输入框 */
.classify {
  display: inline-block;
  margin-left: 130px;
}
/* 二级搜索输入框 */
.secondLevelmp {
  display: inline-block;
  margin-left: 130px;
}
.mdf {
  position: absolute;
  top: 10px;
  left: 310px;
  color: #666;
}

/* 设置分类字段位置 */
.theFrist-mp {
  position: absolute;
  top: 10px;
  left: 50px;
  color: #666;
}
/* 设置批量删除按钮 */
.batchDeletion {
  margin-left: 40px;
}
/* 表格样式设置 */
.product-list {
  position: relative;
  top: 60px;
  line-height: 24px;
  margin-left: 30px;
}
.el-table td,
.el-table--border th {
  padding: 5px 0px;
  text-align: center;
  border: 1px solid #ebeef5;
}
.el-table tr {
  border: 1px solid #ebeef5;
}
/* 分页设置 */
.mypage1 {
  position: relative;
  top: 69px;
  left: 470px;
  z-index: 1;
}
/* 点击编辑 */
.edit-cell {
  width: 80%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: 0;
  padding: 3px 3px;
  box-sizing: border-box;
}
.changePInfo {
  margin: 10px 55px;
  outline: none;
  width: 650px;
  height: 50px;
  border: 1px solid #cccccc;
  display: inline-block;
  border-radius: 5px;
}
.cell{max-height: 45px !important;overflow: hidden !important;}
</style>