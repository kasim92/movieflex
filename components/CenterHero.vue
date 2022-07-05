<template>
  <v-row align="center">
    <v-col cols="12" class="my-10">
      <base-image role="button" @click="go" contain :img="'/images/third.jpg'" />
    </v-col>
  </v-row>
</template>

<script>
export default {

  methods: {
    go() {
      window.open("http://smart.shashety.com/", "_blank");
    }
  },
};
</script>

<style lang="scss" scoped></style>
