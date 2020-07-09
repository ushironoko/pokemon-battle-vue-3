import { createApp } from 'vue'
import { pokemon } from './config/pokemon'
import {
  pokemonsSymbol,
  battleStatusSymbol,
  createBattleStatus,
} from './composables/pokedex'
import App from './App.vue'

const app = createApp(App)
app.provide(pokemonsSymbol, pokemon)
app.provide(battleStatusSymbol, createBattleStatus())
app.mount('#app')
