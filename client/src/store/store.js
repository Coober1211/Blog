import Vue from 'vue';
import Vuex from 'vuex';
import articleService from '@/services/AticleService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: {},
    isUserLoggedIn: false,
    articles: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
      window.localStorage.setItem('access_token', token);
    },
    setUser(state, user) {
      state.user = user;
      window.localStorage.setItem('userName', user.name);
      window.localStorage.setItem('userEmail', user.email);
    },
    async getArticles(state) {
      try {
        const response = await articleService.getArticles();
        state.articles = response.data.articles;
        // eslint-disable-next-line
        console.log(state.articles);
      } catch (err) {
        this.error = err;
      }
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    getArticles({ commit }) {
      commit('getArticles');
    },
  },
});
