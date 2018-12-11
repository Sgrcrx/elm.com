<template>
  <div class="home">
  	<top-bar></top-bar>
  	<goods></goods>
  	<goods2></goods2>
  	<ad></ad>
  	<div class="crx"></div>
    <footeres></footeres>
  </div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import TopBar from '../components/TopBar'
	import Goods from '../components/Goods'
	import Goods2 from '../components/Goods2'
	import Ad from '../components/Ad'
	
	
	
export default{
	name: 'home',
		components: {
			Footeres,
			TopBar,
			Goods,
			Goods2,
			Ad
		}
}
</script>

<style scoped="scoped">
	.crx{
		height: 1000px;
	}
</style>
