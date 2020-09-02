<template>
	<div class="baike">
		<div class="baike-1">
			<img src="../../assets/img/cbaike.jpg">
			<p style="font-size: 14px;text-align: left;">在对于猫咪的饲养过程中，
			我们时常会遇到猫咪的各种各样的病症，在对这些病症做出诊断之前，我们需要对猫咪做一些一般的检查，比...<a href="#" style="color: #99cc55;">[详细]</a></p>
		</div>
		<a href=""></a>
		<div class="baike-2">
			<div v-for="item in emascat" :key="item.id" style="width: 280px;display: flex;align-items: center;">
				<img :src="item.pet_img">
				<p style="overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;">{{item.context}}
						  </p>
			</div>
		</div>
		<div class="baike-3">
			<div v-for="item in emascat" :key="item.id">
				<p>{{item.content1}}</p>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				emascat: []
			}
		},
		created() {
			this.$http.get("/getClassBaike", {
				params: {
					class_id: 2
				}
			}).then(res => {
				this.emascat = res.data.slice(0, 8);
				console.log(this.emascat)
			}).catch(err => {
				console.log("请求失败")
			})
		}
	}
</script>

<style scoped="">
	.baike {
		display: flex;
		height: 350px;
		justify-content: space-between;
	}
    .baike-1{
		width: 280px;
		height: 350px;
		background-color: #F3F3F3;
	}
	.baike-1 img {
		width: 280px;
		height: 210px;
	}

	.baike-2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 600px;
	}

	.baike-2 img {
		width: 90px;
		height: 68px;
	}

	.baike-3 {
		display: flex;
		flex-direction: column;
	}

	.baike-3 p {
		margin-bottom: 20px;
	}
</style>
