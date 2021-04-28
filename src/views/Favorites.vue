<template>
  <div class="favorites">
    <Header />
    <div class="content">
      <h1>My Favorites Shows</h1>
      <div
        class="tv-shows-container"
        v-for="(tvShow, index) in showList"
        :key="index"
      >
        <div class="flex-box">
          <img
            :src="`${
              tvShow.image
                ? tvShow.image.medium
                : require('@/assets/no-image-placeholder.jpg')
            }`"
            alt="TV show image"
          />
          <Button
            :text="'Remove'"
            @click="removeFavorites()"
            style="width: 80%"
          />
        </div>
        <div>
          <h1 class="title">{{ tvShow.name }}</h1>
          <div>
            <span>Rating: {{ tvShow.rating.average }}</span>
            <span>Type: {{ tvShow.type }}</span>
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
import { mapGetters } from 'vuex';

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
    showList() {
      return JSON.parse(localStorage.getItem('favoritesList'));
    },
  },
  methods: {
    removeFavorite() {
      console.log('remove from favorites');
    },
  },
};
</script>

<style scoped>
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
  margin: 5% 0;
  color: white;
}

.tv-shows-container {
  width: 80%;
  margin: 0 auto;
  color: white;
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
