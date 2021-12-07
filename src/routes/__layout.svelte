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
	import Footer from "$lib/Footer.svelte";
	import Wallet from "$lib/Wallet.svelte";
	import Addresses from "$lib/Addresses.svelte";
	import Stats from "$lib/Stats.svelte";
	import Warn from "$lib/Warn.svelte";
	import { NETWORK } from "$lib/net/config";
	import Network from "$lib/Network.svelte";

	config.renPool = NETWORK.contracts.REN_POOL;

	type PropsOf<
		Component extends new (options: { target: any; props: any }) => any
	> = NonNullable<ConstructorParameters<Component>[0]["props"]> | null;

	export let stats: PropsOf<typeof Stats> = null;
	export let addresses: PropsOf<typeof Addresses> = null;
	export let network: PropsOf<typeof Network> = null;
</script>

<Header>
	<Wallet {...$wallet} />
</Header>

<main class="container bg-indigo-50 px-8 py-8 mx-auto">
	{#if $wallet.isWrongChain}
		<Warn title="Incorrect network selected">
			Your MetaMask is connected to network different from the network
			this site is using. Please change your network to
			<span class="font-bold">{NETWORK.name}</span>.
		</Warn>
	{/if}

	<slot />

	<div class="flex flex-col gap-10">
		{#if stats}
			<Stats {...stats} />
		{/if}
		{#if addresses}
			<Addresses {...addresses} />
		{/if}
		{#if network}
			<Network {...network} />
		{/if}
	</div>
</main>

<Footer />
