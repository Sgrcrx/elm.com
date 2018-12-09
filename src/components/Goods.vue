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
					images: require('../../public/img/images/foods.png'),
					tests: '美食'
				}, {
					images: require('../../public/img/images/foods1.png'),
					tests: '晚餐'
				}, {
					images: require('../../public/img/images/shop.png'),
					tests: '商超便利'
				}, {
					images: require('../../public/img/images/peach.png'),
					tests: '水果'
				}, {
					images: require('../../public/img/images/helps.png'),
					tests: '医药健康'
				}],
				//
				goodses: [{
					images: require('../../public/img/images/hua.png'),
					tests: '鲜花绿植'
				}, {
					images: require('../../public/img/images/foods2.png'),
					tests: '厨房生鲜'
				}, {
					images: require('../../public/img/images/foots.png'),
					tests: '跑腿代购'
				}, {
					images: require('../../public/img/images/juice.png'),
					tests: '甜品饮品'
				}, {
					images: require('../../public/img/images/qian.png'),
					tests: '签到领红包'
				}, ]
			}
		}
	}
</script>

<style scoped="scoped">
	.good{
		margin: 120px 10px 10px;
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