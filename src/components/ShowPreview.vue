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
      <button class="btn-show-preview" @click="showPopup()">See more</button>
      <button class="btn-show-preview" @click="addFavorites()">
        Add favorites
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPreview',
  data() {
    return {
      showImage: require('@/assets/tv_series_placeholder.jpg'),
      showName: 'show name',
      showRating: 'show rating',
      showGenres: ['drama', 'adventure'],
    };
  },
  methods: {
    showPopup() {
      console.log('show popup');
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
}

.btn-show-preview {
  width: 48%;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  border: none;
}

.genre-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
