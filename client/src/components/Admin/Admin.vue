<template>
  <div class="main">
    <account v-if="$store.state.isUserLoggedIn"></account>
    <login-form v-else></login-form>
  </div>
</template>

<script>
import loginForm from './LoginForm';
import account from './Account';

export default {
  name: 'admin',
  components: {
    loginForm,
    account,
  },
};
</script>
