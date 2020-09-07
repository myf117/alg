<template>
  <div>
    <div class="userList">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 80%;"
      >
        <el-table-column label="序号" prop="myid" sortable></el-table-column>
        <el-table-column label="用户名" prop="username" sortable></el-table-column>
        <el-table-column label="手机号" prop="phone" sortable></el-table-column>
        <el-table-column label="密码" prop="password"></el-table-column>>
        <el-table-column align="center">
          <template slot="header">操作</template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">重置密码</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除该用户</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script >
import router from "../../router/index";
export default {
  data() {
    return {
      // 不会修改的数据
      tableData: [],
      search: "",
      start: "",
    };
  },
  //添加的部分:渲染数据
  methods: {
    happen() {
      this.$http
        .get("/user.do", {
          params: {},
        })
        .then((res) => {
          let arr = [];

          for (let i = 0; i < res.data.length; i++) {
            let myid, password, id, phone, username;
            myid = i+1;
            password = "******";
            id = res.data[i].id;
            phone = res.data[i].phone;
            username = res.data[i].username;
            arr.push({ myid, password, id, phone, username });
          }
          this.tableData = arr;
        });
    },
    // 重置密码
    handleEdit(index, row) {
      this.$confirm("是否重置密码？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let passwordCh = row.phone.substring(5);
          this.$http
            .get("/start.do", {
              params: {
                passwords: passwordCh,
                start: this.start,
              },
            })
            .then((res) => {
              this.$notify({
                title: "成功",
                message: "密码已重置为手机号的后六位！",
                type: "success",
              });
            })
            .catch((res) => {});
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消重置",
          });
        });
    },
// 删除
    handleDelete(index, row) {
      this.$http
        .get("/deletes.do", {
          params: {
            passwords: row.id,
          },
        })
        .then((res) => {
          this.$notify({
            title: "成功",
            message: "已删除该用户",
            type: "success",
          });
          this.$router.go(0);
        });
    },
  },
  mounted() {
    this.happen();
  },
};
</script>
<style >
.userList {
  margin: 10px 15px;
}
.el-table td,
.el-table th.is-leaf {
  border: 1px solid #ebeef5;
  text-align: center;
}
.el-table thead.is-group th {
  background: #f5f7fa;
}
</style>