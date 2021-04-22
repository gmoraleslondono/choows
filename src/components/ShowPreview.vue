<template>
  <div class="show-preview">
    <img :src="`${showImage}`" alt="TV show image" />
    <div class="content">
      <span>Name: {{ showName }}</span>
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
    </div>
    <div class="buttons">
      <Button :text="'See more'" @click="showDetails()" style="width: 50%" />
      <Button
        :text="'Add favorites'"
        @click="addFavorites()"
        style="width: 50%"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'ShowPreview',
  components: {
    Button,
  },
  data() {
    return {
      showImage: require('@/assets/tv_series_placeholder.jpg'),
      showName: 'show name',
      showRating: 'show rating',
      showGenres: ['drama', 'adventure'],
    };
  },
  methods: {
    showDetails() {
      this.$router.push('/tvShowDetails');
    },
    addFavorites() {
      console.log('add favorites');
    },
  },
};
</script>

<style>
.show-preview {
  width: 25%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
}

.content {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: white;
  margin: 5% 0;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3%;
}
</style>
