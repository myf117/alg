<template>
  <div >
    <!--三元表达式，如果有默认头像，显示默认头像，如果没有，显示本地图片-->
    <!-- <img :src="adatar?adatar:require('../../assets/touxiang.gif')" alt /> -->
    <!--文件上传-->
    <!-- <input
      type="file"
      name
      accept="image/gif, image/jpeg, image/jpg, image/png"
      @change="fileChange"
    />-->
    <div id="photo">
      <!-- 上传头像 -->
      <img width="80px" height="80px" id="myImg" />
      <input type="file" id="myFile" />
    </div>
    <!--文件提交-->
    <!-- <button @click="submit">提交</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      adatar: "",
    };
  },
  methods: {
    upMyFile(formData, config) {
      this.$http
        .post("/uploadFile", formData, config)
        .then((res) => {
          console.log("文件上传成功");
          console.log(res.data);
          this.adatar = res.data;
          console.log(this.adatar);
          let myImg = document.getElementById("myImg");
          myImg.setAttribute("src", this.adatar);
          console.log(this.adatar);
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
          myImg.setAttribute("src", this.adatar);
          console.log(this.adatar);
        };
      } else {
        alert("文件格式不正确");
        return false;
      }
    };
    //上传文件到指定文件夹
  },
};
</script>

<style >
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