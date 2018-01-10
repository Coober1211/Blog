import Vue from 'vue';
import Router from 'vue-router';
import Articles from '@/components/Articles/Articles';
import Homepage from '@/components/Homepage/Homepage';
import LoginForm from '@/components/LoginForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
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
