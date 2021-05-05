<template>
  <div>
    <div v-if="!tvShow">Loading...</div>
    <div v-else class="tv-show-card">
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
            v-if="isFavorite(tvShow.id)"
            :text="'Remove favorite'"
            @click="removeFavorite(tvShow)"
          />
          <Button
            v-else
            :text="'Add favorites'"
            @click="addFavorites(tvShow)"
          />
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
          <div>
            <h3>Schedule:</h3>
            <span>
              {{ tvShow.schedule.days.join(', ') }} at
              {{ tvShow.schedule.time }}
            </span>
          </div>
          <div>
            <h3>Genres:</h3>
            <span>{{ tvShow.genres.join(', ') }}</span>
          </div>
          <div>
            <h3>Summary:</h3>
            <span v-html="tvShow.summary"></span>
          </div>
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
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['tvShow', 'checkFavoriteById']),
  },
  methods: {
    ...mapActions(['addToFavorites', 'removeFromFavorites']),
    addFavorites(selectedShow) {
      this.addToFavorites(selectedShow);
    },
    isFavorite(id) {
      return this.checkFavoriteById(id);
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
  padding-bottom: 5%;
}

.flex-box {
  display: flex;
  flex-direction: column;
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
}

.show-info-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    margin-top: 5%;
  }

  .show-info-details {
    gap: 10px;
    font-size: 1rem;
  }
}
</style>
