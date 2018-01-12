<template>
  <div class="main">
    <search-bar></search-bar>
    <card></card>
    <card></card>    
  </div>
</template>

<script>
// import articleService from '@/services/AticleService';
import card from './Card';
import searchBar from './SearchBar';

export default {
  components: {
    card,
    searchBar,
  },
  // async created() {
  //   try {
  //     const response = await articleService.getArticles();
  //     const articles = response.data.articles;
  //     // eslint-disable-next-line
  //     console.log(articles);
  //   } catch (err) {
  //     this.error = err;
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  padding: 30px;
  grid-template-columns: 1fr 2fr 1fr;
}

.searchBar {
  grid-column: 2;
  justify-self: stretch;
}

.card {
  grid-column: 2;
}
</style>
