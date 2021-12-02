<script lang="ts">
    export let totalPooled: string;
    export let isLocked: boolean;
    export let userBalance: string;
</script>

<p>Stats</p>

<div>
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
</div>

<style lang="postcss">
    .key {
        @apply font-semibold w-96;
    }

    .value {
        @apply font-semibold;
    }

</style>
