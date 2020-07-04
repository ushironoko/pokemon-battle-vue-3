import { createApp } from 'vue'
import { pokemon } from './config/pokemon'
import { pokemonsSymbol } from './composable/pokedex'
import App from './App.vue'

const app = createApp(App)
app.provide(pokemonsSymbol, pokemon)
app.mount('#app')
