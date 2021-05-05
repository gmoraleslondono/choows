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
      <div v-if="searchDidHappen && resultList.length === 0">
        Your search did not match any show.
      </div>
      <div
        v-else
        v-for="(result, index) in resultList"
        :key="index"
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
          @click="showDetails(result.show)"
        />
        <div class="content">
          <h3 class="link" @click="showDetails(result.show)">
            <u>{{ result.show.name }}</u>
          </h3>
          <span>Rating: {{ result.show.rating.average || 'Unknown' }}</span>
        </div>
        <div class="button-container">
          <Button
            v-if="isFavorite(result.show.id)"
            :text="'Remove favorite'"
            @click="removeFavorite(result.show)"
          />
          <Button
            v-else
            :text="'Add favorites'"
            @click="addFavorites(result.show)"
          />
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
    const initialSearch = this.$route.query.search;

    return {
      showName: initialSearch || '',
      searchDidHappen: false,
    };
  },
  computed: {
    ...mapGetters(['resultList', 'checkFavoriteById']),
  },
  mounted() {
    this.search();
  },
  watch: {
    showName: function (newShowName, oldShowname) {
      if (newShowName.trim() !== oldShowname.trim()) {
        this.$router.push({
          query: { search: newShowName.trim() || undefined },
        });
      }
    },
  },
  methods: {
    ...mapActions([
      'getShowsSearchList',
      'addToFavorites',
      'removeFromFavorites',
    ]),
    async search() {
      if (this.showName) {
        await this.getShowsSearchList(this.showName);
        this.searchDidHappen = true;
      }
    },
    showDetails(selectedShow) {
      this.$router.push({
        path: `/show/${selectedShow.id}`,
      });
    },
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

.home {
  width: 100%;
  margin: 0 auto;
  background-color: orange;
  min-height: 100vh;
}

.search-container {
  width: 60%;
  margin: 4% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

input {
  width: 60%;
  font-size: 1.3rem;
}

.btn-search {
  width: 30%;
  font-size: 1.3rem;
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
  align-items: baseline;
  padding-bottom: 5%;
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
  margin: 5% 0;
}

.button-container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

img {
  min-height: 295px;
}

@media screen and (max-width: 1024px) {
  .show-preview {
    width: 30%;
  }
}

@media screen and (max-width: 767px) {
  .show-preview {
    width: 45%;
  }
}

@media screen and (max-width: 450px) {
  .search-container {
    width: 100%;
    margin: 5% 0;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .search-container input {
    width: 90%;
  }

  .search-container .btn-search {
    width: 40%;
  }

  .show-preview {
    width: 80%;
    margin-bottom: 15%;
  }

  input,
  .btn-search {
    font-size: 1.3rem;
  }
}
</style>
