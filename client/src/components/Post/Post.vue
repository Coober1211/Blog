<template>
  <div class="main">
    <hero></hero>
  </div>
</template>

<script>
import hero from './Hero';

export default {
  name: 'post',
  components: {
    hero,
  },
  data() {
    return {
      post: {},
    };
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const slug = this.$route.params.slug;
      let articles = this.$store.state.articles;
      if (articles.length === 0) {
        await this.$store.dispatch('getArticles');
        articles = this.$store.state.articles;
      }
      this.post = articles.filter(article => article.slug === slug)[0];
       // eslint-disable-next-line
      console.log(this.post);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  font-family: 'Ovo', serif;
}

.hero {
  grid-column: 2/6;
}

</style>


