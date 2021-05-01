<template>
  <div class="upcoming-episodes">
    <Header />
    <div class="content">
      <div class="link-title">
        <h1 @click="$router.push('/favorites')">My Favorites Shows</h1>
        <h1><u>Upcoming Episodes</u></h1>
      </div>
      <div class="tv-shows-container">
        <img
          :src="`${require('@/assets/no-image-placeholder.jpg')}`"
          alt="TV show image"
        />
        <div class="show-more-info">
          <h1 class="title">{{ 'tvShow.name' }}</h1>
          <div class="flex-box">
            <span
              >S.{{ 'tvShow.season' }} E.{{ 'tvShow.episode' }}
              {{ 'tvShow.episodeName' }}</span
            >
            <span>{{ 'Monday, 30 Apr 2021' }}</span>
            <span>{{ '20:00' }}</span>
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
  cursor: pointer;
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
