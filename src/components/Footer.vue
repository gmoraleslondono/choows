<template>
  <div class="footer">
    <p>By Gloria Morales 2021</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style>
@import '../styles/global-styles.css';

.footer {
  width: 100%;
  margin: 0 auto;
  background-color: #121212;
  font-size: 1rem;
  text-align: center;
  padding: 1%;
  position: fixed;
  bottom: 0;
  color: white;
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 5%;
  }
}
</style>
