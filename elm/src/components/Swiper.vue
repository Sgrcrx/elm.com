<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"v-for="(item,index) in items">
				<a href="#">
					<img :src="item.images"/>
				</a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data:function(){
			return{
				items:[{
					id:1,
					images:require('../../public/img/images/swiper1.jpg')
				},{
					id:2,
					images:require('../../public/img/images/swiper2.jpg')
				},{
					id:3,
					images:require('../../public/img/images/swiper3.jpg')
				},{
					id:4,
					images:require('../../public/img/images/swiper4.jpg')
				},]
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
				autoplay: true
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