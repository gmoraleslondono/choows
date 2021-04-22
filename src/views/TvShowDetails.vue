<template>
  <div class="tv-show-details">
    <Header />
    <TvShowCard :btnType="'favorites'" />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import TvShowCard from '../components/TvShowCard.vue';

export default {
  name: 'TvShowDetails',
  components: {
    Header,
    Footer,
    TvShowCard,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.tv-show-details {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #8acb88;
}
</style>
