<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PokemonList, BaseStatus } from '../config/pokemon'
import { useStatus } from '../composable/useStaus'

export default defineComponent({
  name: 'BattleField',
  setup() {
    const pokemon = inject<PokemonList>('pokemonId')
    let gurchompStatus = {} as BaseStatus
    let pikachuStaus = {} as BaseStatus

    if (pokemon) {
      gurchompStatus = useStatus(pokemon[0])
      pikachuStaus = useStatus(pokemon[1])
    }
    return {
      gurchompStatus,
      pikachuStaus,
    }
  },
})
</script>

<template>
  <div>
    <div>ガブ：{{ gurchompStatus }}</div>
    <div>ピカ：{{ pikachuStaus }}</div>
  </div>
</template>
