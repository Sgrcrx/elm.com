<template>

	<footer>

		<ul>
			<li v-for="(item,index) in nav">
				<router-link :to="item.to">
				<span class="fa" :class="item.icon"></span>
				<span class="title" v-text="item.title"></span>
				</router-link>
			</li>
		</ul>

	</footer>

</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: '首页',
					icon: 'fa-home',
					to:'/'
				}, {
					title: '发现',
					icon: 'fa-search',
					to:'Search'
				}, {
					title: '订单',
					icon: 'fa-book',
					to:'Cart'
				}, {
					title: '我的',
					icon: 'fa-user',
					to:'User'
				}]
			}
		}
	}
</script>

<style scoped="scoped">
	footer {
		width: 100%;
		height: 50px;
		color: #353535;
		text-align: center;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		position: fixed;
		bottom: 0px;
		left: 0px;
		z-index: 9999;
		background-color: #fff;
	}
	
	footer a {
		color: #353535;
		text-decoration: none;
	}
	
	footer a.router-link-exact-active {
		color: #f23030;
	}
	
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	footer ul li {
		flex: 1;
		padding-top: 5px;
		list-style: none;
	}
	
	footer ul li span.fa {
		font-size: 20px;
	}
	
	footer ul li .title {
		display: block;
		font-size: 12px;
	}
</style>