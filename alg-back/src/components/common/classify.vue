<template>
  <!-- 分类 -->
  <div class="theThirdly">
    <label class="theFrist-cll theFrist-ch">一级分类</label>
    <div class="classify">
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
    <label class="theFrist-cll theFrist-ch2">二级分类</label>
    <div class="secondLevel">
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
    };
  },
  // props: ["res"],
  methods: {
    
  },
  watch: {
    "res": function () {
        if (this.res) {
				console.log(111);
          this.firstClass = "狗狗商品";
          this.secondClass = "主粮";
        }
				// console.log(this.res);
      
    },
	},
	created(){
		console.log(this.res)
	}
};
</script>
<style >
/* 一级分类 */
.theFrist-cll {
  position: absolute;
  top: 15px;
}
/* 二级分类设置 */
.theFrist-ch2 {
  position: absolute;
  top: 15px;
  left: 300px;
  display: block;
  width: 80px;
  height: 40px;
  font-weight: 400;
  line-height: 20px;
  padding: 9px 15px;
}
</style>