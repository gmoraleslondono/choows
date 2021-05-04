import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const TV_MAZE_BASE_URL = 'https://api.tvmaze.com';

export const store = new Vuex.Store({
  state: {
    tvShow: null,
    shows: [],
    showSearchList: [],
    favorites: [],
    upcomingEpisodes: [],
  },

  getters: {
    tvShow: (state) => {
      return state.tvShow;
    },
    shows: (state) => {
      return state.shows;
    },
    resultList: (state) => {
      return state.showSearchList;
    },
    favorites: (state) => {
      return state.favorites;
    },
    upcomingEpisodes: (state) => {
      return state.upcomingEpisodes;
    },
  },

  actions: {
    getShowById({ commit }, id) {
      axios.get(`${TV_MAZE_BASE_URL}/shows/${id}`).then((response) => {
        commit('setTvShow', response.data);
      });
    },
    getShows({ commit }) {
      axios.get('https://api.tvmaze.com/shows?page=0').then((response) => {
        console.log('response', response);
        commit('setShows', response.data);
      });
    },
    async getShowsSearchList({ commit, state }, searchText) {
      try {
        await axios
          .get('https://api.tvmaze.com/search/shows?', {
            params: {
              q: searchText,
            },
          })
          .then((response) => {
            // filter shows that contain information
            state.showSearchList = response.data.filter(function (show) {
              return show.show.image !== null;
            });
            commit('setResultSearch', state.showSearchList);
          });
      } catch (error) {
        console.log(error);
      }
    },
    addToFavorites({ commit }, data) {
      commit('setToFavorites', data);
    },
    removeFromFavorites({ commit }, data) {
      commit('removeFromFavorites', data);
    },
    getShowsUpcomingEpisodes({ commit, state }, favorites) {
      const idShowList = favorites.map((show) => show.id);

      console.log('state.favorites', state.favorites);
      console.log('idShowList', idShowList);

      const PromiseArr = [];
      for (let i = 0; i < idShowList.length; i++) {
        PromiseArr.push(
          axios
            .get(`https://api.tvmaze.com/shows/${idShowList[i]}?`, {
              params: {
                embed: 'nextepisode',
                // embed: 'episodes',
              },
            })
            .then((result) => new Promise((resolve) => resolve(result.data)))
        );
      }

      // Promise.all return the response from all the requests once all of them are successful
      Promise.all(PromiseArr).then((res) => {
        console.log('res', res);

        // get tv shows with upcoming episodes
        const showsWithUpcomingEpisodes = res.filter((show) =>
          Boolean(show._embedded)
        );

        // order by date
        const showsOrdered = showsWithUpcomingEpisodes.sort(
          (a, b) =>
            new Date(a._embedded.nextepisode.airdate) -
            new Date(b._embedded.nextepisode.airdate)
        );

        commit('setUpcomingEpisodes', showsOrdered);
      });
    },
  },

  mutations: {
    setTvShow(state, show) {
      state.tvShow = show;
    },
    setShows(state, shows) {
      state.shows = shows;
    },
    setResultSearch(state, data) {
      state.showSearchList = data;
    },
    setToFavorites(state, show) {
      let allFavoritesList = [];

      const localData = JSON.parse(localStorage.getItem('favoritesList'));

      if (localData !== null && localData.length > 0) {
        allFavoritesList = localData;
      }

      allFavoritesList.push(show);

      state.favorites = allFavoritesList;

      // saving favorite list to local storage
      localStorage.setItem(
        'favoritesList',
        JSON.stringify(this.state.favorites)
      );
    },
    removeFromFavorites(state, data) {
      let allFavoritesList = [];

      const localData = JSON.parse(localStorage.getItem('favoritesList'));

      if (localData !== null && localData.length > 0) {
        allFavoritesList = localData;
      }

      state.favorites = allFavoritesList.filter((show) => show.id !== data.id);

      // saving favorite list to local storage
      localStorage.setItem('favoritesList', JSON.stringify(state.favorites));
    },
    setUpcomingEpisodes(state, data) {
      state.upcomingEpisodes = data;
    },
  },
});
