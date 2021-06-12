<template>
  <div>{{ time }}</div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  data: function() {
    return { time: null };
  },
  mounted: function() {
    let callback = () => {
      this.time = moment().format("HH:mm:ss");
      console.log(this.time);
    }
    callback();
    this.timerId = setInterval(callback, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timerId);
  }
}
</script>

<style scoped>
div { display: inline-block; font-size: 15pt; padding:3px 12px; border: 1px solid gray; }
</style>