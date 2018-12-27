<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="#">
					<goods></goods>
				</a>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<goods2></goods2>
				</a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import Goods from '../components/Goods'
	import Goods2 from '../components/Goods2'
	export default {
		components:{
			Goods,
			Goods2
		},
		data: function() {
			return {

			};
		},
		methods: {},
		created() {},
		mounted() {
			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: false
			});

		}
	}
</script>

<style>
	/*轮播图*/
	
	.swiper-container {
		
	}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>