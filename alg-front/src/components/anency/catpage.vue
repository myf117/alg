<template>
	<div>
		<h1>这里是猫猫页面</h1>
		<top></top>
		<topnav></topnav>
	</div>
</template>

<script>
	import top from "./top.vue";
	import topnav from "./topnav.vue";
	export default{
		components:{
			top:top,
			topnav:topnav
			},
		}
</script>

<style>
</style>
