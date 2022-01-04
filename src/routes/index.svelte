<script lang="ts">
    import {
      Button,
    } from "carbon-components-svelte";
    import Deposit from "$lib/Deposit.svelte";
    import { getContext } from "svelte";
    import type { Contracts } from "$lib/net/contracts";

    export let renPoolAddr: string;

    const contracts: () => ReturnType<typeof Contracts> = getContext("contracts");

    const handleDeploy = async () => {
        try {
          await contracts().renPoolFactory().deployNewPool();
        } catch (e) {
            alert(`Error during pool deployment, ${JSON.stringify(e, null, 2)}`);
        }
    };
</script>

<svelte:head>
    <title>Home | RenPool</title>
</svelte:head>

<Button on:click={handleDeploy}>
  Deploy new pool
</Button>
