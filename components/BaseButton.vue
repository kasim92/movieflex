<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    color="warning"
    class="rounded-lg px-4 py-4"
    small
    @click="go"
    >
    <span class="text-h6">{{ title }}</span>
    </v-btn
  >
</template>



<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  methods: {
    go() {
      window.open(this.link, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped></style>
