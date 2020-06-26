<script lang="ts">
import { defineComponent, provide } from 'vue'
import { pokemon } from './config/pokemon'
import FieldComponent from './components/FieldComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    FieldComponent,
  },
  setup() {
    const pokemonId = 'pokemonId'
    provide(pokemonId, pokemon)

    const test = 'test'
    return {
      test,
    }
  },
})
</script>

<template>
  <div>
    <FieldComponent />
  </div>
</template>
