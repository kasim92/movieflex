<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer class="mx-auto my-10" dark padless color="black">
      <span>copyright © {{ new Date().getFullYear() }}</span>
      <strong class="red--text"> Shashety</strong>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.theme--dark.v-application {
  background-color: var(--v-background-base, #000000) !important;
}
</style>
