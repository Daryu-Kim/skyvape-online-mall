<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="top-banner">
    <RouterLink to="/login">💌 지금 회원가입 시 5,000원 쿠폰 바로 증정! 💌</RouterLink>
  </div>
</template>

<style scoped lang="scss">
div {
  background-color: #000;
  display: flex;
  height: 3.6rem;
  > a {
    color: white;
    font-size: 1.2rem;
    line-height: 3.6rem;
    width: 100%;
    text-align: center;
  }
}
</style>
