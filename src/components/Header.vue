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
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 30px;
    width: 100%;
  }

  .btn-header {
    margin: 0;
  }
}

@media screen and (max-width: 767px) {
  .header-content {
    flex-direction: column;
    align-items: center;
  }

  .btn-header {
    font-size: 1.2rem;
    margin: 0;
  }

  .menu {
    margin-top: 10%;
    justify-content: space-between;
    gap: 0px;
  }

  .border {
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 10px;
    width: 40%;
  }
}
</style>
