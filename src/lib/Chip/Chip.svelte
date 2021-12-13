<script lang="ts">
  import type { Variants } from './types'

  export let variant: Variants;
</script>

<span class={`chip chip-${variant}`}>
  <slot></slot>
</span>

<style lang="postcss">
  .chip {
    @apply justify-center items-center m-1 font-medium py-1 px-2 rounded-full border;
  }
  .chip-default {
    @apply text-gray-700 bg-gray-100 border-gray-300;
  }
  .chip-info {
    @apply text-blue-700 bg-blue-100 border-blue-300;
  }
  .chip-success {
    @apply text-green-700 bg-green-100 border-green-300;
  }
  .chip-warning {
    @apply text-yellow-700 bg-yellow-100 border-yellow-300;
  }
  .chip-danger {
    @apply text-red-700 bg-red-100 border-red-300;
  }
</style>
