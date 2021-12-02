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

	export let owner: string;
	export let nodeOperator: string;
	export let totalPooled: string;
	export let isLocked: boolean;
	export let userBalance: string;

	const CHAIN_ID = import.meta.env.VITE_CHAIN_ID.toString();
</script>

<Header>
	<Wallet />
</Header>

<main class="container bg-indigo-50 px-8 py-8 mx-auto">
	{#if $wallet.chainId?.toString() !== CHAIN_ID}
		<Warn title="Incorrect network selected">
			Please change the network.
		</Warn>
	{/if}

	<slot />

	<div class="flex flex-col gap-10">
		<Stats {totalPooled} {isLocked} {userBalance} />
		<Addresses {owner} {nodeOperator} />
	</div>
</main>

<Footer />
