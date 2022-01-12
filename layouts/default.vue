<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer dark padless >
      <v-card class="flex" flat tile color="black">
        <v-card-text class="py-2 white--text text-center" color="black">
          copyright © {{ new Date().getFullYear() }} 
          <strong class="red--text">Shashety</strong>
        </v-card-text>
      </v-card>
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
