<template>
  <div>
    <v-img :src="img" v-bind="$attrs" v-on="$listeners">
      <template v-slot:placeholder>
        <v-row align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
            aria-label="loading"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: `/images/placeholder.png`,
    },
  },
};
</script>

<style lang="scss" scoped></style>
