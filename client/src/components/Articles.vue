<template lang="pug">
  .article
    .header
    .main
</template>

<script>
export default {
  async created() {
    try {
      const response = await this.$http.get('http://localhost:3000/article');
      const articles = response.data.articles;
      // eslint-disable-next-line
      console.log(articles);
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  },
};
</script>

