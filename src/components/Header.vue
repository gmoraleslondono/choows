<template>
  <div class="header">
    <div class="header-content">
      <div>
        <button class="btn-header" @click="goHome()"><h1>Choows</h1></button>
      </div>
      <div class="menu">
        <button class="btn-header border" @click="goHome()">Home</button>
        <button class="btn-header border" @click="goFavorites()">
          Favorites
        </button>
      </div>
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
  justify-content: space-between;
  padding-top: 3%;
}

.btn-header {
  background: transparent;
  border: none;
  margin: 0 40px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.home .btn-header {
  color: black;
}

@media screen and (max-width: 1024px) {
  .header-content {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 10%;
    gap: 5%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn-header {
    margin: 0;
  }

  .border {
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 812px) {
  .header-content {
    width: 90%;
  }

  .btn-header {
    font-size: 1.2rem;
  }
}
</style>
