<template>
  <div>
    <!-- title 开始-->
    <div class="new-titel">
      <span>
        <i class="el-icon-s-platform"></i> 添加商品
      </span>
    </div>
    <!-- title 结束-->
    <!-- connect 开始-->
    <div class="new-connent">
      <form action>
        <!-- 商品名称 -->
        <div class="theFrist">
          <label class="theFrist-ch">商品名称</label>
          <input type="text" class="theFrist-input" v-model="pdName" />
        </div>
        <!-- 价格 -->
        <div class="theFrist">
          <label class="theFrist-ch">商品价格</label>
          <!-- onkeyup="value=replace(/^(0+)|[^\d.]/g,'')" 限定输入框输入的数据，只能为整数或小数 -->
          <input
            type="text"
            class="theFrist-input"
            onkeyup="value=value.replace(/^(0+)|[^\d.]/g,'')"
            v-model="pdPrice"
          />
        </div>
        <!-- 描述 -->
        <div class="theFrist">
          <label class="theFrist-ch">商品描述</label>
          <input type="text" class="theFrist-input" style="height:100px" v-model="discription" />
        </div>
        <!-- 图片上传 -->
        <div class="theSecond">
          <label class="theFrist-ch">图片上传</label>
          <!-- :auto-upload="false" 取消自动上传 -->
          <!-- :http-request="upLoadFile" 自定义上传方式 -->
          <!-- :limit="Number(1)"限制上传数量 -->
          <!-- action="http://192.168.6.24:8001/uploadFile" 后端请求地址 -->
          <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8001/uploadFile"
            multiple
            :on-success="uploadSuccess"
            :limit="Number(1)"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将图片拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png图片，且不超过500kb</div>
          </el-upload>
        </div>
        <!-- 分类 -->
        <div class="theThirdly">
          <label class="theFrist-cll theFrist-ch">一级分类</label>
          <div class="classifyne">
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
          </div>
          <!-- 二级分类 -->
          <label class="theFrist-cll theFrist-ch2 newf">二级分类</label>
          <div class="secondLevelne">
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
        </div>
        <div class="theFourthly">
          <button class="submitBut" @click="submit">立即提交</button>
          <button class="resetBut" @click="resetBut">重置</button>
          <div class="qtynely">
            <span class="qtynelyQ" >库存</span>
            <input type="text" class="qtynelyInp" onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="myqtynumber"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
    </div>
    <!-- connect 开始-->
  </div>
</template>
<script >
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
      //输入框初始化数据 获取输入框值
      pdName: "", //商品名称
      pdPrice: "", //商品价格
      imgUrl: "", //图片地址
      firstClass: "狗狗商品", //一级分类
      secondClass: "主粮", //二级分类
      discription: "",
      hint: "",
      myqtynumber:""
    };
  },
  methods: {
    // 上传成功将图片地址存起来
    uploadSuccess(response) {
      this.imgUrl = response;
      console.log(this.imgUrl);
    },
    // 上传失败
    upLoadFile(file) {
      console.log("上传失败");
    },
    //点击提交
    submit() {
      // 当输入框不为空时，发起请求
      if (
        this.pdName !== "" &&
        this.pdPrice !== "" &&
        this.discription !== "" &&
        this.imgUrl !== "" &&
        this.firstClass !== "" &&
        this.secondClass !== ""&&
        this.myqtynumber!==""
      ) {
        // 发起请求，将数据传到后端
        this.$http
          .post("/uploadProduct", {
            product_name: this.pdName,
            price: this.pdPrice,
            img_url: this.imgUrl,
            firstClass: this.firstClass,
            secondClass: this.secondClass,
            discription: this.discription,
            qty:this.myqtynumber
          })
          .then((r) => {
            this.reset();
             this.$notify({
                title: "成功",
                message: "已上传成功！",
                type: "success",
              });
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        if (this.pdName == "") {
          this.hint = "商品名称不能为空";
        } else if (this.pdPrice == "") {
          this.hint = "价格不能为空";
        } else if (this.discription == "") {
          this.hint = "商品描述不能为空";
        } else if (this.imgUrl == "") {
          this.hint = "请上传图片";
        }else if( this.myqtynumber==""){
          this.hint = "库存不能为空";
        }
        // 输入框为空则弹出提示框
        this.$alert(this.hint, "提示", {
          confirmButtonText: "确定",
        });
      }
    },
    // 一级分类 给子选项设置click事件,并将值赋值给input框
    dropdownClick(e) {
      this.firstClass = e.target.innerHTML.substring(7);
      // 根据一级分类判断二级分类显示内容
      switch (this.firstClass) {
        case "狗狗商品":
          this.secondLevelVal = this.secondLevelObj.dog;
          break;
        case "猫猫商品":
          this.secondLevelVal = this.secondLevelObj.cat;
          break;
        case "奇趣小宠":
          this.secondLevelVal = this.secondLevelObj.miniPet;
          break;
        case "水族市场":
          this.secondLevelVal = this.secondLevelObj.fish;
          break;
      }
    },
    //点击二级分类，将选中的值赋给父级
    secondLevelClick(e) {
      this.secondClass = e.target.innerHTML.substring(7);
    },
    // 设置清空
    reset: function () {
      this.pdName = "";
      this.pdPrice = "";
      this.discription = "";
      this.imgUrl = "";
      this.firstClass = "狗狗商品";
      this.secondClass = "主粮";
      this.myqtynumber="";
    },
    // 点击重置按钮
    resetBut() {
      this.reset();
    },
  },
};
</script>
<style >
/* 设置titel */
.new-titel {
  width: 100%;
  height: 40px;
  background-color: rgba(204, 205, 207, 0.753);
}
.new-titel span {
  display: block;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
/* 设置new-connent */
.new-connent {
  position: relative;
  width: 875px;
  top: 0px;
  left: 0px;
  margin: 10px;
}
.theFrist {
  display: flex;
  justify-content: left;
  height: 40px;
  margin-bottom: 15px;
}
.theFrist-ch {
  display: block;
  width: 130px;
  height: 40px;
  font-weight: 400;
  line-height: 20px;
  text-align: right;
  padding: 9px 15px;
}
.theFrist-input {
  outline: none;
  padding-left: 10px;
  height: 38px;
  width: 740px;
  line-height: 38px;
  border-width: 1px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
}
/* 图片上传 */
.theSecond {
  position: relative;
  top: 61px;
  height: 40px;
}
.upload-demo {
  position: absolute;
  top: 0px;
  left: 154px;
}
/* 将图片上传框的图标设置为绿色 */
.el-icon-upload {
  color: #009688 !important;
}
/* 商品分类 */
.classifyne {
  position: absolute;
  top: 0px;
  left: 154px;
}

.theThirdly {
  position: relative;
  top: 260px;
  height: 40px;
}

.secondLevelne {
  position: absolute;
  top: 0px;
  left: 388px;
}
.newf {
  position: absolute;
  top: 8px;
  left: 315px;
}
/* 重置和提交按钮 */
.theFourthly {
  width: 100%;
  height: 40px;
  position: relative;
  top: 305px;
  left: 154px;
}
.theFourthly button {
  display: inline-block;
  line-height: 1;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #fff;
  background-color: #409eff;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 65px;
  outline: none;
}
.theFourthly .resetBut {
  background-color: #eee;
  color: #000;
  outline: none;
}
.qtynely {
  position: absolute;
  right: 400px;
  bottom: 2px;
}
.qtynelyQ {
  margin: 20px;
}
.qtynelyInp {
  outline: none;
  padding-left: 10px;
  height: 38px;
  width: 140px;
  line-height: 38px;
  border-width: 1px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
}
</style>