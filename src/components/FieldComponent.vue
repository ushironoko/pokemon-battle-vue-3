<script lang="ts">
import { defineComponent } from 'vue'
import {
  usePokemons,
  useStatus,
  useBattel,
  createBattlePokemon,
} from '../composables/pokedex'

export default defineComponent({
  name: 'FieldComponent',
  setup() {
    const {
      readOnlyBattleStatus: battle,
      setOwn,
      setEnemy,
      countUpTern,
    } = useBattel()
    const pokemonList = usePokemons()
    const p1 = pokemonList[0]
    const p2 = pokemonList[1]

    const ownStatus = useStatus(p1)
    const enemyStatus = useStatus(p2)

    const own = createBattlePokemon(p1.name, ownStatus, p1.moveList)
    const enemy = createBattlePokemon(p2.name, enemyStatus, p2.moveList)

    setOwn(own)
    setEnemy(enemy)
    countUpTern()
    return {
      battle,
    }
  },
})
</script>

<template>
  <div v-if="battle">
    <div>{{ battle.enemy.name }}：{{ battle.enemy.status }}</div>
    <div>{{ battle.own.name }}：{{ battle.own.status }}</div>
    <ul v-for="move in battle.own.move" :key="move.name">
      <li>{{ move.name }}</li>
    </ul>
  </div>
</template>
