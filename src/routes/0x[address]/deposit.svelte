<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ page: { params } }) => {
		return {
			props: {
				address: params.address,
			},
		};
	};
</script>

<script lang="ts">
	export let address: string;
</script>

<svelte:head>
	<title>Deposit | RenPool</title>
</svelte:head>

<h1>Deposit</h1>

<div>Using address {address}</div>
