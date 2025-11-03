<template>
  <div class="container">
    <Button @click="goBack" margin="0 0 30px 10px"> Go back </Button>
    <template v-if="pokemonStore.pokemon && !pokemonStore.pokemonError">
      <div class="header">
        <div class="avatar">
          <img :src="pokemonStore.pokemon.sprites.other['official-artwork'].front_default" alt="" />
        </div>
        <div class="basic-info">
          <div class="name">{{ pokemonStore.pokemon.name }}</div>
          <div class="stats">
            <div class="stat" v-for="stat in pokemonStore.pokemon.stats" :key="stat.stat.name">
              <div class="title">{{ stat.stat.name.replace('-', ' ') }}</div>
              <div class="value">{{ stat.base_stat }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="title">Pokemon Details</div>
        <div class="flavor">{{ pokemonStore.pokemon.speciesData.flavor_text_entries[0].flavor_text }}</div>
        <div class="title">Moves</div>
        <div class="moves">
          <div class="move" v-for="move in pokemonStore.pokemon.moves" :key="move.move.name">
            {{ move.move.name.replace('-', ' ') }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="not-found">Pokemon not found</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/atoms/Button.vue';

import { usePokemonStore } from '../store/pokemonStore';
import { useRouter } from 'vue-router';

const pokemonStore = usePokemonStore();
const router = useRouter();

const goBack = () => {
  router.push({ name: 'home' });
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-wrap: wrap;

  .avatar {
    flex-basis: 50%;
    text-align: center;

    img {
      max-width: 100%;
    }
  }

  .basic-info {
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;

    .name {
      font-size: 2rem;
      font-weight: bold;
      text-transform: capitalize;
      text-align: center;
      flex-basis: 100%;
      padding-top: 20px;
    }

    .stats {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 100%;

      .stat {
        flex-basis: 50%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        padding: 20px 0;

        .title {
          flex-basis: 100%;
          text-transform: capitalize;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .value {
          flex-basis: 100%;
          font-size: 1.2rem;
        }
      }
    }
  }
}

.description {
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 50px 0 20px 0;
  }

  .moves {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    .move {
      text-transform: capitalize;
      border: 1px solid #ffffff;
      border-radius: 5px;
      padding: 10px 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.not-found {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
}

@media screen and (max-width: 900px) {
  .header {
    .avatar,
    .basic-info {
      flex-basis: 100%;
    }
  }
}
</style>
