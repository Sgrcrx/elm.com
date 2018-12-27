<template>
	<div class="intriduction">
		<div class="intr">
			<div class="intr-item" v-for="(item,index) in intr">
				<span v-text="item.title"></span>
				<i class="fa" :class="item.fa"></i>
			</div>
		</div>
		<div class="border"></div>
		<!--2-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				intr:[{
					id:1,
					title:'综合排序',
					fa:''
				},{
					id:2,
					title:'距离最近',
					fa:''
				},{
					id:3,
					title:'品质联盟',
					fa:''
				},{
					id:4,
					title:'筛选',
					fa:'fa-filter'
				},]
			};
		},
	}
</script>

<style scoped="scoped">
	.intriduction{}
	.border{
		border-bottom: 1px solid #eee;
		margin-top: 10px;
	}
	.intriduction .intr{
		display: flex;
		display: -webkit-flex;
	}
	.intriduction .intr-item{
		flex: 1;
	}
	.intriduction span{
		margin-right: 2px;
	}
	.intriduction i{
		color: #ccc;
	}
</style>