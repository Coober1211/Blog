<template>
  <div class="login-form">
    <h1>Login!</h1>
    <form action="POST">
      <label for="email">Email</label>
      <br>
      <input type="email" name="email" id="email" v-model="email" placeholder="test@mail.com">
      <br>
      <label for="password">Password</label>
      <br>
      <input type="password" name="password" id="password" v-model="password" placeholder="secret">
      <br>
      <button type="submit" @click="login">Login -></button>
      <br>
      <div class="error">{{error}}</div>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  name: 'loginForm',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      error: '',
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
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$store.dispatch('setLoginTime', response.data.loginTime);
        this.$router.push({
          name: 'Homepage',
        });
      } catch (error) {
        this.error = error.response.data.error;
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
  padding: 20px;
  width: 400px;
  height: 400px;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
}
input {
  border: none;
  border-bottom: 2px solid #58B2DC;
  margin-bottom: 20px;
  width: 300px;
  height: 30px;
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
.error {
  color: #CB4042;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-25%);
}
</style>

