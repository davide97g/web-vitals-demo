import { Pokemon } from "../types/pokemon.types";
import { PokemonSpecies } from "../types/species.types";

// https://pokeapi.co/

export const getRandomPokemon = async () => {
  const pokemonNumber = Math.max(Math.floor(Math.random() * 600), 1);
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => res.json() as Promise<Pokemon>)
    .catch((err) => {
      console.info(err);
      return null;
    });
};

export const getPokemonSpecies = async (species: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${species}`)
    .then((res) => res.json() as Promise<PokemonSpecies>)
    .catch((err) => {
      console.info(err);
      return null;
    });
};
