<script lang="ts">
import { defineComponent } from 'vue'
import FieldComponent from './components/FieldComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    FieldComponent,
  },
  setup() {
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
