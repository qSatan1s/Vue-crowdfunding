<template>
  <div id="app">
    <header__nav />
    <router-view />
    <footer__nav />
  </div>
</template>

<script>
import header__nav from "@/components/header.vue";
import footer__nav from "@/components/footer.vue";
export default {
  components: {
    header__nav,
    footer__nav,
  },
};
</script>

<style>
@import "assets/index.css";
</style>
