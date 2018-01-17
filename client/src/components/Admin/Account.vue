<template>
  <div class="main">
    <h2>Welcome back, {{$store.state.user.name}}!</h2>
    <button type="submit" @click="goToPost">Post Article!</button>
    <button type="submit" @click="logout">Logout -></button>
  </div>
  
</template>

<script>

export default {
  name: 'account',
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', {});
    },
    goToPost(e) {
      e.preventDefault();
      this.$router.push({
        name: 'PostForm',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: inline-block;
  margin-top: 100px;
  margin-left: 50%;
  padding: 20px;
  width: 400px;
  height: 200px;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
}

button {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 3%;
  border: solid 2px #58B2DC;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #58B2DC
}
</style>
