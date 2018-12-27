<template>
	<div class="demos">
		<div class="box">
			<!--<i class="fa fa-map-marker"></i>-->
			<slot></slot>
			<span>&nbsp;>&nbsp;</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{};
		},
	}
</script>

<style scoped="scoped">
	.demos{}
	.demos .box{
		display: block;
		content: '';
		clear: both;
		width: 100%;
		height: 50px;
		line-height: 50px;
		box-sizing: border-box;
		padding: 0px 10px;
		font-size: 16px;
		border-bottom: 1px solid #eee;
		background-color: #fff;
		/*background-color: red;*/
	}
	.demos span{
		float: right;
	}
</style>