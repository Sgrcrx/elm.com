<template>
  <div class="home">
  	<top-bar></top-bar>
  	
    <footeres></footeres>
  </div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import TopBar from '../components/TopBar'
	
	
	
export default{
	name: 'home',
		components: {
			Footeres,
			TopBar
		}
}
</script>
