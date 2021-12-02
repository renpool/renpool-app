<script lang="ts">
    import { shortAccount } from "$lib/shortAccount";
    import { wallet } from "$lib/wallet";

    async function connectToMetaMask() {
        await window.ethereum.enable();
    }
</script>

{$wallet.chainId}

{#if $wallet.hasMetaMask === null}
    <div />
{:else if !$wallet.hasMetaMask}
    <a target="_blank" href="https://metamask.io/download">Install MetaMask</a>
{:else if $wallet.selectedAddress === null}
    <button on:click={connectToMetaMask}> Connect to MetaMask </button>
{:else}
    <a
        href="/"
        class="text-xs no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
        >{$wallet.balance} REN
    </a>

    <span class="chip chip-blue">
        <span class="text-xs">{shortAccount($wallet.selectedAddress)}</span>
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
