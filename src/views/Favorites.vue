<template>
  <div class="favorites">
    <Header />
    <div class="content">
      <h1>My Favorites Shows</h1>
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
          <Button
            :text="'Remove'"
            @click="removeFavorite(tvShow)"
            style="width: 80%"
          />
        </div>
        <div>
          <h1 class="title link" @click="showDetails(tvShow)">
            <u>{{ tvShow.name }}</u>
          </h1>
          <div class="show-more-info">
            <span>Rating: {{ tvShow.rating.average }}</span>
            <span style="display: flex">
              Genres:
              <div class="genre-list">
                <div
                  v-for="(genre, index) in tvShow.genres"
                  :key="index"
                  style="margin-right: 5px"
                >
                  {{ genre }}
                </div>
              </div>
            </span>
            <span>Summary: <span v-html="tvShow.summary"></span></span>
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
      if (this.favorites && this.favorites.length > 0) {
        return this.favorites;
      } else if (localStorage.getItem('favoritesList')) {
        return JSON.parse(localStorage.getItem('favoritesList'));
      }
      return [];
    },
  },
  methods: {
    ...mapActions(['removeFromFavorites']),
    removeFavorite(tvShow) {
      this.removeFromFavorites(tvShow);
    },
    showDetails(selectedShow) {
      this.$router.push({
        name: 'tvShowDetails',
        path: '/show',
        params: { selectedShow: selectedShow },
      });
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
}

.content {
  width: 80%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin: 4% 0;
}

.tv-shows-container {
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 5%;
}

.flex-box {
  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 30px;
}
</style>
