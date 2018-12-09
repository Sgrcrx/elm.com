<template>
	<div class="good">
		<!--goods-->
		<div class="goods">
			<div class="goods-item" v-for="(item,index) in goods">
				<a href="#">
					<div class="images">
						<img :src="item.images" />
					</div>
					<div class="tests">
						<span v-text="item.tests"></span>
					</div>
				</a>
			</div>
		</div>

		<!--goodss-->
		<div class="goods">
			<div class="goods-item" v-for="(item,index) in goodses">
				<a href="#">
					<div class="images">
						<img :src="item.images" />
					</div>
					<div class="tests">
						<span v-text="item.tests"></span>
					</div>
				</a>
			</div>
		</div>
		<!---->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
					images: require('../../public/img/images/dfc.png'),
					tests: '地方菜系'
				}, {
					images: require('../../public/img/images/mlt.png'),
					tests: '麻辣烫'
				}, {
					images: require('../../public/img/images/ssjc.png'),
					tests: '速食简餐'
				}, {
					images: require('../../public/img/images/dfxc.png'),
					tests: '地方小吃'
				}, {
					images: require('../../public/img/images/dphc.png'),
					tests: '大牌惠吃'
				}],
				//
				goodses: [{
					images: require('../../public/img/images/mfmg.png'),
					tests: '米粉面馆'
				}, {
					images: require('../../public/img/images/bzzd.png'),
					tests: '包子粥店'
				}, {
					images: require('../../public/img/images/zjzc.png'),
					tests: '炸鸡炸串'
				}, {
					images: require('../../public/img/images/hbps.png'),
					tests: '汉堡披萨'
				}, {
					images: require('../../public/img/images/yblw.png'),
					tests: '鸭脖卤味'
				}, ]
			}
		}
	}
</script>

<style scoped="scoped">
	.good{
		/*margin: 120px 10px 10px;*/
	}
	.goods {
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		margin-bottom: 10px;
	}
	
	.goods-item {
		flex: 1;
		width: 20%;
		box-sizing: border-box;
	}
	
	.goods-item a {
		text-decoration: none;
		color: #666;
		text-align: center;
	}
	
	.image {
		width: 50px;
		height: 50px;
	}
	
	img {
		width: 50px;
		height: 50px;
	}
	
	.goods-item a .tests {}
	
	.goods-item a .tests span {}
</style>