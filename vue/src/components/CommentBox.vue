<template>
  <div class="comment-box">
    <ul>
      <li v-for="news in comments">
        {{ news.text.split('').reverse().join('')}}
      </li>
      <li>{{state ? 'yes':'no'}}</li>
    </ul>
    <p v-if="seen">看不加我</p>
  </div>
</template>

<script>
  export default {
    name: 'comment-box',
    data: () => ({
      comments: [
        {
          text: 'hello git study'
        },
        {
          text: 'hello vuejs'
        },
        {
          text: 'newming'
        }
      ]
    }),
    state: 'ture',
    data1: {
      seen: 'true'
    }
  }
</script>

<style scoped>
  .comment-box {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    line-height: 1.8;
   }
</style>