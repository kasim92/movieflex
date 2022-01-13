<template>
  <v-row class="mb-4" align="center">
    <v-col
      xl="4"
      lg="4"
      md="4"
      sm="12"
      cols="12"
      class="ml-xl-15 ml-lg-12 ml-sm-0 ml-0"
      align-self="center"
    >
      <base-image contain class="mx-auto" :img="imgpath" />
    </v-col>
    <!-- cols 5 -->
    <v-col
      xl="4"
      lg="4"
      md="4"
      sm="12"
      cols="11"
      class="mx-xl-0 mx-lg-0 mx-sm-10 mx-5"
      align-self="center"
    >
      <h2>{{ cardTitle }}</h2>
      <p style="word-break: break-word" class="text--secondary">
        {{ description }}
      </p>
      <slot name="button" />
      <slot name="donwload" />
    </v-col>
  </v-row>
</template>

<script>
import BaseImage from "~/components/BaseImage.vue";

export default {
  components: { BaseImage },

  props: {
    imgpath: {
      type: String,
      default: "",
    },
    cardTitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
