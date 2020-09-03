<template>
  <div>
    <div class="userList">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 1200px;"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="用户名" prop="name" sortable></el-table-column>
        <el-table-column label="手机号" prop="address" sortable></el-table-column>
        <el-table-column label="密码" prop="date"></el-table-column>
        <el-table-column align="center">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入用户名或手机号搜索" />
          </template>
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
    };
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
<style >
.userList{
	margin: 10px 15px;
}
.el-table td ,.el-table th.is-leaf {
    border: 1px solid #EBEEF5;
}
.el-table thead.is-group th {
 background: #F5F7FA;
}
</style>