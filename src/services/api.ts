import { Pokemon } from "../types/pokemon.types";

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
