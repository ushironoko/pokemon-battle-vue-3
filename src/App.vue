<script lang="ts">
import { defineComponent } from 'vue'
import FieldComponent from './components/FieldComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    FieldComponent,
  },
})
</script>

<template>
  <div>
    <FieldComponent />
  </div>
</template>
