<template>
  <div class="post-body">
      <div v-if='isEmpty'>
        <p>加载中.........</p>
      </div>
      <div v-else>
        <p>你的文章已有<span>{{comments.length}}</span>评论</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    computed: {
      comments: function () {
        return this.$store.state.comment.all
      },
      isEmpty: function () {
        return this.$store.state.comment.all.lenght === 0
      }
    }
  }
</script>


<style scoped>
  .post-body {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    line-height: 1.8;
   }
   span{
    color:red;
    font-size:30px;
   }
</style>
