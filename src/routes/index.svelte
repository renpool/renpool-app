<!-- <script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ page: { params } }) => {
        return {
            props: {
                renPoolAddr: params.address,
            },
        };
    };
</script> -->
<script lang="ts">
    import Deposit from "$lib/Deposit.svelte";
    import { getContext } from "svelte";
    import type { Contracts } from "$lib/net/contracts";

    export let renPoolAddr: string;

    const contracts: () => ReturnType<typeof Contracts> =
        getContext("contracts");
</script>

<svelte:head>
    <title>Home | RenPool</title>
</svelte:head>

<Deposit renPoolAddr="{renPoolAddr}" contracts="{contracts}" />
