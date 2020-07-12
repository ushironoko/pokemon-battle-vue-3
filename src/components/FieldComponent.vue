<script lang="ts">
import {
  usePokemons,
  useStatus,
  useBattel,
  createBattlePokemon,
} from '../composables/pokedex'
import { defineComponent } from 'vue'
import BattlePokemon from '../components/BattlePokemon.vue'

export default defineComponent({
  name: 'FieldComponent',
  components: {
    BattlePokemon,
  },
  setup() {
    const { battle, setOwn, setEnemy, countUpTern } = useBattel()
    const pokemonList = usePokemons()
    const p1 = pokemonList[0]
    const p2 = pokemonList[1]

    const ownStatus = useStatus(p1.baseStatus)
    const enemyStatus = useStatus(p2.baseStatus)

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
  <div>
    <BattlePokemon :battle-pokemon="battle.enemy" />
    <BattlePokemon :battle-pokemon="battle.own" />
  </div>
</template>
