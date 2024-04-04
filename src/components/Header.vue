<template>
  <a-flex
    gap="middle"
    justify="center"
    align="center"
    vertical
    style="position: absolute; top: 0; left: 0; width: 100vw; margin-top: 20px"
  >
    <a-flex>
      <p>
        {{ router.currentRoute.value.name }}
      </p>
    </a-flex>
    <a-flex gap="middle">
      <a-button @click="() => goto('home')">Home</a-button>
      <a-button @click="() => goto('lcp')">LCP</a-button>
      <a-button @click="() => goto('inp')">INP</a-button>
      <a-button @click="() => goto('cls')">CLS</a-button>
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import { router } from "../router";

const goto = (page: "home" | "cls" | "lcp" | "inp") => {
  router.push(`/${page}`);
};
</script>
