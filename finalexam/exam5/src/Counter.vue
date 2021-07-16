<template>
  <div>
    <div id="time">{{ time }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return { time: 0, running: false };
  },
  mounted: function() {
    this.start();
  },
  methods: {
    start() {
      let callback = () => {
        this.time = this.time + 1;
      };
      setInterval(callback, 1000);
    },
  },
};
</script>

<style>
div#time {
  background: #ffa;
  width: 150px;
  border: 1px solid black;
  font-size: 25pt;
  padding: 5px;
  margin: 0px auto;
}
</style>