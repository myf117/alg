<template>
	<div class="baike">
		<div class="baike-1">
			<img src="../../assets/img/hosptal.png">
			<p>的撒大大撒大大</p>
		</div>
		<div class="baike-2">
			<div v-for="item in emas" :key="item.id" style="width: 280px;display: flex;align-items: center;">
				<img src="../../assets/img/cart.png" alt="">
				<p>{{item.content}}</p>
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
	export default{
		data(){
			return{
				emas:[
					{id:1,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:2,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:3,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:4,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:5,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:6,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:7,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"},
					{id:8,content:"什么小宠物好养又干净呢？",content1:"狗狗的疫苗问题"}					
				]
			}
		}
	}
</script>

<style>
	.baike{
		display: flex;
		justify-content: space-between;
	}
	.baike-1 img{
		width: 280px;
		height: 210px;
	}
	.baike-2{
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
