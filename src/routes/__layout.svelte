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
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import Wallet from "$lib/Wallet.svelte";
	import Addresses from "$lib/Addresses.svelte";
	import Stats from "$lib/Stats.svelte";
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
	<slot />

	<section>
		<Stats {totalPooled} {isLocked} {userBalance} />
		<Addresses {owner} {nodeOperator} />
	</section>
</main>

<Footer />
