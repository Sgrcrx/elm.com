<template>
	<div class="sometimes">
		<div class="box"  v-for="(item,index) in tops">
			<div class="top">
				—<i class="fa" :class="item.fa"></i><h1 v-text="item.title"></h1>—
			</div>
			<span v-text="item.test"></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tops:[{
					fa:'fa-clock-o',
					title:'限时好礼',
					test:'金币换豪礼'
				}]
			};
		},
	}
</script>

<style scoped="scoped">
	.sometimes{}
	.sometimes .box{
		text-align: center;
	}
	.sometimes .top{
		margin: 0px;
		padding: 0px;
/*		background-color: salmon;*/
		
	}
	.sometimes .top i,.sometimes .top h1{
/*		padding-top: 2px;*/
		box-sizing: border-box;
	}
	.sometimes .top i{
		color: #f94f4a;
		font-size: 20px;
		margin: 0px 4px 0px;
	}
	.sometimes .top h1{
		display: inline-block;
		font-size: 20px;
		margin-right: 4px;
	}
	.sometimes{}
	.sometimes{}
	.sometimes{}
</style>