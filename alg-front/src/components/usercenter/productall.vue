<template>
  <div>
    <h1>product</h1>
    <button @click="aaa">111</button>
  </div>
</template>

<script>
export default {
  props: ["prodArr"],
  mounted() {
    console.log(this.prodArr);
  },
  methods: {
    aaa() {
      console.log(this);
      console.log(this.query);
    },
  },
};
</script>

<style>
</style>