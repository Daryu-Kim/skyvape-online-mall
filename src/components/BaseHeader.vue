<script setup lang="ts">
import {RouterLink} from "vue-router";
import IconMenuBtn from "@/components/icons/IconMenuBtn.vue";
import IconSearchBtn from "@/components/icons/IconSearchBtn.vue";
import IconCartBtn from "@/components/icons/IconCartBtn.vue";
</script>

<template>
  <header>
      <button class="skyvape-menu-btn">
        <IconMenuBtn />
      </button>
      <RouterLink class="skyvape-logo" to="/">SKYVAPE</RouterLink>
      <div class="skyvape-func-menu">
        <button>
          <IconSearchBtn />
        </button>
        <button>
          <IconCartBtn />
        </button>
      </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  background-color: #001D3D;;
  height: 6.4rem;
    > .skyvape-menu-btn {
      position: absolute;
      top: 50%;
      left: 2.4rem;
      transform: translateY(-50%);
    }
    > .skyvape-logo {
      font-size: 3.2rem;
      font-weight: 900;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > .skyvape-func-menu {
      position: absolute;
      top: 50%;
      right: 2.4rem;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
}


</style>
