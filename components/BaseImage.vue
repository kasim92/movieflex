<template>
  <div>
    <v-img
      :src="img"
      v-bind="$attrs"
      v-on="$listeners"
      lazy-src="/images/placeholder.png"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
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
