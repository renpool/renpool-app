<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }) {
        // const a = [fetch("/api/renpool"), fetch("/api/network")];
        const a = [fetch("/api/renpool_factory"), fetch("/api/network")];
        const res = [await a[0], await a[1]];

        if (res[0].ok && (await res[1]).ok) {
            const json = [await res[0].json(), await res[1].json()];
        console.log(JSON.stringify(json, null, 2))
        console.log(json[0])
        console.log(json[1])
            return {
                props: {
                  owner: json[0].owner,
                  pools: json[0].pools,
                    // stats: json[0],
                    // addresses: json[0],
                    network: json[1],
                },
            };
        }

        return {
            status: 500,
            error: new Error(
                `Could not load ${JSON.stringify(await res[0].json())}`
            ),
        };
    }
</script>

<script lang="ts">
    import "../app.css";
    import "carbon-components-svelte/css/g100.css";

    import { wallet } from "$lib/net/wallet";
    import Header from "$lib/Header.svelte";
    import Main from "$lib/Main.svelte";
    import Footer from "$lib/Footer.svelte";
    import Wallet from "$lib/Wallet.svelte";
    import { NETWORK } from "./_config";
    import { Contracts } from "$lib/net/contracts";
    import { setContext } from "svelte";
    import { providers } from "ethers";

    export let owner: string = "";
    export let pools: [] = [];
    // export let stats: PropsOf<typeof Main>["stats"] | null = null;
    // export let addresses: PropsOf<typeof Main>["addresses"] | null = null;
    export let network: PropsOf<typeof Main>["network"] | null = null;

    setContext("contracts", () =>
    // why passing contract as params?
        Contracts({
          renTokenAddr: NETWORK.contracts.REN_TOKEN,
          darknodeRegistryAddr: NETWORK.contracts.DARKNODE_REGISTRY_STORE,
          darknodePaymentAddr: NETWORK.contracts.DARKNODE_PAYMENT,
          claimRewardsAddr: NETWORK.contracts.CLAIM_REWARDS,
          gatewayRegistryAddr: NETWORK.contracts.GATEWAY_REGISTRY,
          renPoolFactoryAddr: NETWORK.contracts.REN_POOL_FACTORY,
        },
            new providers.Web3Provider(window.ethereum as any)
        )
    );
    setContext("etherscan", NETWORK.etherscan);
</script>

<Header renPoolAddr="{NETWORK.contracts.REN_POOL_FACTORY}">
    <Wallet {...$wallet} />
</Header>
<Main
    chain="{$wallet.isWrongChain
        ? { isWrong: true, shouldConnectTo: NETWORK.name }
        : { isWrong: false }}"
    network="{network}"
>
    <slot />
</Main>
<p>Owner: {owner}</p>
<p>Pools: {JSON.stringify(pools)}</p>
<Footer />
