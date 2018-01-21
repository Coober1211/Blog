<template>
  <div class="description">
    <h2>{{content}}</h2>
  </div>  
</template>

<script>
export default {
  name: 'description',
  props: [
    'content',
  ],
};
</script>

<style lang="scss" scoped>
  .description {
    margin: 20px;
    letter-spacing: 1px;
  }

  .description h2 {
    padding: 10px;
    display: inline-block;
    text-shadow: 2px 2px #ccc;
    font-style: italic;
  }
</style>