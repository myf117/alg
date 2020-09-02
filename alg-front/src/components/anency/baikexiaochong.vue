<template>
	<div class="baike">
		<div class="baike-1">
			<img src="../../assets/img/sbaike.jpg">
			<p style="font-size: 14px;text-align: left;">兔异食症的发生除了与平时的习惯有关之外，主要还是因为身体缺乏某些微量元素所造成的。患有异食症的家兔会对原本很多本能进食的...<a href="#" style="color: #99cc55;">[详细]</a></p>
		</div>
		<a href=""></a>
		<div class="baike-2">
			<div v-for="item in emassmall" :key="item.id" style="width: 280px;display: flex;align-items: center;">
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
			<div v-for="item in emassmall" :key="item.id">
				<p>{{item.content1}}</p>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				emassmall: []
			}
		},
		created() {
			this.$http.get("/getClassBaike", {
				params: {
					class_id: 3
				}
			}).then(res => {
				this.emassmall = res.data.slice(0, 8);
				console.log(this.emassmall)
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
