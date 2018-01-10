<template lang="pug">
  .article
    .header
    .main
</template>

<script>
import articleService from '@/services/AticleService';

export default {
  async created() {
    try {
      const response = await articleService.getArticles();
      const articles = response.data.articles;
      // eslint-disable-next-line
      console.log(articles);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>

