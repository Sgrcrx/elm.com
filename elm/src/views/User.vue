<template>
	<div class="user">
		<user-top></user-top>
		<information></information>
		<demos class='demo1'><i class="fa fa-map-marker"></i>我的地址</demos>
		<demos><i class="fa fa-shopping-bag"></i>金币商城</demos>
		<demos  class='demo1'><i class="fa fa-safari"></i>分享拿10元现金</demos>
		<demos><i class="fa fa-headphones"></i>我的客服</demos>
		<demos  class='demo1'><i class="fa fa-download"></i>下载饿了么APP</demos>
		<div class="intro"><router-link to=''>规则中心</router-link></div>
		<div class="crx"></div>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import UserTop from '../components/UserTop'
	import Information from '../components/Information'
	import Demos from '../components/Demos'
	
	
	export default{
		name: 'user',
		components: {
			Footeres,
			UserTop,
			Information,
			Demos
		}
	}
</script>

<style scoped="scoped">
	.user{
		background-color: #f5f5f5;
	}
	.demos{
		
	}
	.demos i{
		margin-right: 10px;
	}
	.demo1{
		margin-bottom: 15px;
	}
	.crx{
		height: 200px;
	}
	.intro{
		text-align: center;
	}
</style>