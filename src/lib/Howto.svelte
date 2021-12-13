<script lang="ts">
    import { setContext } from "svelte";

    setContext("step", { count: 1 });

    export let title: string;
</script>

<h1>{title}</h1>
<div class="underline-title"></div>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto flex flex-wrap">
        <slot><em>no steps were provided</em></slot>
    </div>
</section>
