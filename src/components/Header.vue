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
      <a-button
        @click="() => goto('')"
        :type="router.currentRoute.value.path === '/' ? 'primary' : 'default'"
        >Home</a-button
      >
      <a-button
        @click="() => goto('lcp')"
        :type="
          router.currentRoute.value.path === '/lcp' ? 'primary' : 'default'
        "
        >LCP</a-button
      >
      <a-button
        @click="() => goto('inp')"
        :type="
          router.currentRoute.value.path === '/inp' ? 'primary' : 'default'
        "
        >INP</a-button
      >
      <a-button
        @click="() => goto('cls')"
        :type="
          router.currentRoute.value.path === '/cls' ? 'primary' : 'default'
        "
        >CLS</a-button
      >
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import { router } from "../router";

const goto = (page: "" | "cls" | "lcp" | "inp") => {
  router.push(`/${page}`);
};
</script>
