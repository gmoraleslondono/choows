<template>
  <div class="favorites">
    <Header />
    <div class="content">
      <div class="link-title">
        <h1 class="link"><u>My Favorites Shows</u></h1>
        <h1 class="link" @click="goUpcomingEpisodes()">Upcoming Episodes</h1>
      </div>
      <div
        class="tv-shows-container"
        v-for="(tvShow, index) in list"
        :key="index"
      >
        <div class="flex-box">
          <img
            class="link"
            :src="`${
              tvShow.image
                ? tvShow.image.medium
                : require('@/assets/no-image-placeholder.jpg')
            }`"
            alt="TV show image"
            @click="showDetails(tvShow)"
          />
          <Button :text="'Remove'" @click="removeFavorite(tvShow)" />
        </div>
        <div>
          <h1 class="title link" @click="showDetails(tvShow)">
            <u>{{ tvShow.name }}</u>
          </h1>
          <div class="show-more-info">
            <span><b>Rating: </b>{{ tvShow.rating.average }}</span>
            <span style="display: flex">
              <b>Schedule:</b>
              <div class="genre-list">
                <div
                  v-for="(day, index) in tvShow.schedule.days"
                  :key="index"
                  style="margin-right: 5px"
                >
                  {{ day }}, {{ tvShow.schedule.time }}
                </div>
              </div>
            </span>
            <span class="summary">
              <b>Summary: </b><span v-html="tvShow.summary"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Button from '../components/Button.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Favorites',
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['favorites']),
    list() {
      // if favorites in the store is empty get favorites from store
      if (this.favorites && this.favorites.length > 0) {
        return this.favorites;
      } else if (localStorage.getItem('favoritesList')) {
        return JSON.parse(localStorage.getItem('favoritesList'));
      }
      return [];
    },
  },
  mounted() {
    this.getUpcomingEpisodes();
  },
  methods: {
    ...mapActions(['removeFromFavorites', 'getShowsUpcomingEpisodes']),
    removeFavorite(tvShow) {
      this.removeFromFavorites(tvShow);
      this.getUpcomingEpisodes();
    },
    showDetails(selectedShow) {
      this.$router.push({
        name: 'tvShowDetails',
        path: '/show',
        params: { selectedShow: selectedShow },
      });
    },
    getUpcomingEpisodes() {
      // if favorites in the store is empty get favorites from store
      if (this.favorites && this.favorites.length > 0) {
        this.getShowsUpcomingEpisodes(this.favorites);
      } else if (localStorage.getItem('favoritesList')) {
        this.getShowsUpcomingEpisodes(
          JSON.parse(localStorage.getItem('favoritesList'))
        );
      }
    },
    goUpcomingEpisodes() {
      this.getUpcomingEpisodes();
      this.$router.push('/upcoming');
    },
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.favorites {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #00b2ff;
  padding-bottom: 5%;
}

.content {
  width: 80%;
  margin: 0 auto;
}

.link-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5% 0;
}

h1 {
  text-align: center;
  margin: 4% 0;
}

.tv-shows-container {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin-bottom: 3%;
}

.flex-box {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: left;
  margin: 0 0 3%;
}

.show-more-info span {
  line-height: normal;
}

.standard-button {
  width: 80%;
}

@media screen and (max-width: 1024px) {
  .summary {
    display: none;
  }

  h1 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 450px) {
  .tv-shows-container {
    width: 100%;
  }

  .flex-box {
    width: 30%;
  }

  .standard-button {
    font-size: 1rem;
    width: 100%;
  }

  h1 {
    margin: 5% 0 10%;
    font-size: 1rem;
  }

  .title {
    font-size: 1.3rem;
  }

  .show-more-info span {
    font-size: 0.9rem;
  }

  .link-title {
    color: black;
  }
}
</style>
