<template>
  <div class="tv-show-card">
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
</template>

<script>
import Button from './Button.vue';
import { mapGetters } from 'vuex';

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
    this.$store.dispatch('setCurrentShow', this.tvShow);
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
