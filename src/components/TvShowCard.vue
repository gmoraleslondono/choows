<template>
  <div class="tv-show-card">
    <div class="flex-box">
      <img :src="`${showImage}`" alt="TV show image" />
      <Button
        v-if="btnType === 'favorites'"
        :text="'Add favorites'"
        @click="addFavorites()"
        style="width: 80%"
      />
      <Button
        v-else-if="btnType === 'remove'"
        :text="'Remove'"
        @click="removeFavorites()"
        style="width: 80%"
      />
    </div>
    <div>
      <h1 class="title">{{ showName }}</h1>
      <div>
        <span>Rating: {{ showRating }}</span>
        <span style="display: flex">
          Genres:
          <div class="genre-list">
            <div
              v-for="(genre, index) in showGenres"
              :key="index"
              style="margin-right: 5px"
            >
              {{ genre }}
            </div>
          </div>
        </span>
        <span>Summary: {{ showSummary }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'TvShowCard',
  props: {
    btnType: String,
  },
  components: {
    Button,
  },
  data() {
    return {
      showImage: require('@/assets/tv_series_placeholder.jpg'),
      showName: 'show name',
      showRating: 'show rating',
      showGenres: ['drama', 'adventure'],
      showSummary: 'Here the TV show summary.',
    };
  },
  methods: {
    addFavorites() {
      console.log('Add to favorites');
    },
    removeFavorites() {
      console.log('Remove favorites');
    },
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.tv-show-card {
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
