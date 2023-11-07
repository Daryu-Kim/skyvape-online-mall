<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from "@/components/BaseHeader.vue";
import TopBanner from "@/components/TopBanner.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>

<template>
  <TopBanner />
  <BaseHeader />
  <transition>
    <RouterView />
  </transition>
  <BaseFooter />
</template>
