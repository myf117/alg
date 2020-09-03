<template>
  <div>
    <!-- 头部开始 -->
    <div class="mptop">
      <el-input v-model="input" placeholder="请输入商品名称" class="md-search" @change="searchForPN"></el-input>
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
      style="width: 1138px;"
      border
      class="product-list"
      @selection-change="handleSelectionChange"
      @select="handlechexCh"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="mid" label="序号" width="80" sortable></el-table-column>
      <el-table-column prop="mpdname" label="商品名称" sortable>
        <template slot-scope="{row,$index}">
          <input
            class="edit-cell"
            v-if="showEdit[$index]"
            v-model="mychangename"
            @blur="blurchange1($index, row)"
            @focus="focuschange1($index, row)"
          />
          <span v-if="!showEdit[$index]">{{row.mpdname}}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="130">
        <template slot-scope="scope">
          <img :src="scope.row.mimgUrl" width="65" height="50" />
        </template>
      </el-table-column>
      <el-table-column prop="mprice" label="参考价格(元)" width="130" sortable row.showEdit>
        <template slot-scope="{row,$index}">
          <input
            class="edit-cell"
            v-if="showEdit[$index]"
            v-model="mychangeprice"
            onkeyup="value=value.replace(/^(0+)|[^\d.]/g,'')"
            @blur="blurchange2($index, row)"
            @focus="focuschange2($index, row)"
          />
          <span v-if="!showEdit[$index]">{{row.mprice}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="firstClass" label="一级分类" width="105" sortable></el-table-column>
      <el-table-column prop="secondClass" label="二级分类" width="105" sortable></el-table-column>
      <el-table-column prop="minventoryQuantity" label="库存" width="80" sortable>
        <template slot-scope="{row,$index}">
          <input
            class="edit-cell"
            v-if="showEdit[$index]"
            v-model="mychangeQty"
            onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"
            @blur="blurchange3($index, row)"
            @focus="focuschange3($index, row)"
          />
          <span v-if="!showEdit[$index]">{{row.minventoryQuantity}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" id="baocun" @click="saveChange">保存</el-button>
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
    <!-- 提示框 -->

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000" class="Pagination"></el-pagination>
  </div>
</template>
<script >
import router from "../../router/index";
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
      tableColumn: [
        {
          label: "可编辑项",
          prop: "editTag",
        },
        {
          label: "demo",
          prop: "test",
        },
      ],
      // 编辑初始参数
      showEdit: [], //显示编辑框,
      showBtn: [],
      showBtnOrdinary: true,
      mychangename: "",
      mychangeprice: "",
      mychangeQty: "",
      // 定义一个中间参数，用于判断3个编辑框是否都失焦
      blurCode:false,
      focusCode:false
    };
  },
  mounted() {
    this.$http
      .get("/adminGetProduct", {
        params: {},
      })
      .then((list) => {
        // console.log(list.data);
        // 将查询的原始值保存起来,不改变
        this.displayGoodslist = list.data;
        //整理过的数据
        this.willChangeDate = list.data;
        // 对数据库传来的数据进行处理
        let arr = [];
        let res = list.data;
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

        // console.log(arr);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  watch: {
    // 监听willdelval，如果要删除的为空，则批量删除的button为禁用状态
    willdelval: function () {
      if (this.willdelval.length === 0) {
        this.changedel = true;
      } else {
        this.changedel = false;
      }
    }
    // ,
    // $options.methods:function(){
    //   console.log(this.$options.methods)
    // }
  },
  computed: {
    check(){
      
    }
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
      this.showEdit = []; //回到初始化状态
      // 将选中的栏位设为可编辑状态，并将改变的值存起来
      this.showEdit[index] = true;
      this.showBtn[index] = true;
      this.$set(this.showEdit, row, true);
      this.$set(this.showBtn, row, true);
      this.mychangename = row.mpdname;
      this.mychangeprice = row.mprice;
      this.mychangeQty = row.minventoryQuantity;
      console.log(this.$options.methods)
    },
    //  blurCode:false,
    //   focusCode:true
    // 1聚焦状态
    focuschange1(){
      this.focusCode=true;
    },
    // 1失焦状态
    editchange1(index, row) {
      // this.showEdit = [];
      this.blurCode=true;
    },
     // 2聚焦状态
    focuschange2(){
      this.focusCode=true;
    },
    // 2失焦状态
    editchange2(index, row) {
      // this.showEdit = [];
      this.blurCode=true;
    },
     // 3聚焦状态
    focuschange3(){
      this.focusCode=true;
    },
    // 3失焦状态
    editchange3(index, row) {
     this.blurCode=true;
    },
    // 单行删除回调的函数,并发送删除请求
    handleDelete(index, row) {
      this.backDelId = "";
      console.log(index, row);
      // this.backDelId = row.pid;
      // console.log(this.backDelId)
      // this.$http
      //   .get("/adminDelProduct", {
      //     params: {
      //       idArr: this.backDelId,
      //     },
      //   })
      //   .then((r) => {
      //     console.log(r);
      //     this.$message({
      //       type: "success",
      //       message: "删除成功!",
      //     });
      //     router.go(0);
      //   })
      //   .catch((e) => {
      //     this.$message({
      //       type: "info",
      //       message: "请求失败",
      //     });
      //   });
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
        // this.changedData
        let karr = [];
        for (let i = 0; i < this.willChangeDate.length; i++) {
          if (this.input == this.willChangeDate[i].mpdname) {
            karr.push(this.willChangeDate[i]);
          }
          console.log(this.input);
          // console.log(this.willChangeDate[i].mpdname.search(this.input) != -1 );
        }

        if (karr.length === 0) {
          this.$message({
            type: "info",
            message: "找不到该商品信息",
          });
        } else {
          this.changedData = karr;
        }
      }
    },
    // 点击重置
    clickRet() {
      this.changedData = this.willChangeDate;
    },
    //点击保存
    saveChange() {
      if (
        this.mychangename == "" &&
        this.mychangeprice == "" &&
        this.mychangeQty == ""
      ) {
        console.log("kong");
      } else {
        console.log("该");
      }
    },
  },
  components: {
    // classify,
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
#baocun {
  background-color: rgb(133, 206, 97);
}
/* 分页设置 */
.Pagination {
  position: relative;
  top: 500px;
  left: 300px;
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
</style>