<template>
  <div class="main">
    <!-- <search-bar></search-bar> -->
    <div class="tags-box"></div>
    <cards></cards>
  </div>
</template>

<script>
import cards from './Cards';
import searchBar from './SearchBar';

export default {
  components: {
    cards,
    searchBar,
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch('getArticles');
    },
  },
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

.cards {
  grid-column: 2;
  user-select: none;
}
</style>
