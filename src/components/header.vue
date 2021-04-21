<template>
  <div class="header">
    <div class="header-content">
      <button @click="goHome()">Home</button>
      <button @click="goFavorites()">My Favorite shows</button>
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
      console.log('go home');
      this.$router.push('/');
    },
    goFavorites() {
      console.log('go favorites');
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

button {
  background: transparent;
  border: none;
  margin: 20px;
  font-size: 28px;
  color: white;
  cursor: pointer;
}
</style>
