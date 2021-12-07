<script lang="ts">
  import { setContext } from "svelte";

  setContext("step", { count: 1 });

  export let title: string;
</script>

<h1>{title}</h1>
<div class="underline-title" />

<section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <slot><em>no steps were provided</em></slot>
  </div>
</section>

<style lang="postcss">
  h1 {
    @apply sm:text-3xl text-2xl font-medium mb-2 text-gray-900;
  }

  .underline-title {
    @apply h-1 w-20 bg-yellow-500 rounded;
  }
</style>
