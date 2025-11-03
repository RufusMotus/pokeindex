<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import { usePokemonStore } from './store/pokemonStore';

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.initStore();
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #242424;
  color: #ffffff;
  min-height: 100vh;
}

.container {
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
