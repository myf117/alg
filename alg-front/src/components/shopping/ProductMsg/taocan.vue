<template>
	<div>
		<el-radio-group v-model="radio1">
			<el-radio-button label="1kg"></el-radio-button>
			<el-radio-button label="2kg"></el-radio-button>
			<el-radio-button label="超值4kg"></el-radio-button>
			<el-radio-button label="体验0.5kg"></el-radio-button>
		</el-radio-group>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				radio1: ''
			}
		}
	}
</script>

<style>
</style>
