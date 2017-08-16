<template>
	<div class="commitbox">
		<div class="content">CommentBox
			<ul>
				<li v-for="comment in commits">{{comment.text}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'commit-box',
		data: ()=>({
			commits: [
			{
				text: 'foot'
			},
			{
				text: 'bar'
			}
		]
	})
}
</script>

<style scoped>
	.commitbox{
		width: 90%;
		height: 200px;
		background-color: #311B92;
		margin:0 auto;
	}
	.content{
		width: 90%;
		height: 180px;
		background-color: #FFEB3B;
		margin:0 auto;
		text-align: center;
		font-size:30px;
		box-shadow: 5px 5px 0px rgba(0,0,0,0.5)
	}
	.content li{
		text-align: left;
		font-size:22px;
	}
</style>