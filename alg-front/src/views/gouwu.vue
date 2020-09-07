<template>
	<div class="gouwubox">
		<div class="shopbox">
			<div class="shopleft">
				<div class="shop-pic" >
					<fangdajing :imgUrl="img_url"></fangdajing>
					</div>
				
				
				<div class="shop-smallPic">
					<div @mouseover="picmouseover" @mouseleave="picmouseleave">
						<img :src="img_url" :style="active">
					</div>

					<!-- <div @mouseover="picmouseover1" @mouseleave="picmouseleave1"><img src="../assets/shop/shoppicpath11590564071_y.jpg" alt="":style="active1"></div>
					<div @mouseover="picmouseover2" @mouseleave="picmouseleave2"><img src="../assets/shop/shoppicpath21590564071_y.jpg" alt="":style="active2"></div> -->
				</div>

			</div>
			<div class="shop-detail">
				<p>{{discription}}</p>
				<li>天天特价，好货任选2件8折</li>

				<div class="money">
					<dl>波奇价：<i style="color: red;font-size: 30px;"> ￥{{price}}</i><i style="color: red;"> 波奇豆抵5%</i></dl><br>
					<dl>库存：{{count}}件</dl><br>
					<dl>促销信息：<i style="background-color: red;color: white;">多买多惠</i> <i style="color: red;"> 2件8折</i></dl>
					<br><br>
					<dl>配送至：<xiala></xiala>
					</dl>
					<dl>套装：<taocan></taocan><br></dl>
					<dl>购买数量:<el-input-number v-model="num" @change="handleChange" :min="1"  label="描述文字"></el-input-number>件
					</dl>
					<div >
						<div class="gouwu-buy" @click="goback">返回</div>
						<div class="gouwu-buy" >立即购买</div>
						<div class="gouwu-buy" @click="addToCart">加入购物车</div>
					</div>
				</div>
			</div>
			<div class="shopright">
				<rightlist></rightlist>
			</div>
			<rightfloat></rightfloat>
		</div>
	</div>
</template>

<script>
	import Bus from "../assets/js/Bus"
	import fangdajing from "../components/shopping/ProductMsg/fangdajing.vue"
	import xiala from "../components/shopping/ProductMsg/xiala";
	import taocan from "../components/shopping/ProductMsg/taocan";
	import rightlist from "../components/shopping/ProductMsg/rightlist";
		
	export default {
		components: {
			xiala,
			taocan,
			rightlist,
			fangdajing
		},
		data: function() {
			return {
				active: "",
				active1: "",
				active2: "",
				num: 1,
				price:0,
				img_url:'',
				discription:'',
				count:0
			}
		},
		methods: {
			picmouseover() {
				this.active = "border: 1px solid red;"
			},
			picmouseleave() {
				this.active = ""
			},
			handleChange(value) {
				console.log(value);
			},
			picmouseover1() {
				this.active1 = "border: 1px solid red;"
			},
			picmouseleave1() {
				this.active1 = ""
			},
			picmouseover2() {
				this.active2 = "border: 1px solid red;"
			},
			picmouseleave2() {
				this.active2 = ""
			},
			goback(){
				this.$router.go(-1);
			},
			addToCart(){
				//用户是否登录
				if(this.cookie.getCookie('user')){
					if(this.count !== 0 && this.num <= this.count){
						this.$http.get('/addToCart',{
							params:{
								user:this.cookie.getCookie('user'),
								id:this.$route.query.product_id,
								count:this.num
							}
						}).then(res => {
							this.$message({
								message: '添加到购物车成功，请前往购物车查看',
								type: 'success'
							});
							Bus.$emit('shopcount',this.num)
						}).catch(err => {
							console.log(err);
						})
					}else {
						this.$alert('商品被抢光啦，已通知掌柜的补货', '缺货提示', {
                            confirmButtonText: '确定',
                        });
					}
				}else {
					this.$router.push('/loginregist/login');
				}
			},
			getMsg(){
				this.$http.get('/getByid',{
					params:{
						product_id:this.$route.query.product_id
					}
				}).then(res => {
					this.price = res.data[0].price;
					this.img_url = res.data[0].img_url;
					this.discription = res.data[0].discription;
					this.count = res.data[0].count;
				}).catch(err => {
					console.log(err);
				})
			}
		},
		mounted() {
			//不能使用go(0)会无限刷新
			// this.$router.go(0);
			this.getMsg();
		},
		watch: {
			'$route.query.product_id'(){
				this.getMsg();
			}
		}
	}
</script>

<style>
	.gouwubox {
		margin-top: 30px;
	}

	.shopbox {
		width: 1190px;
		margin-top: 20px;
		position: relative;
		margin: auto auto;
	}

	.shopleft {
		height: 420px;
		width: 360px;
		border: 1px solid #e6e6e6;
		padding: 19px;
	}

	.shop-pic img {
		height: 360px;
		width: 360px;
	}

	.shop-smallPic {
		padding: 10px 5px 0;
		overflow: hidden;
		height: 67px;
		width: 360px;
	}

	.shop-smallPic div {
		display: inline;


	}

	.shop-smallPic div img {
		height: 50px;
		width: 50px;
		margin-right: 10px;
		cursor: pointer
	}

	.shop-detail {

		position: absolute;
		top: 0px;
		right: 250px;
		height: 470px;
		width: 520px;
		margin-left: 20px;
	}

	.shop-detail p {
		font: 20px/28px "Microsoft YaHei";
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		float: left;
		margin: 0px 0px;

	}

	.shop-detail li {
		font-size: 12px;
		color: red;
		list-style: none;
		float: left;
		padding-top: 8px;
		letter-spacing: 4px;
	}

	.money {
		position: absolute;
		top: 70px;
		height: 134px;
		width: 100%;
		background-color: #fef8f6;
		border-top: 1px solid #e6e6e6;
	}

	.money dl {
		text-align: left;
		margin: 1px 5px;
		font-size: 12px;
	}

	.gouwu-buy {
		display: inline-block;
		height: 40px;
		width: 130px;
		background-color: #e53;
		text-align: center;
		color: white;
		margin-right: 20px;
		line-height: 40px;
		cursor: pointer;
	}
	

</style>
