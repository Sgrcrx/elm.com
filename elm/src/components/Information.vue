<template>
	<div class="information">
		<div class="infor">
			<div class="infor-item" v-for="(item,index) in infor">
				<div class="colors">
					<h2 v-text="item.mun"></h2>
					<span class="name" v-text="item.name"></span>
				</div>
				<span class="title" v-text="item.title"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				infor:[{
					id:1,
					mun:'0.00',
					name:'元',
					title:'钱包'
				},{
					id:2,
					mun:'0',
					name:'个',
					title:'红包'
				},{
					id:3,
					mun:'16',
					name:'个',
					title:'金币'
				},]
			};
		},
	}
</script>

<style scoped="scoped">
	html,body,#app,.information{
		margin: 0px;
		padding: 0px;
	}
	.information{
		box-sizing: border-box;
		text-align: center;
		padding-bottom: 10px;
	}
	.information .infor{
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: 100%;
	}
	.information .infor-item{
		flex: 1;
		box-sizing: border-box;
		margin: 0px 0.5px 3px;
		background-color: #fff;
	}
	.information .infor-item:nth-of-type(1) .colors{
		    color: rgb(0, 152, 251);
	}
	.information .infor-item:nth-of-type(2) .colors{
		    color: rgb(255, 95, 62);
	}
	.information .infor-item:nth-of-type(3) .colors{
		    color: rgb(106, 194, 11);
	}
	
	
	.information h2{
		display: inline-block;
		font-weight: bold;
	}
	.information .name{
		
	}
	.information .title{
		display: block;
		margin-top: -10px;
		margin-bottom: 10px;
	}

</style>