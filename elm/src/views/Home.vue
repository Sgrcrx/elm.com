<template>
  <div class="home">
  	<top-bar></top-bar>
  	<swiper1></swiper1>
  	<ad></ad>
  	<more1></more1>
  	<swiper></swiper>
  	<div class="intro">—<span>推荐商家</span>—</div>
  	<intriduction></intriduction>
  	<foods-good></foods-good>
  	<div class="crx"></div>
    <footeres></footeres>
  </div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import TopBar from '../components/TopBar'
	import Swiper1 from '../components/Swiper1'
	import Ad from '../components/Ad'
	import More1 from '../components/More1'
	import Swiper from '../components/Swiper'
	import Intriduction from '../components/Intriduction'
	import FoodsGood from '../components/FoodsGood'
	
	
	
export default{
	name: 'home',
		components: {
			TopBar,
			Footeres,
			Swiper1,
			Ad,
			More1,
			Swiper,
			Intriduction,
			FoodsGood,
		}
}
</script>

<style scoped="scoped">
	.home{
		background-color: #fff;
		box-sizing: border-box;
		padding: 60px 10px 0px;
	}
	a{
		text-decoration: none;
	}
	
	.crx{
		height: 1000px;
	}
	.intro{
		margin-top: 10px;
		font-size: 16px;
		color: #c0c0c0;
		font-weight: 400;
	}
	.intro span{
		margin: 0px 10px;
		color: #000;
	}

</style>
