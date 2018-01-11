import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: {},
    isUserLoggedIn: false,
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
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});
