<template>
  <a
    :href="link"
    target="_blank"
    class="rounded-lg px-4 py-1 warning text-h7 white--text"
    style="text-decoration: none; color: inherit"
    rel="noopener noreferrer"
    >{{ title }}</a
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
