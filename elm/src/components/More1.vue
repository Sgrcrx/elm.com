<template>
	<div class="more">
		<div class="more-item">
			<div class="muins" v-for="(item,index) in some">
				<h1 class="some" v-text="item.title"></h1>
				<p class="ad" v-text="item.ad"></p>
				<router-link to="">
					<span class="texts" v-text="item.texts"></span>
					<span class="roots">></span>
				</router-link>
				<img :src="item.images" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				some: [{
					title: '品质套餐',
					ad: '搭配齐全吃得好',
					texts: '立即抢购',
					images: require('../../public/img/images/fo.png')
				}, {
					title: '限量抢购',
					ad: '超值美味 9.9元起',
					texts: '1915人正在抢购',
					images: require('../../public/img/images/fo.png')
				}, ]
			};
		},
	}
</script>

<style scoped="scoped">
	.more {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		margin-top: 4px;
		margin-bottom: 4px;
	}
	
	.more .more-item {
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: 100%;
		text-align: left;	
		background-color: #fff;
		box-sizing: border-box;
	}
	.more .more-item :nth-of-type(2n) .muins{
		margin-left: 1px;
	}
	
	.more .muins {
		flex: 1;
		padding: 2px 14px;
		box-sizing: border-box;
		margin-right: 1px;
		background-color: #f6f6f6;
		/*margin: 0px 1px;*/
		/*background-color: salmon;*/
	}
	
	.more h1.some {
		font-size: 1.453333rem;
		font-weight: 700;
		margin-bottom: 1vw;
		color: #333;
		margin-bottom: 2.4vw;
	}
	
	.more p.ad {
		font-size: .346667rem;
		color: #777;
	}
	
	.more a {}
	
	.more a span.texts,
	.more a span.roots {
		font-size: .32rem;
		color: #af8260;
		font-weight: 700;
	}
	
	.more a span.roots {
		margin-left: 0.3rem;
	}
	
	.more img {
		width: 32vw;
		margin-left: 20%;
		height: 21.333333vw;
	}
</style>