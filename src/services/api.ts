import { Pokemon } from "../types/pokemon.types";

export const getRandomPokemon = async (pokemonNumber: number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => res.json() as Promise<Pokemon>)
    .catch((err) => {
      console.info(err);
      return null;
    });
