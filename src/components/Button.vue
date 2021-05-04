<template>
  <div class="standard-button" @click="clickevent()">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    clickevent() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
@import '../styles/global-styles.css';

.standard-button {
  background-color: white;
  color: black;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  width: 100%;
  margin: 20px auto;
  font-size: 1rem;
  cursor: pointer;
}
</style>
