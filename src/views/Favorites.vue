<template>
  <div class="favorites">
    <Header />
    <div class="content">
      <div class="link-title">
        <h1 class="link active">My Favorites Shows</h1>
        <h1 class="link" @click="goUpcomingEpisodes()">Upcoming Episodes</h1>
      </div>
      <div
        class="tv-shows-container"
        v-for="(tvShow, index) in list"
        :key="index"
      >
        <div class="flex-box">
          <img
            class="show-cover link"
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
        <div class="show-info">
          <h1 class="title link" @click="showDetails(tvShow)">
            <u>{{ tvShow.name }}</u>
          </h1>
          <div class="show-more-info">
            <div>
              <h4>Rating:</h4>
              <span>
                {{ tvShow.rating.average || 'Unknown' }}
              </span>
            </div>
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
        path: `/show/${selectedShow.id}`,
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

.show-info h4 {
  display: inline-block;
}

.show-cover {
  width: 210px;
  height: 295px;
}

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

.active {
  border-bottom: 2px solid white;
}

@media screen and (max-width: 1024px) {
  .summary {
    display: none;
  }

  h1 {
    font-size: 1.5rem;
  }

  .link-title {
    margin-bottom: 3%;
  }
}

@media screen and (max-width: 450px) {
  .favorites {
    padding-bottom: 15%;
  }

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

  .link-title {
    border-bottom: 1px solid white;
    margin-bottom: 10%;
  }

  h1.active {
    margin-bottom: 0;
  }

  h1 {
    width: 50%;
    padding: 0 2%;
    font-size: 1.3rem;
  }

  .show-more-info span {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 320px) {
  h1 {
    font-size: 1rem;
  }
}
</style>
