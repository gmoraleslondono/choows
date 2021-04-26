<template>
  <div class="tv-show-details">
    <Header />
    <TvShowCard :btnType="'favorites'" :tvShowDetails="tvShow" />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import TvShowCard from '../components/TvShowCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TvShowDetails',
  components: {
    Header,
    Footer,
    TvShowCard,
  },
  data() {
    return {
      tvShow: null,
    };
  },
  computed: {
    ...mapGetters({
      currentShow: 'currentShow',
    }),
  },
  beforeMount() {
    this.tvShow = this.$route.params.selectedShow;
    if (this.tvShow) {
      this.$store.dispatch('setCurrentShow', this.tvShow);
    } else {
      this.tvShow = this.currentShow;
    }
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
