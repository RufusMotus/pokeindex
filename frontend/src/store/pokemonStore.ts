import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiCall, CallType } from '../api';

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref<string[]>([]);
  const pokemon = ref();
  const pokemonError = ref(false);

  const initStore = async () => {
    await apiCall(CallType.getPokemonList).then((data) => {
      if (data?.status == 200) {
        data.json().then((list) => {
          pokemonList.value = list;
        });
      } else pokemonList.value = [];
    });
  };

  const getPokemon = async (id: string) => {
    pokemon.value = null;
    apiCall(CallType.getPokemon, { query: id ?? '' }).then((data) => {
      if (data?.status != 200) {
        pokemonError.value = true;
      } else {
        data.json().then((data) => {
          pokemon.value = data;
        });
      }
    });
  };

  return { pokemonList, pokemon, pokemonError, initStore, getPokemon };
});
