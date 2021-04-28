import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    shows: [],
    showSearchList: [],
    currentShow: null,
  },

  getters: {
    items: (state) => {
      return state.shows;
    },
    resultList: (state) => {
      return state.showSearchList;
    },
    currentShow: (state) => {
      return state.currentShow;
    },
  },

  actions: {
    getShows({ commit }) {
      axios.get('https://api.tvmaze.com/shows?page=0').then((response) => {
        console.log('response', response);
        commit('setShows', response.data);
      });
    },
    async getShowsSearchList({ commit, state }, searchText) {
      try {
        await axios
          .get('http://api.tvmaze.com/search/shows?', {
            params: {
              q: searchText,
            },
          })
          .then((response) => {
            console.log('result  by search', response.data);
            state.showSearchList = response.data.filter(function (show) {
              return show.show.image !== null;
            });
            commit('setResultSearch', state.showSearchList);
          });
      } catch (error) {
        console.log(error);
      }
    },
    setCurrentShow: ({ commit }, data) => {
      commit('setCurrentShow', data);
    },
  },

  mutations: {
    setShows(state, shows) {
      state.shows = shows;
    },
    setResultSearch(state, data) {
      state.error = false;
      state.showSearchList = data;
    },
    setCurrentShow: (state, data) => {
      state.currentShow = data;
    },
  },
});
