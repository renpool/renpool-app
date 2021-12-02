<script lang="ts">
    import "../app.css";
    import { Contract, ethers } from "ethers";
    import { onMount } from "svelte";
    import { IERC20Standard } from "renpool-contracts";
    import { deployments } from "renpool-contracts";
    import { shortAccount } from "$lib/shortAccount";
    import { DECIMALS } from "./config";

    let hasMetaMask: boolean | null = null;
    let selectedAddress: string;
    let balance = "";

    onMount(async () => {
        if (window.ethereum === undefined) {
            hasMetaMask = false;
        } else {
            hasMetaMask = true;

            selectedAddress = window.ethereum.selectedAddress;

            if (selectedAddress !== null) {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                balance = await balanceOf(selectedAddress, provider);
                balance = ethers.utils.formatUnits(balance, DECIMALS);
            }
        }
    });

    async function connectToMetaMask() {
        await window.ethereum.enable();
    }

    async function balanceOf(
        address: string,
        provider: ethers.providers.Web3Provider
    ) {
        const renTokenAddr = deployments.kovan.renTokenAddr;
        const contract = new Contract(
            renTokenAddr,
            IERC20Standard.abi,
            provider
        );
        return await contract.balanceOf(address);
    }
</script>

{#if hasMetaMask === null}
    <div />
{:else if !hasMetaMask}
    <a target="_blank" href="https://metamask.io/download">Install MetaMask</a>
{:else if selectedAddress === null}
    <button on:click={connectToMetaMask}> Connect to MetaMask </button>
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
