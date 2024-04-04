<template>
  <a-flex gap="middle" vertical>
    <a-flex gap="middle" align="center">
      <a-switch
        v-model:checked="useSkeletons"
        checked-children="skeleton"
        un-checked-children="no skeleton"
      />
      <a-button type="primary" @click="assignRandomPokemon">Refresh</a-button>
    </a-flex>
    <a-flex wrap="wrap" gap="middle" style="max-width: 80vw">
      <SkeletonPlaceholder
        v-if="isLoading && useSkeletons"
        v-for="_ in [...Array(NUMBER_OF_POKEMON).keys()]"
      />
      <PokemonComponent
        v-else
        v-for="pokemon in randomPokemonList"
        :pokemon="pokemon"
      />
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Pokemon } from "../types/pokemon.types";
import { getRandomPokemon } from "../services/api";
import PokemonComponent from "../components/Pokemon.vue";
import SkeletonPlaceholder from "../components/SkeletonPlaceholder.vue";

const randomPokemonList = ref<Pokemon[]>([]);
const NUMBER_OF_POKEMON = 5;

// ? read switch value
const useSkeletons = ref(localStorage.getItem("skeletons") === "true");

const isLoading = ref(true);

const assignRandomPokemon = async () => {
  isLoading.value = true;
  randomPokemonList.value = [];
  randomPokemonList.value = await Promise.all(
    [...Array(NUMBER_OF_POKEMON).keys()].map(() => getRandomPokemon())
  ).then((res) => res.filter(Boolean) as Pokemon[]);
  isLoading.value = false;
};

assignRandomPokemon();

// ? update switch value
watch(
  () => useSkeletons.value,
  () => localStorage.setItem("skeletons", useSkeletons.value ? "true" : "false")
);
</script>
