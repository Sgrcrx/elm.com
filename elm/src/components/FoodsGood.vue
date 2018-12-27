<template>
	<div class="foodsgood">
		<div class="box" v-for="(item,index) in foodsgood">
			<div class="left">
				<img :src="item.images"/>
			</div>
			<div class="right">
				<div class="right1">
					<h1 v-text="item.title"></h1>
					<span>···</span>
				</div>
				<div class="right2">
					<div class="right-item" v-for="(cow,j) in item.star">
						<i class="fa" :class="item.star[j].fa"></i>
					</div>
					<span v-text="item.num"></span>月售<span v-text="item.nan"></span>单
				</div>
				<div class="right3">
					￥<span class="num1" v-text="item.num1"></span>起配送&nbsp;|&nbsp;
					配送费<span class="num2" v-text="item.mun2"></span>
					<span class="num3" v-text="item.num3"></span>km&nbsp;|&nbsp;
					<span class="num4" v-text="item.num4"></span>分钟
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				foodsgood:[{
					images:require('../../public/img/images/fo1.png'),
					title:'阿木烧烤(满减限时优惠店)',
					num:4.7,
					num1:30,
					num2:6,
					num3:2.36,
					num4:38,
					nan:2729,
					star:[{
						fa:'fa-star',
					},{
						fa:'fa-star',
					},{
						fa:'fa-star',
					},{
						fa:'fa-star',
					},{
						fa:'fa-star',
					},]
				}]
			};
		}
	}
</script>

<style scoped="scoped">
	.foodsgood{
		margin-top: 10px;
	}
	.foodsgood .box{
		display: block;
		content: "";
		clear: both;
	}
	.foodsgood .left{
		width: 25%;
		height: 100%;
		float: left;
		/*background-color: salmon;*/
	}
	.foodsgood .left img{
		width: 100%;
		height: auo;
	}
	.foodsgood .right{
		width: 75%;
		height: 100px;
		float: right;
		background-color: skyblue;
	}
	.foodsgood .right1{
		position: relative;
	}
	.foodsgood .right h1{
		display: inline-block;
		font-size: 16px;
		margin-left: 10px;
		margin-top: 0px;
	}
	.foodsgood .right span{
		position: absolute;
		top: 0px;
		right: 6px;
	}
	.foodsgood .right2{
		display: flex;
		display: -webkit-flex;
		margin-left: 10px;
		font-size: 12px;
	}
	
	.foodsgood .right-item{
		display: inline-block;
	}
	.foodsgood .right2 i{
		flex: 1;
		color: #ffd100;
	}
	.foodsgood .right2{
		display: inline-block;
	}
	.num1{}
	.num2{
		
	}
	.num3{
		
	}
	.num4{}
	.right3{
		margin-left: 10px;
	}
</style>