<template>
	<div class="cart">
		<none></none>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import None from '../components/None'
	
	
	export default{
		name: 'cart',
		components: {
			Footeres,
			None
		}
	}
</script>

<style scoped="scoped">
	.cart{
		width: 100%;
		height: 100%;
	}
</style>