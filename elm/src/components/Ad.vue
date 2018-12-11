<template>
	<div class="ad">
		<div class="ads">
			<div class="images">
				<img src="../../public/img/images/king.png" />
			</div>
			<span id="shup">
			超级会员<span>.每月领20元红包</span>
			</span>
			<a href="#">
				立即开通&nbsp;&nbsp;>
			</a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.ad {}
	
	.ads {
		display: block;
		content: '';
		clear: both;
		box-sizing: border-box;
		padding: 0px 10px;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-image: -webkit-gradient(linear,left top,right top,from(#ffefc4),to(#f3dda0));
	}
	
	.images {
		float: left;
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	
	.images img {
		width: 20px;
		height: 20px;
	}
	
	#shup {
		color: #644f1b;
		font-weight: 700;
		float: left;
	}
	
	#shup span {
		font-size: 12px;
	}
	
	a {
		text-decoration: none;
		color: #644f1b;
		font-size: 12px;
		float: right;
	}
</style>