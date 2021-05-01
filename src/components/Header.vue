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
  color: white;
  cursor: pointer;
}
</style>
