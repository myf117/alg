<template>
  <div>
    <el-table :data="whileShowEnlist" style="width: 70%;" class="prtform" border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="序号" prop="myid" width="80px" sortable></el-table-column>
      <el-table-column label="宠物名称" prop="myname" width="150px" sortable></el-table-column>
      <el-table-column label="详细信息" prop="mdiscription" sortable></el-table-column>
      <el-table-column label="宠物图片" prop="date" width="130px">
        <template slot-scope="scope">
          <img :src="scope.row.myUrl" width="100" height="100" />
        </template>        
      </el-table-column>
      <el-table-column label="分类" prop="myclass" width="100" sortable></el-table-column>
      <el-table-column align="center" width="250px">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script >
export default {
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
    };
  },
  mounted() {
    this.$http
      .get("/getClassBaike", {
        params: {},
      })
      .then((list) => {
        // console.log(list.data);
        // 将查询的原始值保存起来,不改变
        this.displayEnlist = list.data;
        // 对数据库传来的数据进行处理
        let arr = [];
        let res = list.data;
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
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
.prtform {
  margin: 15px 30px;
}
</style>