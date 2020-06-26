<script lang="ts">
import { defineComponent, inject } from 'vue'
import { PokemonList, BaseStatus } from '../config/pokemon'
import { useStatus } from '../composable/useStaus'

export default defineComponent({
  name: 'FieldComponent',
  setup() {
    const pokemon = inject<PokemonList>('pokemonId')
    let garchompStatus = {} as BaseStatus
    let pikachuStaus = {} as BaseStatus

    if (pokemon) {
      garchompStatus = useStatus(pokemon[0])
      pikachuStaus = useStatus(pokemon[1])
    }
    return {
      garchompStatus,
      pikachuStaus,
    }
  },
})
</script>

<template>
  <div>
    <div>ガブ：{{ garchompStatus }}</div>
    <div>ピカ：{{ pikachuStaus }}</div>
  </div>
</template>
