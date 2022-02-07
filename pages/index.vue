<template>
  <div>
    <!-- hero image -->
    <hero />
    <!-- end hero image -->
    <!-- first section  -->
    <website-card
      cardTitle="Shashety Cinema"
      imgpath="/images/firstimg.jpg"
      class="my-n11"
      description="An entertainment platform for watching international and Arab films and series, with a daily update of the latest cinematic works"
    >
      <template #button>
        <base-button title="Visit the Website" />
      </template>
      <template #donwload>
        <p class="text-title mt-3 font-weight-bold">You can get the APP</p>
        <div class="mb-10 d-flex justify-start align-start">
          <a
            href="https://play.google.com/store/apps/details?id=net.halasat.tv"
            aria-label="apple halasat"
          >
            <v-img contain width="100" :src="'/images/apple.jpg'" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.halasat.tv"
            class="mx-2"
            aria-label="play store halasat"
          >
            <v-img contain width="100" :src="'/images/play.jpg'" />
          </a>
        </div>
      </template>
    </website-card>
    <!-- end  first section -->

    <!-- center hero section  -->
    <center-hero />
    <!-- end center hero section -->

    <!-- third section -->
    <website-card
      cardTitle="Shashety Live TV"
      imgpath="/images/football.jpg"
      description="A platform for sharing digital content that contains the largest library of programs and electronic games that are ready and can be activated and used"
    >
      <template #button>
        <base-button title="Visit the Website" />
      </template>
    </website-card>
    <!-- end third section -->

    <!-- last section-->
    <website-card
      cardTitle="Shashety Share"
      imgpath="/images/download.jpg"
      description="A platform for sharing digital content that contains the largest library of programs and electronic games that are ready and can be activated and used"
    >
      <template #button>
        <base-button title="Visit the Website" />
      </template>
    </website-card>
    <!-- end last section-->
  </div>
</template>
<script>
import BaseButton from "~/components/BaseButton.vue";
import WebsiteCard from "~/components/WebsiteCard.vue";
import Hero from "~/components/Hero.vue";
import CenterHero from "~/components/CenterHero.vue";
export default {
  components: { BaseButton, WebsiteCard, Hero, CenterHero },
  head() {
    return {
      head: {
        title: "Cinema Shashety",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "watch , movies, online, series, streaming, latest",
          },
        ],
      },
    };
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped></style>
