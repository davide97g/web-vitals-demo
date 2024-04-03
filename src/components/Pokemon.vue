<template>
  <a-flex gap="middle">
    <a-card
      hoverable
      :style="{ height, width }"
      v-for="randomPokemon in randomPokemons"
    >
      <template #cover>
        <img
          :src="
            randomPokemon?.sprites.other?.['official-artwork'].front_default
          "
          alt="official-artwork"
        />
      </template>
      <template #actions>
        <a-button @click="reload"> Reload </a-button>
      </template>
      <a-card-meta :title="randomPokemon.name.toUpperCase()">
        <template #description>
          <a-tag
            @click="reload"
            v-for="type in randomPokemon.types.map((t) => t.type.name)"
          >
            {{ type }}
          </a-tag>
        </template>
      </a-card-meta>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pokemon } from "../types/pokemon.types";
import { getRandomPokemon } from "../services/api";

const randomPokemons = ref<Pokemon[]>([]);
const NUMBER_OF_POKEMON = 5;

const LARGE_SIZE = false;

const height = LARGE_SIZE ? "800px" : "300px";
const width = LARGE_SIZE ? "600px" : "200px";

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

const reload = () => {
  // slowRunningCode();
  assignRandomPokemon();
};
</script>
