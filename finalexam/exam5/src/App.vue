<template>
  <div id="app">
    <h1>카운터</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Counter,
  },
};
</script>

<style>
div#app {
  text-align: center;
  padding: 30px;
  margin: 30px auto;
  width: 300px;
  border: 1px solid #ccc;
}
</style>