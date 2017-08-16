<template>
	<div class="commitbox">	
		<div class="content">CommentBox
		<div class="form">
			<input type="text"id="commentForm" @keyup.enter='submit'>
			<button type='submit' @click="submit">提交</button>
		</div>
			<ul>
				<li v-for="comment in reversedComment">{{comment.text}}</li>
			</ul>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'commit-box',
		data: ()=>({
			comments: [
			{
				text: 'foot'
			},
			{
				text: 'bar'
			}
		]
	}),
		computed: {
			reversedComment (){
				return this.comments.slice().reverse()
			}
		},
		methods: {
			submit (){
				let input = document.getElementById('commentForm')
				if(input.value !== ''){
					this.comments.push({text: input.value})
					input.value = ''
				}
			}
		}
}
</script>

<style scoped>
	.commitbox{
		width: 90%;
		height: auto;
		background-color: #311B92;
		margin:0 auto;
	}
	.content{
		width: 90%;
		height: auto;
		background-color: #FFEB3B;
		margin:0 auto;
		text-align: center;
		font-size:30px;
		box-shadow: 5px 5px 0px rgba(0,0,0,0.5)
	}
	.content button{
		width: 50px;
		line-height: 35px;
	}
	.content li{
		text-align: left;
		font-size:22px;
	}
	.content .form input{
		width: 80%;
		font-size:24px;
	}
</style>