<template>
  <div class="favorites">
    <Header />
    <div class="content">
      <h1>My Favorites Shows</h1>
      <TvShowCard :btnType="'remove'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import TvShowCard from '../components/TvShowCard.vue';

export default {
  name: 'Favorites',
  components: {
    Header,
    Footer,
    TvShowCard,
  },
  data() {
    return {};
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
}
</style>
