<template>
  <div class="tv-show-details">
    <Header />
    <div class="content">
      <TvShowCard />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import TvShowCard from '../components/TvShowCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'TvShowDetails',
  components: {
    Header,
    Footer,
    TvShowCard,
  },
  beforeMount() {
    this.showId = this.$route.params.id;
    if (this.showId) {
      this.getShowById(this.showId);
    }
  },
  methods: {
    ...mapActions(['getShowById']),
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.tv-show-details {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #8acb88;
}

.content {
  margin-top: 4%;
}
</style>
