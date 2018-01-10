<template>
  <div id="app">
    <header-nav></header-nav>    
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import headerNav from './components/Header';

export default {
  name: 'app',
  components: {
    headerNav,
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background-color: #ddd;
}
.wrapper {
  min-height: 90vh;
  margin-top: 10vh;
}
</style>

