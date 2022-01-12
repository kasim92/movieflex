<template>
  <div>
    <!-- hero image -->
    <hero />
    <!-- end hero image -->

    <!-- first section  -->
    <website-card
      cardTitle="Shashety Cinema"
      imgpath="firstimg.png"
      class="my-n11"
      description="An entertainment platform for watching international and Arab films and series, with a daily update of the latest cinematic works"
    >
      <template #button>
        <base-button title="Visit the Website" />
      </template>
      <template #donwload>
        <p class="text-title mt-3 font-weight-bold">You can get the APP</p>
        <div class="mb-10 d-flex justify-start align-start">
          <a href="#">
            <v-img contain width="100" :src="'/images/apple.png'" />
          </a>
          <a href="#" class="mx-2">
            <v-img contain width="100" :src="'/images/play.png'" />
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
      imgpath="football.png"
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
      imgpath="download.png"
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
import BaseButton from '~/components/BaseButton.vue'
import WebsiteCard from '~/components/WebsiteCard.vue'
import Hero from '~/components/Hero.vue'
import CenterHero from '~/components/CenterHero.vue'
export default {
  components: { BaseButton, WebsiteCard, Hero, CenterHero },
  head() {
    return {
      title: "Movieflex",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get all Latest streaming movies in theaters & online',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movies, stream, streaming',
        }
      ]
    }
  },
  data() {
    return {

    }
  },

  methods: {

  },
}
</script>
<style scoped>
</style>
