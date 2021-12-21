<script lang="ts">
    import { InlineNotification } from "carbon-components-svelte";
    import Addresses from "./Addresses.svelte";
    import Stats from "./Stats.svelte";
    import Network from "./Network.svelte";

    export let chain:
        | { isWrong: false }
        | { isWrong: true; shouldConnectTo: string };

    export let stats: PropsOf<typeof Stats> | null = null;
    export let addresses: PropsOf<typeof Addresses> | null = null;
    export let network: PropsOf<typeof Network> | null = null;
</script>

<main class="container bg-indigo-50 px-8 py-8 mx-auto">
    {#if chain.isWrong}
        <InlineNotification>
            <strong slot="title">Incorrect network selected: </strong>
            <span slot="subtitle">
                Your MetaMask is connected to network different from the network
                this site is using. Please change your network to
                <strong>{chain.shouldConnectTo}</strong>.
            </span>
        </InlineNotification>
    {/if}

    <slot />

    <div class="flex flex-col gap-10">
        {#if stats}
            <Stats {...stats} />
        {:else}
            <div>Could not load stats</div>
        {/if}
        {#if addresses}
            <Addresses {...addresses} />
        {/if}
        {#if network}
            <Network {...network} />
        {/if}
    </div>
</main>
