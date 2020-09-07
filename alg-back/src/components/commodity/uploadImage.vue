<template>
<div class="baikebac">
  <div class="baike_img">
    <span class="fontst">点击更改宠物之家首页轮播图</span>    
    <div class="dog-img">
      <span class="span">狗狗</span>
      <div class="dog">
        <div class="photo" v-for="item in dogArr" :key="item.id" @click="upDogFile">
          <img width="120px" height="120px" class="dogImg" :src="item.lunbo_img" />
          <input type="file" class="dogFile" />
        </div>
      </div>
    </div>
    <div class="cat-img">
      <span class="span">猫咪</span>
      <div class="cat">
        <div class="photo" v-for="item in catArr" :key="item.id" @click="upCatFile">
          <img width="120px" height="120px" class="catImg" :src="item.lunbo_img" />
          <input type="file" class="catFile" />
        </div>
      </div>
    </div>
    <div class="mini-img">
      <span class="span">小宠</span>
      <div class="mini">
        <div class="photo" v-for="item in miniArr" :key="item.id" @click="upMiniFile">
          <img width="120px" height="120px" class="miniImg" :src="item.lunbo_img" />
          <input type="file" class="miniFile" />
        </div>
      </div>
    </div>
    <div class="water-img">
      <span class="span">水族</span>
      <div class="water">
        <div class="photo" v-for="item in waterArr" :key="item.id" @click="upWaterFile">
          <img width="120px" height="120px" class="waterImg" :src="item.lunbo_img" />
          <input type="file" class="waterFile" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      dogArr: [],
      catArr: [],
      miniArr: [],
      waterArr: [],
      myFile: "",
      myImg: "",
      id: 0,
    };
  },
  mounted() {
    this.getlunoByClassId(1);
    this.getlunoByClassId(2);
    this.getlunoByClassId(3);
    this.getlunoByClassId(4);
  },
  // watch: {
  //   'dogArr'(){
  //     this.getlunoByClassId(1);
  //   },
  //   'catArr'(){
  //     this.getlunoByClassId(2);
  //   },
  //   'miniArr'(){
  //     this.getlunoByClassId(3);
  //   },
  //   'waterArr'(){
  //     this.getlunoByClassId(4);
  //   }
  // },
  methods: {
    getlunoByClassId(class_id) {
      this.$http
        .get("/getAlllunbo", {
          params: {
            class_id: class_id,
          },
        })
        .then((res) => {
          console.log(res.data);
          switch (class_id) {
            case 1:
              this.dogArr = res.data;
              break;
            case 2:
              this.catArr = res.data;
              break;
            case 3:
              this.miniArr = res.data;
              break;
            case 4:
              this.waterArr = res.data;
              break;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    upDogFile(e) {
      console.log(e.target);
      let myFile = document.getElementsByClassName("dogFile");
      let myImg = document.getElementsByClassName("dogImg");
      for (let i = 0; i < myFile.length; i++) {
        myFile[i].onchange = () => {
          let choose_file = myFile[i].files[0];
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
            // let reader = new FileReader();
            // reader.readAsDataURL(choose_file);
            // reader.onload = () => {
            //     console.log(this.result)
            //     e.target.previousElementSibling.setAttribute('src', this.result);
            // }
            this.upMyFile(formData, config, e.target, this.dogArr[i].id);
          } else {
            alert("文件格式不正确");
            return false;
          }
        };
      }
    },
    upCatFile(e) {
      console.log(e.target);
      let myFile = document.getElementsByClassName("catFile");
      let myImg = document.getElementsByClassName("catImg");
      for (let i = 0; i < myFile.length; i++) {
        myFile[i].onchange = () => {
          let choose_file = myFile[i].files[0];
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
            // let reader = new FileReader();
            // reader.readAsDataURL(choose_file);
            // reader.onload = () => {
            //     console.log(this.result)
            //     e.target.previousElementSibling.setAttribute('src', this.result);
            // }
            this.upMyFile(formData, config, e.target, this.catArr[i].id);
          } else {
            alert("文件格式不正确");
            return false;
          }
        };
      }
    },
    upMiniFile(e) {
      console.log(e.target);
      let myFile = document.getElementsByClassName("miniFile");
      let myImg = document.getElementsByClassName("miniImg");
      for (let i = 0; i < myFile.length; i++) {
        myFile[i].onchange = () => {
          let choose_file = myFile[i].files[0];
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
            // let reader = new FileReader();
            // reader.readAsDataURL(choose_file);
            // reader.onload = () => {
            //     console.log(this.result)
            //     e.target.previousElementSibling.setAttribute('src', this.result);
            // }
            this.upMyFile(formData, config, e.target, this.miniArr[i].id);
          } else {
            alert("文件格式不正确");
            return false;
          }
        };
      }
    },
    upWaterFile(e) {
      console.log(e.target);
      let myFile = document.getElementsByClassName("waterFile");
      let myImg = document.getElementsByClassName("waterImg");
      for (let i = 0; i < myFile.length; i++) {
        myFile[i].onchange = () => {
          let choose_file = myFile[i].files[0];
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
            // let reader = new FileReader();
            // reader.readAsDataURL(choose_file);
            // reader.onload = () => {
            //     console.log(this.result)
            //     e.target.previousElementSibling.setAttribute('src', this.result);
            // }
            this.upMyFile(formData, config, e.target, this.waterArr[i].id);
          } else {
            alert("文件格式不正确");
            return false;
          }
        };
      }
    },
    upMyFile(formData, config, dom, id) {
      this.$http
        .post("/uploadFile", formData, config)
        .then((res) => {
          console.log("文件上传成功");
          console.log(res.data);
          dom.previousElementSibling.setAttribute("src", res.data);
          this.upPhoto(res.data, id);
        })
        .catch((err) => {
          console.log(err);
          console.log("上传文件ajax出错");
        });
    },
    upPhoto(result, id) {
      console.log(id);
      console.log(result);
      this.$http
        .post("/addtolunbo", {
          lunbo_img: result,
          id: id,
        })
        .then((res) => {
          console.log(res.data);
          this.$message({
            message: "更改成功!",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("更改失败!");
        });
    },
  },
};
</script>
<style scoped>
.fontst{
  font-family: "华文新魏";
  font-size: 30px;
  display: block;
  color: rgba(53, 90, 192, 0.822);
}
.baikebac{
   width: 100%;
   height: 100%;
}
.baike_img {
  width:900px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(240, 238, 238);
  margin: 0px 160px;
  
}
.dog-img,
.cat-img,
.mini-img,
.water-img {
  width: 90%;
  height: 120px;
  display: flex;
  align-items: center; 
  box-shadow: 5px 5px 4px rgba(57, 62, 107, 0.637);
  border-radius: 15px;
}
.mini,
.dog,
.cat,
.water {
  width: 90%;
  height: 100px;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
}
.span {
  margin-right: 10px;
}
.photo {
  width: 90%;
  height: 120px;
  position: relative;
}
.baike_img :hover{
transform: translate(0px,-5px);
transition:transform .3s;
}
.dogFile,
.catFile,
.miniFile,
.waterFile {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  /* visibility: hidden; */
  width: 120px;
  height: 120px;
  cursor: pointer;
}
</style>