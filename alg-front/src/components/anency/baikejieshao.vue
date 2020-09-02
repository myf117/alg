<template>
	<div class="baike">
		<div class="baike-1">
			<img src="../../assets/img/dbaike.jpg">
			<p style="font-size: 14px;text-align: left;">为狗狗做好驱虫工作不只是为了防止某些寄生虫对我们的健康造成影响，
			更主要的是因为寄生虫对于狗狗的危害来的更大，而且寄生虫不...<a href="#" style="color: #99cc55;">[详细]</a></p>
		</div>
		<a href=""></a>
		<div class="baike-2">
			<div v-for="item in emas" :key="item.id" style="width: 280px;display: flex;align-items: center;">
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
			<div  v-for="item in emas" :key="item.id" >
					<p>{{item.content1}}</p>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				emas: []
			}
		},
		created() {
			this.$http.get("/getClassBaike", {
				params: {
					class_id: 1
				}
			}).then(res => {
				this.emas = res.data.slice(0, 8);
				console.log(this.emas)
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
	.baike-2 img{
		width: 90px;
		height: 68px;
	}
	.baike-3{
		display: flex;
		flex-direction: column;
	}
	.baike-3 p{
		margin-bottom: 20px;
	}
</style>
