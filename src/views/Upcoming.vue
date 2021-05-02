<template>
  <div class="upcoming-episodes">
    <Header />
    <div class="content">
      <div class="link-title">
        <h1 class="link" @click="$router.push('/favorites')">
          My Favorites Shows
        </h1>
        <h1 class="link"><u>Upcoming Episodes</u></h1>
      </div>
      <div
        class="tv-shows-container"
        v-for="(tvShow, index) in list"
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
        </div>
        <div class="show-more-info">
          <h1 class="title">{{ tvShow.name }}</h1>
          <div class="flex-box">
            <span
              >S.{{ tvShow._embedded.nextepisode.season }} E.{{
                tvShow._embedded.nextepisode.number
              }}
              {{ tvShow._embedded.nextepisode.name }}</span
            >
            <span>Date: {{ tvShow._embedded.nextepisode.airdate }}</span>
            <span> Time: {{ tvShow._embedded.nextepisode.airtime }}</span>
            <span v-html="tvShow._embedded.nextepisode.summary"></span>
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
import { mapGetters } from 'vuex';

export default {
  name: 'UpcomingEpisodes',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = this.upcomingEpisodes;
  },
  computed: {
    ...mapGetters(['upcomingEpisodes']),
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.upcoming-episodes {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #8acb88;
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
</style>
