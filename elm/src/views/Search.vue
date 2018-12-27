<template>
	<div class="search">
		<search-top></search-top>
		<some-times></some-times>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import SearchTop from '../components/SearchTop'
	import SomeTimes from '../components/SomeTimes'
	
	
	export default{
		name: 'search',
		components: {
			Footeres,
			SearchTop,
			SomeTimes
		}
	}
</script>

<style scoped="scoped">
	
</style>