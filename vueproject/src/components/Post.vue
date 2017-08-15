<template>
	<div class="post">
		<img src="../assets/logo.png" alt="">
		<post-body></post-body>
		<commit-box></commit-box>
	</div>
</template>

<script>
import PostBody from './PostBody'
import CommitBox from './CommitBox'
export default {
  components: {PostBody, CommitBox}
}
</script>

<style socped>
	.post img{
		display: block;
		width: 80px;
		text-align: center;
	}
</style>