<template>
  <div>
    <div class="omList">
      <el-table :data="tableData" style="width: 1200px">
        <el-table-column prop="date" label="订单号" width="100" sortable></el-table-column>
        <el-table-column prop="date" label="下单时间" width="120" sortable></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="联系方式" width="120" sortable></el-table-column>
          <el-table-column prop="name" label="收货人" width="100" sortable></el-table-column>
          <el-table-column label="收货地址"></el-table-column>
        </el-table-column>
        <el-table-column label="商品信息">
          <el-table-column prop="name" label="商品名称" width="110" sortable></el-table-column>
          <el-table-column prop="name" label="商品数量" width="110" sortable></el-table-column>
          <el-table-column prop="name" label="总价" width="110" sortable></el-table-column>
        </el-table-column>
        <el-table-column label="状态" width="110" sortable></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
.omList {
  margin: 10px 15px;
}
</style>