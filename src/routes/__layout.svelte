<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const a = [fetch("/api/renpool"), fetch("/api/network")];
		const res = [await a[0], await a[1]];

		if (res[0].ok && (await res[1]).ok) {
			const json = [await res[0].json(), await res[1].json()];
			return {
				props: {
					stats: json[0],
					addresses: json[0],
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

	import { wallet } from "$lib/net/wallet";
	import Header, { config } from "$lib/Header.svelte";
	import Main from "$lib/Main.svelte";
	import Footer from "$lib/Footer.svelte";
	import Wallet from "$lib/Wallet.svelte";
	import { NETWORK } from "$lib/net/config";

	config.renPool = NETWORK.contracts.REN_POOL;

	export let stats: PropsOf<typeof Main>["stats"] | null = null;
	export let addresses: PropsOf<typeof Main>["addresses"] | null = null;
	export let network: PropsOf<typeof Main>["network"] | null = null;
</script>

<Header>
	<Wallet {...$wallet} />
</Header>
<Main
	chain={$wallet.isWrongChain
		? { isWrong: true, shouldConnectTo: NETWORK.name }
		: { isWrong: false }}
	{stats}
	{addresses}
	{network}
>
	<slot />
</Main>
<Footer />
