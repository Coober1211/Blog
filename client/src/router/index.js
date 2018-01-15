import Vue from 'vue';
import Router from 'vue-router';
import Articles from '@/components/Articles/Articles';
import Post from '@/components/Post/Post';
import PostForm from '@/components/Post/PostForm';
import Homepage from '@/components/Homepage/Homepage';
import Admin from '@/components/Admin/Admin';

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
      path: '/articles/:slug',
      name: 'Post',
      component: Post,
    },
    {
      path: '/postform',
      name: 'PostForm',
      component: PostForm,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
  mode: 'history',
});
