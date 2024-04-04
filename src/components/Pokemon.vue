<template>
  <a-card hoverable :style="{ height, width }">
    <template #cover>
      <img
        :src="pokemon?.sprites.other?.['official-artwork'].front_default"
        alt="official-artwork"
      />
    </template>
    <a-card-meta :title="pokemon.name.toUpperCase()">
      <template #description>
        <a-tag v-for="type in pokemon.types.map((t) => t.type.name)">
          {{ type }}
        </a-tag>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { Pokemon } from "../types/pokemon.types";

const { pokemon } = defineProps<{ pokemon: Pokemon }>();

const height = "300px";
const width = "200px";
</script>
