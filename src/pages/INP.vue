<template>
  <a-flex vertical gap="large" align="center">
    <a-flex gap="middle">
      <a-button type="primary" @click="addSlow" style="width: 10rem"
        >Add Pokemon SLOW</a-button
      >
      <a-button type="primary" @click="addFast" style="width: 10rem"
        >Add Pokemon FAST</a-button
      >
    </a-flex>
    <a-spin v-if="loading" />
    <a-flex wrap="wrap" gap="small" justify="center">
      <PokemonComponent v-for="pokemon in pokemons" :pokemon="pokemon" />
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PokemonComponent from "../components/Pokemon.vue";
import { getRandomPokemon } from "../services/api";
import { Pokemon } from "../types/pokemon.types";

const pokemons = ref<Pokemon[]>([]);
const loading = ref(false);

const slowRunningCode = () => {
  let j = 0;
  for (let i = 0; i < 1 * 1000 * 1000 * 1000; i++) {
    if (j % 2 === 0) j += 1;
  }
  return j;
};

const addSlow = () => {
  loading.value = true;
  getRandomPokemon()
    .then((res) => {
      if (res) pokemons.value.push(res);
    })
    .finally(() => (loading.value = false));

  // THIS IS BLOCKING THE EVENT CALLBACK from returning
  slowRunningCode();
};

const addFast = () => {
  loading.value = true;
  getRandomPokemon()
    .then((res) => {
      if (res) pokemons.value.push(res);
      // ? or you could put here the extra work => equivalent to await ...
    })
    .finally(() => (loading.value = false));

  requestAnimationFrame(() => {
    setTimeout(() => {
      slowRunningCode(); // THIS IS BLOCKING THE EVENT CALLBACK
    }, 0); // This is NOT BLOCKING => YIELD to the MAIN THREAD
  });
};

// ? ALSO FAST => async / await make this callback asynchronous and can return to the main thread for UI updates
// const addAlsoFast = async () => {
//   loading.value = true;
//   await getRandomPokemon()
//     .then((res) => {
//       if (res) pokemons.value.push(res);
//     })
//     .finally(() => (loading.value = false));

//   // THIS IS BLOCKING THE EVENT CALLBACK from returning
//   slowRunningCode();
// };
</script>
