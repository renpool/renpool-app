<script lang="ts">
    export let name: string;
    export let chainId: number;
    export let ensAddress: string;
    export let provider: string;
</script>

<section>
    <h2>Network Settings</h2>
    <div class="underline-title" />

    <p>
        <span class="key">Name</span>
        <span class="value">{name}</span>
    </p>
    <p>
        <span class="key">Chain ID</span>
        <span class="value">{chainId}</span>
    </p>
    <p>
        <span class="key">ENS Address</span>
        <span class="value">{ensAddress}</span>
    </p>
    <p>
        <span class="key">Provider</span>
        <span class="value">{provider}</span>
    </p>
</section>

<style lang="postcss">
    section h2 {
        @apply sm:text-xl text-xl font-medium mb-2 text-gray-900;
    }

    section .underline-title {
        @apply h-0.5 w-20 bg-yellow-500 rounded mb-4;
    }

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
