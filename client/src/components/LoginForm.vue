<template>
  <div class="login-form">
    <form action="POST">
      <input type="email" name="email" id="email" v-model="email">
      <br>
      <input type="password" name="password" id="password" v-model="password">
      <br>
      <button type="submit" @click="login">Login!</button>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password,
        });
        // eslint-disable-next-line
        console.log(response);
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  display: inline-block;
  margin-top: 100px;
  margin-left: 50%;
  transform: translateX(-50%);

}
</style>

