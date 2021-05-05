import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const TV_MAZE_BASE_URL = 'https://api.tvmaze.com';

export const store = new Vuex.Store({
  state: {
    tvShow: {},
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
    checkFavoriteById: (state) => (id) => {
      let allFavoritesList = [];

      const localData = JSON.parse(localStorage.getItem('favoritesList'));

      // if the state.favorite is empty take favorites from local storage, in other case favorites list is empty
      if (state.favorites.length > 0) {
        allFavoritesList = state.favorites;
      } else if (localData) {
        allFavoritesList = localData;
      }

      // check if show from the search are in the favorite list
      const isFavoriteShow = allFavoritesList.filter(function (element) {
        return element.id === id;
      });

      if (isFavoriteShow && isFavoriteShow.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },

  actions: {
    getShowById({ commit }, id) {
      axios
        .get(`${TV_MAZE_BASE_URL}/shows/${id}`)
        .then((response) => {
          commit('setTvShow', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getShows({ commit }) {
      axios
        .get(`${TV_MAZE_BASE_URL}/shows?page=0`)
        .then((response) => {
          commit('setShows', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getShowsSearchList({ commit }, searchText) {
      try {
        const response = await axios.get(`${TV_MAZE_BASE_URL}/search/shows?`, {
          params: {
            q: searchText.trim(),
          },
        });
        commit('setResultSearch', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    addToFavorites({ commit }, data) {
      commit('setToFavorites', data);
    },
    removeFromFavorites({ commit }, data) {
      commit('removeFromFavorites', data);
    },
    getShowsUpcomingEpisodes({ commit }, favorites) {
      // create an array with favorite shows ids
      const idShowList = favorites.map((show) => show.id);

      // make one by one request and save it in PromiseArr
      const PromiseArr = [];
      for (let i = 0; i < idShowList.length; i++) {
        PromiseArr.push(
          axios
            .get(`${TV_MAZE_BASE_URL}/shows/${idShowList[i]}?`, {
              params: {
                embed: 'nextepisode',
                // embed: 'episodes',
              },
            })
            .then((result) => new Promise((resolve) => resolve(result.data)))
        );
      }

      // Promise.all return the response from all the requests once all of them are successful
      Promise.all(PromiseArr)
        .then((res) => {
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
        })
        .catch((error) => {
          console.error(error);
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
