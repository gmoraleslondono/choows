<template>
  <div class="home">
    <Header />
    <div class="search-container">
      <input
        v-model="showName"
        placeholder="Search TV Show"
        class="form-search"
        type="search"
        name="search-input"
        id="search-input"
        @keypress.enter="search()"
      />
      <button class="btn-search form-search" @click="search()">Search</button>
    </div>
    <div class="show-cards-container">
      <div
        v-for="result in resultList"
        :key="result.show.id"
        class="show-preview"
      >
        <img
          class="link"
          :src="`${
            result.show.image
              ? result.show.image.medium
              : require('@/assets/no-image-placeholder.jpg')
          }`"
          alt="TV show image"
          @click="showDetails()"
        />
        <div class="content">
          <h3 class="link" @click="showDetails()">
            <u>{{ result.show.name }}</u>
          </h3>
          <span>Rating: {{ result.show.rating.average }}</span>
        </div>
        <div class="button-container">
          <Button :text="'Add favorites'" @click="addFavorites()" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Button from '../components/Button.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {
      showName: '',
    };
  },
  computed: {
    ...mapGetters(['resultList']),
  },
  methods: {
    ...mapActions(['getShowsSearchList']),
    search() {
      const userInput = this.showName;
      this.getShowsSearchList(userInput);
      this.showName = '';
    },
    showDetails() {
      this.$router.push('/tvShowDetails');
    },
    addFavorites() {
      console.log('add favorites');
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  margin: 0 auto;
  background-color: orange;
  min-height: 100vh;
}

.search-container {
  width: 60%;
  margin: 5% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input {
  width: 60%;
  font-size: 24px;
}

.btn-search {
  width: 30%;
  font-size: 24px;
}

.form-search {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  border: none;
}

.show-cards-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
}

.show-preview {
  width: 20%;
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

.button-container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

img {
  height: 295px;
}

.link {
  cursor: pointer;
}
</style>
