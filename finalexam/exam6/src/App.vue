<template>
  <div id="app">
    <h1>컴포넌트</h1>
    <input v-model="cnt" />
    <Child v-bind:num="cnt" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  data() {
    return {
      cnt: 3,
    };
  },
  components: {
    Child,
  },
};
</script>