<template>
	<div class="search-top">
		<div class="flex">
			<div class="flex-item it1">
				<h1>金币商城</h1>
				<p>0元好物在这里</p>
			</div>
			<div class="flex-item it2">
				<h1>推荐有奖</h1>
				<p>10元现金拿不停 </p>
				<img src="../../public/img/images/woods1.jpg" />
			</div>
		</div>
		<div class="flex">
			<div class="flex-item it3">
				<img src="../../public/img/images/woods2.jpg" />
			</div>
			<div class="flex-item it4">
				<h1>推荐有奖</h1>
				<p>10元现金拿不停 </p>
				<img src="../../public/img/images/woods3.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	}
</script>

<style scoped="scoped">
	.search-top {
		box-sizing: border-box;
		background-color: #fff;
		padding-top: 20px;
	}
	
	.search-top .flex {
		display: flex;
		display: -webkit-flex;
	}
	
	.search-top .flex-item {
		flex: 1;
		box-sizing: border-box;
		padding: 0px 20px;
		width: 100%;
		height: 100px;
		color: #666;
		display: block;
		content: '';
		clear: both;
		
	}
	.search-top .it1{
		border-right: 1px solid #eee;
	}
	.search-top .it2{
		border-bottom: 1px solid #eee;
	}
	.search-top .it3{
		border-right: 1px solid #eee;
	}
	.search-top .it4{}
	
	.search-top .it1 h1 {
		color: rgb(255, 153, 0);
	}
	
	.search-top .it2 h1 {
		color: rgb(27, 169, 225);
	}
	
	.search-top .it4 h1{
		color: rgb(237, 102, 96);
	}
	
	.search-top h1 {
		font-size: 20px;
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		padding-top: 10px;
	}
	
	.search-top p {
		float: left;
		box-sizing: border-box;
		padding-top: 10px;
	}
	
	.search-top .it2 img,
	.search-top .it4 img {
		width: 60px;
		height: 60px;
		display: inline-block;
		float: right;
	}
	
	.search-top .it3 {}
	
	.search-top .it3 img {
		width: 80px;
		height: 80px;
		display: inline-block;
		float: right;
		margin-top: 10px;
	}
	
	.search-top .it4 {}

</style>