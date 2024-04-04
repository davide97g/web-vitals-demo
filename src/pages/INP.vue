<template>
  <div>
    <a-button type="primary" @click="add">Add</a-button>
    <a-spin v-if="loading"></a-spin>
    <a-flex wrap="wrap" gap="small">
      <PokemonComponent v-for="pokemon in pokemons" :pokemon="pokemon" />
    </a-flex>
  </div>
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
  for (let i = 0; i < 1 * 1000 * 1000000; i++) {
    if (j % 2 === 0) j += 1;
  }
};

const add = () => {
  //   slowRunningCode(); // THIS IS BLOCKING THE EVENT CALLBACK
  loading.value = true;
  setTimeout(() => {
    getRandomPokemon(Math.floor(Math.random() * 600))
      .then((res) => {
        if (res) pokemons.value.push(res);
        slowRunningCode();
      })
      .finally(() => (loading.value = false));
    // slowRunningCode();
  }, 0); // This is NOT BLOCKING => YIELD to the MAIN THREAD
};
</script>
