<script lang="ts">
    export let totalPooled: string;
    export let isLocked: boolean;
    export let userBalance: string;
</script>

<section>
    <h2>Stats</h2>
    <div class="underline-title" />

    <p>
        <span class="key">Total Pooled</span>
        <span class="value">{totalPooled}</span>
    </p>
    <p>
        <span class="key">Pool is locked</span>
        <span class="value">{isLocked}</span>
    </p>
    <p>
        <span class="key">You pool balance</span>
        <span class="value">{userBalance}</span>
    </p>
</section>

<style lang="postcss">
    p {
        @apply py-1;
    }

    p span.key {
        @apply font-medium;
    }

    p span.value {
        @apply pl-2 text-indigo-500;
    }
</style>
