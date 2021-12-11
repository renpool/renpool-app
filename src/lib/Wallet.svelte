<script lang="ts">
    import { shortAccount } from "./net/shortAccount";
    import Chip from "./Chip/Chip.svelte";

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

    <Chip variant="info">
        <span class="text-xs">{shortAccount(selectedAddress)}</span>
    </Chip>
{/if}
