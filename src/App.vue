<script lang="ts">
import { defineComponent } from 'vue'
import { useBattel } from './composables/pokedex'
import FieldComponent from './components/FieldComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    FieldComponent,
  },
  setup() {
    const { readOnlyBattleStatus } = useBattel()
    return {
      readOnlyBattleStatus,
    }
  },
})
</script>

<template>
  <div>
    <FieldComponent :battle="readOnlyBattleStatus" />
  </div>
</template>
