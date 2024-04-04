<template>
  <a-card
    hoverable
    :style="{
      height,
      width,
      border: `4px solid`,
      borderColor: species?.color.name,
    }"
  >
    <template #cover>
      <img
        :src="pokemon?.sprites.other?.['official-artwork'].front_default"
        alt="official-artwork"
      />
    </template>
    <a-card-meta
      :title="pokemon.name.toUpperCase()"
      :description="`N° ${pokemon.id}`"
    >
      <template #description>
        <a-tag v-for="type in pokemon.types.map((t) => t.type.name)">
          {{ type }}
        </a-tag>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getPokemonSpecies } from "../services/api";
import { Pokemon } from "../types/pokemon.types";
import { PokemonSpecies } from "../types/species.types";

const { pokemon } = defineProps<{ pokemon: Pokemon }>();

const species = ref<PokemonSpecies>();

getPokemonSpecies(pokemon.species.name).then((res) => {
  if (res) species.value = res;
});

const height = "300px";
const width = "200px";
</script>
