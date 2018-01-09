import Vue from 'vue';
import Router from 'vue-router';
import Articles from '@/components/Articles';
import LoginForm from '@/components/LoginForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/articles',
      name: 'Articles',
      component: Articles,
    },
    {
      path: '/admin',
      name: 'LoginForm',
      component: LoginForm,
    },
  ],
  mode: 'history',
});
