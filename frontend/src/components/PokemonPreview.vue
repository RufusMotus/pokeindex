<template>
  <div class="pokemon-preview" v-if="pokemonStore.pokemon">
    <div class="avatar">
      <img :src="pokemonStore.pokemon.sprites.other['official-artwork'].front_default" alt="" />
    </div>
    <div class="name">{{ pokemonStore.pokemon.name }}</div>
    <div class="flavor">{{ pokemonStore.pokemon.speciesData.flavor_text_entries[0].flavor_text }}</div>
    <div class="buttons">
      <Button @click="details">Details</Button>
      <Button @click="close" background-color="#ff0000">Close</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from './atoms/Button.vue';
import { usePokemonStore } from '../store/pokemonStore';

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const props = defineProps<{
  id: string;
}>();
const pokemonStore = usePokemonStore();
const router = useRouter();

const details = () => {
  router.push({ name: 'pokemon', params: { id: props.id } });
};

const close = () => {
  emit('close');
};
</script>

<style lang="scss" scoped>
.pokemon-preview {
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    img {
      max-width: 100%;
    }
  }

  .name {
    text-transform: capitalize;
    font-size: 1.5rem;
    margin: 20px 0;
  }

  .flavor {
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
