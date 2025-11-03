<template>
  <div class="container">
    <TextInput
      width="400px"
      margin="0 auto 50px auto"
      placeholder="Start typing Pokemon name..."
      v-model="searchValue"
      @update:model-value="searchByName"
    />
    <div class="pokemon-list" v-for="pokemon in searchablePokemons" :key="pokemon">
      <div class="pokemon-item" @click="showPreview(pokemon)">{{ pokemon }}</div>
    </div>
    <ModalFrame v-if="showPreviewModal">
      <PokemonPreview :id="pokemonId" @close="closePreview" />
    </ModalFrame>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInput from './../components/atoms/TextInput.vue';
import { usePokemonStore } from '../store/pokemonStore';
import ModalFrame from '../components/atoms/ModalFrame.vue';
import PokemonPreview from '../components/PokemonPreview.vue';

const pokemonStore = usePokemonStore();
const searchValue = ref('');
const searchablePokemons = ref();
const showPreviewModal = ref(false);
const pokemonId = ref('');

const searchByName = () => {
  if (!searchValue.value) {
    searchablePokemons.value = [];
    return;
  }

  searchablePokemons.value = pokemonStore.pokemonList.filter((pokemon: any) => {
    return pokemon.includes(searchValue.value.toLowerCase());
  });
};

const showPreview = (id: string) => {
  pokemonId.value = id;
  pokemonStore.getPokemon(id);
  showPreviewModal.value = true;
};

const closePreview = () => {
  showPreviewModal.value = false;
};
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
}

.pokemon-item {
  display: block;
  padding: 20px 10px;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    color: #3b4cca;
    border-color: #3b4cca;
    cursor: pointer;
  }
}
</style>
