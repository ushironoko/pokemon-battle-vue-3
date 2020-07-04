<script lang="ts">
import { defineComponent } from 'vue'
import { BaseStatus } from '../config/pokemon'
import { usePokemons, useStatus, useGigantaMax } from '../composable/pokedex'

export default defineComponent({
  name: 'FieldComponent',
  setup() {
    const pokemonList = usePokemons()
    let garchompStatus = {} as BaseStatus
    let pikachuStaus = {} as BaseStatus

    if (pokemonList) {
      garchompStatus = useStatus(pokemonList[0])
      pikachuStaus = useStatus(pokemonList[1])
    }

    const gigantaMax = (baseStatus: BaseStatus) => useGigantaMax(baseStatus)

    return {
      pokemonList,
      garchompStatus,
      pikachuStaus,
      gigantaMax,
    }
  },
})
</script>

<template>
  <div v-if="pokemonList">
    <div>{{ pokemonList[0].name }}：{{ garchompStatus }}</div>
    <button @click="gigantaMax(garchompStatus)">GigantaMax</button>
    <div>{{ pokemonList[1].name }}：{{ pikachuStaus }}</div>
    <button @click="gigantaMax(pikachuStaus)">GigantaMax</button>
  </div>
</template>
