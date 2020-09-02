<template>
	<div>
		<div class="box">
			<top></top>
			<topnav></topnav>
			<lunbo></lunbo>
			<hot></hot>
			<div class="e-dog">
				<div class="eba"></div>
				<div class="dog-tit">狗狗百科
				</div>
			</div>
			<div class="e-dog-1">
				<baike></baike>
			</div>
			<div class="e-dog1">
				<div class="eba1"></div>
				<div class="dog-tit">猫猫百科
				</div>
			</div>
		<div class="e-dog-2">
			<baikejieshaocat></baikejieshaocat>
		</div>
		<div class="e-dog2">
			<div class="eba2"></div>
			<div class="dog-tit">水族爬虫百科
			</div>
		</div>
		</div>
		<div class="e-dog-3">
			<baikexiaochong></baikexiaochong>
		</div>
		<div style="background-color: #F3F3F3;height: 300px;padding: 80px 50px;">
		<bottom></bottom>
		</div>
	</div>
</template>

<script>
	import top from "../components/anency/top";
	import topnav from "../components/anency/topnav";
	import lunbo  from "../components/anency/lunbo";
	import hot  from "../components/anency/hot";
	import baike  from "../components/anency/baikejieshao";
	import bottom  from "./bottom.vue";
    import baikejieshaocat  from "../components/anency/baikejieshaocat.vue";
	import baikexiaochong  from "../components/anency/baikexiaochong.vue";
	export default{
		components:{
			top:top,
			topnav:topnav,
			lunbo:lunbo,
			hot:hot,
			baike:baike,
			bottom:bottom,
			baikejieshaocat:baikejieshaocat,
			baikexiaochong:baikexiaochong
		}
	}
</script>

<style>
	*{
	padding: 0;
	margin: 0;
	}
	.e-dog{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items:flex-end;
		border-bottom: 2px solid #99cc55;
	}
	.eba{
		width: 33px;
		height: 54px;
		background-image: url(../../public/common.png);
		background-repeat: no-repeat;
	}
	.dog-tit{
		font: 24px/44px "Microsoft YaHei";
		    color: #FFF;
		    width: 156px;
		    height: 44px;
		    background: #9C3;
		    text-align: center;
		    line-height: 44px;
	}
    .e-dog-1,.e-dog-2,.e-dog-3{
		width: 1200px;
		margin: 0 auto;
		margin-top: 10px;
		height: 370px;
		/* border: 1px solid #CC99CC; */
	}
	.e-dog1{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items:flex-end;
		border-bottom: 2px solid #99cc55;
	}
	.eba1{
		width: 33px;
		height: 54px;
		background-image: url(../../public/common.png);
		background-repeat: no-repeat;
		background-position: -54px 6px;
	}
	.e-dog2{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items:flex-end;
		border-bottom: 2px solid #99cc55;
	}
	.eba2{
		width: 33px;
		height: 54px;
		background-image: url(../../public/common.png);
		background-repeat: no-repeat;
		background-position: -126px 13px;
	}
	html {
	  min-height: 101%;
	}
</style>
