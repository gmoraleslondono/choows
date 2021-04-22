<template>
  <div class="home">
    <Header />
    <div class="search-container">
      <input
        v-model="showTitle"
        type="text"
        placeholder="Search TV Show"
        class="form-search"
      />
      <button class="btn-search form-search" @click="search()">Search</button>
    </div>
    <div class="show-cards-container">
      <ShowPreview />
      <ShowPreview />
      <ShowPreview />
      <ShowPreview />
      <ShowPreview />
      <ShowPreview />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import ShowPreview from '../components/ShowPreview.vue';

export default {
  name: 'Home',
  components: {
    Header,
    ShowPreview,
    Footer,
  },
  data() {
    return {
      showTitle: '',
    };
  },
  methods: {
    search() {
      console.log('search');
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  margin: 0 auto;
  background-color: orange;
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
</style>
