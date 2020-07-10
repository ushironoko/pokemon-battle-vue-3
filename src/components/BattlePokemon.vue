<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BattlePokemonStatus } from '../config/pokemon'

export default defineComponent({
  name: 'BattlePokemon',
  props: {
    battlePokemon: {
      type: Object as PropType<Readonly<BattlePokemonStatus>>,
      required: true,
    },
  },
})
</script>

<template>
  <div v-if="battlePokemon">
    <div>{{ battlePokemon.name }}：{{ battlePokemon.status }}</div>
    <ul v-for="move in battlePokemon.move" :key="move.name">
      <li>{{ move.name }}</li>
    </ul>
  </div>
</template>
