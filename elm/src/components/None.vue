<template>
	<div class="none">
		<div class="box">
			<img src="../../public/img/images/none.png"/>
			<h1>近三个月无外卖订单记录</h1>
			<router-link to=''>
				<p>查看三个月前的外卖订单&nbsp;&nbsp;
				<i class="fa fa-chevron-down"></i>
			</p>
			</router-link>
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
	.none{}
	.none .box{
		text-align: center;
		margin-top: 100px;
	}
	.none img{
		
	}
	.none h1{
		font-size: 20px;
		color: #666;
	}
	.none a{
		text-decoration: none;
		color: #999;
	}
	.none p{}
	.none i{}
</style>