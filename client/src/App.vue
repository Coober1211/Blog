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
    this.checkUser();
  },
  methods: {
    checkUser() {
      const token = window.localStorage.getItem('access_token');
      const loginTime = window.localStorage.getItem('loginTime');
      const time = Math.abs(new Date().getHours() - parseInt(loginTime, 10));
      if (token === 'null') return;
      if (time > 3) {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', {});
        this.$store.dispatch('setLoginTime', null);
      } else {
        const user = {
          name: window.localStorage.getItem('userName'),
          email: window.localStorage.getItem('userEmail'),
        };
        this.$store.dispatch('setToken', token);
        this.$store.dispatch('setUser', user);
        this.$store.dispatch('setLoginTime', loginTime);
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>

