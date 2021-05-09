<template>
  <div class="upcoming">
    <Header />
    <div class="content">
      <div class="link-title">
        <h1 class="link inactive" @click="$router.push('/favorites')">
          My Favorites Shows
        </h1>
        <h1 class="link active">Upcoming Episodes</h1>
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
          <div>
            <span
              >S.{{ tvShow._embedded.nextepisode.season }} E.{{
                tvShow._embedded.nextepisode.number
              }}
              <b>{{ tvShow._embedded.nextepisode.name }}</b></span
            >
            <div>
              <span
                ><b>Date: </b>{{ tvShow._embedded.nextepisode.airdate }}</span
              >
            </div>
            <div>
              <span
                ><b>Time: </b>{{ tvShow._embedded.nextepisode.airtime }}</span
              >
            </div>
            <div>
              <span
                class="summary"
                v-html="tvShow._embedded.nextepisode.summary"
              ></span>
            </div>
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
  name: 'Upcoming',
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

.upcoming {
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

.active {
  border-bottom: 2px solid white;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 1.5rem;
  }

  .link-title {
    margin-bottom: 3%;
  }
}

@media screen and (max-width: 450px) {
  .upcoming {
    padding-bottom: 15%;
  }

  .tv-shows-container {
    width: 100%;
  }

  h1 {
    font-size: 1.3rem;
  }

  .flex-box {
    width: 30%;
  }

  .show-more-info span {
    font-size: 0.8rem;
  }

  .summary {
    display: none;
  }

  .link-title {
    border-bottom: 1px solid white;
    margin-bottom: 10%;
  }

  h1.active {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 320px) {
  h1 {
    font-size: 1rem;
  }
}
</style>
