<template>
  <div class="tv-show-card">
    <div class="flex-box">
      <img
        class="show-image"
        :src="`${
          tvShow.image
            ? tvShow.image.medium
            : require('@/assets/no-image-placeholder.jpg')
        }`"
        alt="TV show image"
      />
      <div class="button-container">
        <Button
          v-if="favorites && isFavorite(tvShow)"
          :text="'Remove favorite'"
          @click="removeFavorite(tvShow)"
        />
        <Button v-else :text="'Add favorites'" @click="addFavorites(tvShow)" />
      </div>
    </div>
    <div class="show-info">
      <h1 class="title">{{ tvShow.name }}</h1>
      <div class="show-info-details">
        <div>
          <h3>Rating:</h3>
          <span>{{ tvShow.rating.average }}</span>
        </div>
        <div>
          <h3>Type:</h3>
          <span>{{ tvShow.type }}</span>
        </div>
        <div>
          <h3>Language:</h3>
          <span>{{ tvShow.language }}</span>
        </div>
        <div>
          <h3>Premiered:</h3>
          <span>{{ tvShow.premiered }}</span>
        </div>
        <div>
          <h3>Status:</h3>
          <span>{{ tvShow.status }}</span>
        </div>
        <div style="display: flex">
          <h3>Genres:</h3>
          <div class="genre-list">
            <div
              v-for="(genre, index) in tvShow.genres"
              :key="index"
              style="margin-right: 5px"
            >
              <span>{{ genre }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Summary:</h3>
          <span v-html="tvShow.summary"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TvShowCard',
  props: ['btnType', 'tvShowDetails'],
  components: {
    Button,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentShow: 'currentShow',
      favorites: 'favorites',
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
  async mounted() {
    await this.$store.dispatch('setCurrentShow', this.tvShow);
  },
  methods: {
    ...mapActions(['addToFavorites', 'removeFromFavorites']),
    addFavorites(selectedShow) {
      this.addToFavorites(selectedShow);
    },
    isFavorite(show) {
      const result = this.favorites.filter((element) => element.id === show.id);
      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    removeFavorite(selectedShow) {
      this.removeFromFavorites(selectedShow);
    },
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.tv-show-card {
  width: 60%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 5%;
}

.flex-box {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.show-image {
  width: 100%;
}

.title {
  margin-bottom: 30px;
}

.show-info {
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
}

.show-info-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.show-info h3 {
  display: inline-block;
}

.show-info span {
  line-height: 1.3;
  margin-left: 10px;
}

@media screen and (max-width: 1024px) {
  .tv-show-card {
    width: 90%;
  }
}

@media screen and (max-width: 450px) {
  .content {
    margin-top: 15%;
  }

  .tv-show-card {
    flex-direction: column;
    width: 85%;
    padding-bottom: 20%;
  }

  .flex-box {
    width: 75%;
    margin: 0 auto;
  }

  .show-info {
    width: 100%;
  }

  .title {
    text-align: center;
    font-size: 2rem;
  }

  .show-info-details {
    gap: 10px;
    font-size: 1rem;
  }
}
</style>
