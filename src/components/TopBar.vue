<template>
	<div class="top-bar">
		<div class="nav">
			<div class="address">
				<a href="#"><i class="fa fa-map-marker"></i>
					<h1>请输入地址...</h1>
					<i class="fa fa-caret-down"></i></a>
			</div>
			<div class="search-item">
				<a href="#">
					<i class="fa fa-search"></i>
					<span class="names">搜索饿了么商家、商品名称</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.top-bar {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 110px;
		background-color: #00a4ff;
	}
	
	.address {
		color: #fff;
		box-sizing: border-box;
		padding: 0px 4px;
	}
	
	.address a{
		text-decoration: none;
		color: #fff;
	}
	
	.address i {
		margin-left: 10px;
		font-size: 20px;
	}
	
	.address h1 {
		display: inline-block;
		font-size: 18px;
		margin-left: 10px;
	}
	
	.search-item {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 10px;
		text-align: center;
		margin-top: 12px;
		/*background-color: red;*/
	}
	
	.search-item a {
		width: 100%;
		height: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 10px 80px;
		text-decoration: none;
		font-size: 16px;
		color: #999;
	}
	
	.search-item a i {
		margin-right: 10px;
	}
	
	.search-item a .names {}
</style>