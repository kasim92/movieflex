<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer class="mx-auto my-10" dark padless color="black">
      <strong class="red--text"> شاشتي</strong>
      <span class="mx-2">حقوق النشر © {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, #000000) !important;
}
</style>
