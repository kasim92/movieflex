<template>
  <div>
    <!-- hero image -->
    <hero />
    <!-- end hero image -->
    <!-- first section  -->
    <website-card
      dir="rtl"
      cardTitle="سينما شاشتي"
      imgpath="/images/firstimg.jpg"
      class="my-n11"
      description="منصة ترفيهية لمشاهدة الأفلام والمسلسلات العالمية والعربية ، مع تحديث يومي لأحدث الأعمال السينمائية"
    >
      <template #button>
        <base-button
          title="قم بزيارة الموقع"
          :link="'http://cinema.shashety.com/'"
        />
      </template>
      <template #donwload>
        <p class="text-title mt-3 font-weight-bold">يمكنك الحصول على التطبيق</p>
        <div class="mb-10 d-flex justify-start align-start">
          <a
            href="https://apps.apple.com/sa/app/shashety/id1448378384"
            aria-label="apple"
          >
            <v-img contain width="100" :src="'/images/apple.jpg'" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.halasat.tv"
            class="mx-2"
            aria-label="play store"
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
      dir="rtl"
      cardTitle="شاشتي TV"
      imgpath="/images/football.jpg"
      description="منصة لمشاهدة القنوات الرياضية و المسلسلات و الافلام"
    >
      <template #button>
        <base-button
          title="قم بزيارة الموقع"
          :link="'http://tv.shashety.com'"
        />
      </template>
    </website-card>
    <!-- end third section -->

    <!-- last section-->
    <website-card
      dir="rtl"
      cardTitle="شاشتي شير"
      imgpath="/images/download.jpg"
      description="منصة لمشاركة المحتوى الرقمي تحتوي على أكبر مكتبة من البرامج والألعاب الإلكترونية الجاهزة والقابلة للتفعيل والاستخدام"
    >
      <template #button>
        <base-button
          title="قم بزيارة الموقع"
          :link="`http://share.shashety.com/`"
        />
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
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped></style>
