<template>
  <a-flex gap="middle">
    <PokemonComponent v-for="pokemon in randomPokemons" :pokemon="pokemon" />
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pokemon } from "../types/pokemon.types";
import { getRandomPokemon } from "../services/api";
import PokemonComponent from "../components/Pokemon.vue";

const randomPokemons = ref<Pokemon[]>([]);
const NUMBER_OF_POKEMON = 5;

// const slowRunningCode = () => {
//   let j = 0;
//   for (let i = 0; i < 1 * 1000 * 1000000; i++) {
//     if (j % 2 === 0) j += 1;
//   }
// };

const assignRandomPokemon = async () => {
  randomPokemons.value = [];
  // slowRunningCode();
  for (let i = 0; i < NUMBER_OF_POKEMON; i++) {
    getRandomPokemon(Math.floor(Math.random() * 500)).then((pokemon) => {
      if (pokemon) randomPokemons.value.push(pokemon);
    });
  }
};

assignRandomPokemon();
</script>
