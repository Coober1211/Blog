import Vue from 'vue';
import Vuex from 'vuex';
import articleService from '@/services/AticleService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    loginTime: null,
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
    setLoginTime(state, loginTime) {
      state.loginTime = loginTime;
      window.localStorage.setItem('loginTime', loginTime);
    },
    setArticles(state, response) {
      state.articles = response.data.articles;
      // eslint-disable-next-line
      console.log(state.articles);
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setLoginTime({ commit }, loginTime) {
      commit('setLoginTime', loginTime);
    },
    getArticles({ commit }) {
      return new Promise((reslove, reject) => {
        articleService.getArticles().then((response) => {
          commit('setArticles', response);
          reslove();
        }, (error) => {
          reject(error);
        });
      });
    },
  },
});
