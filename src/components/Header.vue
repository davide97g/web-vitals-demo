<template>
  <a-flex
    gap="middle"
    justify="center"
    style="position: absolute; top: 0; left: 0; width: 90vh; margin-top: 20px"
  >
    {{ router.currentRoute.value.name }}
    <a-button @click="() => goto('home')">Home</a-button>
    <a-button @click="() => goto('lcp')">LCP</a-button>
    <a-button @click="() => goto('cls')">CLS</a-button>
    <a-button @click="() => goto('fid')">FID</a-button>
  </a-flex>
</template>

<script setup lang="ts">
import { router } from "../router";

const goto = (page: "home" | "cls" | "lcp" | "fid") => {
  router.push(`/${page}`);
};
</script>
