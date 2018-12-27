<template>
	<div class="usertop">
			<div class="box clear">
				<img class="left" src="../../public/img/images/2.png"/>
				<div class="user-item" v-for="(item,index) in users">
					<div class="name" v-text="item.name"></div>
					<i class="fa fa-phone"></i>
					<div class="phone" v-text="item.phone"></div>
				</div>
				<router-link class='right' to="">&nbsp;>&nbsp;</router-link>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				users:[{
					id:1,
					name:'小明',
					phone:13838389438
				}]
			};
		},
	}
</script>

<style scoped="scoped">
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.clear:after{
		display: block;
		content: '';
		clear: both;
	}
	.usertop{
		z-index: 999;
	}
	.usertop .box{
		width: 100%;
		height: 120px;
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	.usertop .box img{
		width: 70px;
		height: 70px;
		border-radius: 50%;
		margin-top: 25px;
		margin-left: 20px;
	}
	.usertop .user-item{
		display: inline-block;
		margin-left: 20px;
		color: #fff;
	}
	.usertop .user-item .name{
		font-size: 24px;
		margin-top: 30px;
		margin-bottom: 4px;
	}
	.usertop .user-item i{
		
	}
	.usertop .user-item .phone{
		display: inline-block;
	}
	.usertop a{
		color: #fff;
		text-decoration: none;
		margin-top: 45px;
		margin-right: 15px;
		font-size: 24px;
	}
</style>