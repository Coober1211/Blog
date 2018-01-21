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
  created() {
    const token = window.localStorage.getItem('access_token');
    if (token === 'null') return;
    const user = {
      name: window.localStorage.getItem('userName'),
      email: window.localStorage.getItem('userEmail'),
    };
    this.$store.dispatch('setToken', token);
    this.$store.dispatch('setUser', user);
  },
};
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>

