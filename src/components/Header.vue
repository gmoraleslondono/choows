<template>
  <div class="header">
    <div class="header-content">
      <button class="btn-header" @click="goHome()">Home</button>
      <button class="btn-header" @click="goFavorites()">
        My Favorite shows
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goFavorites() {
      this.$router.push('/favorites');
    },
  },
};
</script>

<style>
@import '../styles/global-styles.css';

.header {
  width: 100%;
  margin: 0 auto;
}

.header-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 3%;
}

.btn-header {
  background: transparent;
  border: none;
  margin: 0 20px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 450px) {
  .header-content {
    width: 81%;
  }

  .btn-header {
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 1.2rem;
  }
}
</style>
