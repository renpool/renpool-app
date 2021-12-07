<script lang="ts">
    import { shortAccount } from "./net/shortAccount";

    /**
     * Indicates whether the MetaMask extension is installed in the browser.
     * A `null` value should be used when loading the component.
     */
    export let hasMetaMask: boolean | null = null;

    export let chainId: number | null = null;

    export let selectedAddress: string | null = null;

    export let balance: string | null = null;

    async function connectToMetaMask() {
        await window.ethereum.enable();
    }
</script>

{chainId}

{#if hasMetaMask === null}
    <span>loading...</span>
{:else if !hasMetaMask}
    <a target="_blank" href="https://metamask.io/download">Install MetaMask</a>
{:else if selectedAddress === null}
    <button on:click={connectToMetaMask}>Connect to MetaMask</button>
{:else}
    <a
        href="/"
        class="text-xs no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >{balance} REN
    </a>

    <span class="chip chip-blue">
        <span class="text-xs">{shortAccount(selectedAddress)}</span>
    </span>
{/if}

<style lang="postcss">
    .chip {
        @apply justify-center items-center m-1 font-medium py-1 px-2 rounded-full border;
    }

    .chip-blue {
        @apply text-blue-700 bg-blue-100 border-blue-300;
    }
</style>
