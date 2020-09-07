<template>
  <div>
    <div class="new-connent">
      <form action>
        <!-- 百科名称 -->
        <div class="bkneme">
          <label class="bkneme-mo">宠物名称</label>
          <input type="text" class="theFrist-input" v-model="cwName" />
        </div>
        <!-- 描述 -->
        <div class="cwdescription">
          <label class="cwdescription-mo">宠物描述</label>
          <!-- onkeyup="value=replace(/^(0+)|[^\d.]/g,'')" 限定输入框输入的数据，只能为整数或小数 -->
          <input type="text" class="cwdescription-input" v-model="cwDes" />
        </div>
        <!-- 图片上传 -->
        <div class="cwimgup">
          <label class="cwimgup-mo">图片上传</label>
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
        <div class="pet-classifyne1">
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
        </div>
        <div class="theFourthly">
          <el-button type="primary" class="submitBut" @click="submit">立即提交</el-button>
          <el-button type="primary" class="resetBut" @click="resetBut">重置</el-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      cwName: "",
			cwDes: "",
			 hint: "",
       imgUrl: "", //图片地址
       firstClass:'狗狗',
       dropdownArr:['狗狗','猫咪','小宠','水族'],
       class_id:1
    };
  },
  methods: {
    dropdownClick(e) {
      this.firstClass = e.target.innerHTML.substring(7);
      // 根据一级分类判断二级分类显示内容
      console.log(this.firstClass)
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
    // 上传成功将图片地址存起来
    uploadSuccess(response) {
      this.imgUrl = response;
      console.log(this.imgUrl);
    },
    // 上传失败
    upLoadFile(file) {
      console.log("上传失败");
    },
    // 设置清空
    reset: function () {
      this.cwName = "";
      this.cwDes = "";
    },
    // 点击重置按钮
    resetBut() {
      this.reset();
    },
    //点击提交
    submit() {
      // 当输入框不为空时，发起请求
      if (this.cwName !== "" && this.cwDes !== ""&& this.imgUrl!=="") {
        // 发起请求，将数据传到后端
        this.$http
          .post("/uploadEncycle", {
            pet_name: this.cwName,
            context: this.cwDes,
            pet_img:this.imgUrl,
            class_id:this.class_id
          })
          .then((r) => {
            this.reset();
            this.hint = "新增成功！";
            console.log(this.hint);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        if (this.cwName == "") {
          this.hint = "宠物名称不能为空";
        } else if (this.pdPrice == "") {
          this.hint = "宠物描述不能为空";
        }else if( this.imgUrl=="") {
					this.hint = "请上传图片";
				}
        // 输入框为空则弹出提示框
        this.$alert(this.hint, "提示", {
          confirmButtonText: "确定",
        });
      }
    },
  },
};
</script>
<style scoped>
/* 宠物名称 */
form {
  display: flex;
  flex-direction: column;
}
.new-connent{
	position: relative;
	margin: 30px 100px;
}
.bkneme,.cwdescription-mo{
margin:17px;
}
.bkneme-mo{
	margin-right:17px ;
	display: inline-block;
}
.theFrist-input,.cwdescription-input{
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
.cwdescription-input{
	height: 100px;
}
.cwimgup{
	position: relative;
	margin: 17px;
}
.theFourthly{
	position: relative;
	top: 0;
	left: 220px;
}
.pet-classifyne1 {
  width: 200px;
  height: 80px;
  text-align: center;
  display: flex;
  align-items: center;
}
.theFrist-cll {
  margin-right: 20px;
}

</style>