<script lang="ts">
    import { Link, Tag, InlineLoading } from "carbon-components-svelte";
    import { shortAccount } from "./net/shortAccount";

    /**
     * Indicates whether the MetaMask extension is installed in the browser.
     * A `null` value should be used when loading the component.
     */
    export let hasMetaMask: boolean | null = null;

    export let account: string | null = null;

    async function connectToMetaMask() {
        await window.ethereum.enable();
    }
</script>

{#if hasMetaMask === null}
    <InlineLoading description="Loading..." />
{:else if !hasMetaMask}
    <Link href="https://metamask.io/download" target="_blank">
        Install MetaMask
    </Link>
{:else if account === null}
    <button on:click="{connectToMetaMask}">Connect to MetaMask</button>
{:else}
    <Tag type="cool-gray">{shortAccount(account)}</Tag>
{/if}
