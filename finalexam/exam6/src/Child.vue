<template>
  <div class="yellowbox">
    <span v-for="i in parseInt(num)" :key="i">
      {{ i }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style>
div#app {
  padding: 0 30px 30px 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
span {
  display: inline-block;
  margin: 5px;
  padding: 8px 15px;
  border: 1px solid black;
}
.yellowbox {
  margin-top: 10px;
  padding: 10px;
  background-color: #ffa;
  border: 1px solid black;
}
</style>