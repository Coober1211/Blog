<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
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

</style>

