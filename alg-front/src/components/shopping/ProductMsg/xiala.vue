<template>
	<div >
		<el-select v-model="value" placeholder="请选择" class="xiala">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '合江'
        }, {
          value: '选项2',
          label: '成都'
        }, {
          value: '选项3',
          label: '上海'
        }, {
          value: '选项4',
          label: '黑龙江'
        }, {
          value: '选项5',
          label: '北京'
        }],
        value: ''
      }
    }
  }
</script>

<style>
	.xiala{
		height: 50px;
		width: 100px;
	}
</style>
