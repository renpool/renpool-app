<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const url = `/api/renpoolinfo`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					...(await res.json()),
				},
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	}
</script>

<script lang="ts">
	import "../app.css";

	import { wallet } from "$lib/wallet";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import Wallet from "$lib/Wallet.svelte";
	import Addresses from "$lib/Addresses.svelte";
	import Stats from "$lib/Stats.svelte";
	import Warn from "$lib/Warn.svelte";
	import { NETWORK } from "$lib/config";

	export let owner: string;
	export let nodeOperator: string;
	export let totalPooled: string;
	export let isLocked: boolean;
	export let userBalance: string;
</script>

<Header>
	<Wallet />
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
		<Stats {totalPooled} {isLocked} {userBalance} />
		<Addresses {owner} {nodeOperator} />
	</div>
</main>

<Footer />
