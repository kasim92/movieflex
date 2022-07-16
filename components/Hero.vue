<template>
  <div>
    <base-image contain class="mx-auto" :img="'/images/1.png'" />
    <!-- <v-img contain :src="'/images/1.png'" /> -->
  </div>
</template>

<script>
import BaseImage from "./BaseImage.vue";
export default {
  components: { BaseImage },
};
</script>

<style lang="scss" scoped></style>
