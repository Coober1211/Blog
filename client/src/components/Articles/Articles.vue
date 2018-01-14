<template>
  <div class="main">
    <search-bar></search-bar>
    <div class="tags-box"></div>
    <div class="card-box">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>      
    </div>
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
  grid-template-columns: 2fr 6fr 2fr;
  grid-row-gap: 10px;
  font-family: 'Ovo', serif;
}

.searchBar {
  grid-column: 2;
  max-width: 300px;
  justify-self: center;
}

.card-box {
  grid-column: 2;
  user-select: none;
}
</style>
