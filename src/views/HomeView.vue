<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import router from "@/router";

const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];
const swiper_urls = [
  {
    url: "https://picsum.photos/1000",
    route: "/123"
  },
  {
    url: "https://picsum.photos/1001",
    route: "/1234"
  },
  {
    url: "https://picsum.photos/1002",
    route: "/12345"
  },
];

function bannerClick(link: string) {
  router.push(link)
}
</script>

<template>
  <main>
    <Swiper
        class="skyvape-main-banner"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :slidesPerView="'auto'"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :loop="true"
        :grabCursor="true"
        :centeredSlides="true"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
    >
      <SwiperSlide
          class="skyvape-main-banner-slide"
          v-for="(item, index) in swiper_urls"
          :key="index"
          :style="`background-image: url(${item.url})`"
          @click="bannerClick(item.route)"
      />
    </Swiper>
  </main>
</template>

<style scoped lang="scss">
.skyvape-main-banner {
  aspect-ratio: 3 / 1.25;

  > .skyvape-main-banner-slide {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
