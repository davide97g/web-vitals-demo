<template>
  <div>
    <a-button type="primary" @click="add">Add</a-button>
    <div
      style="height: 300px; width: 100%; border: 1px solid red"
      v-if="bannerVisible"
    >
      <p>Banner pokemon</p>
    </div>
    <a-flex wrap="wrap" gap="middle" style="max-width: 80vw">
      <PokemonComponent
        v-for="pokemon in randomPokemonList"
        :pokemon="pokemon"
      />
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pokemon } from "../types/pokemon.types";
import { getRandomPokemon } from "../services/api";
import PokemonComponent from "../components/Pokemon.vue";

const randomPokemonList = ref<Pokemon[]>([]);
const NUMBER_OF_POKEMON = 5;
const bannerVisible = ref(false);

const assignRandomPokemon = async () => {
  randomPokemonList.value = [];
  randomPokemonList.value = await Promise.all(
    [...Array(NUMBER_OF_POKEMON).keys()].map(() => getRandomPokemon())
  ).then((res) => res.filter(Boolean) as Pokemon[]);
};

const add = () => {
  getRandomPokemon().then((res) => {
    if (res) randomPokemonList.value.unshift(res);
  });
};

assignRandomPokemon();

setTimeout(() => (bannerVisible.value = true), 2500);
</script>
