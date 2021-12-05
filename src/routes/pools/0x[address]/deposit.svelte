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
	import { NETWORK, TENS } from "$lib/config";

	import { deployments, IERC20Standard, RenPool } from "renpool-contracts";
	import { BigNumber, Contract, providers } from "ethers";

	export let address: string;

	let amount: number | null = null;

	async function handleApprove() {
		const provider = new providers.Web3Provider(window.ethereum as any);
		const signer = provider.getSigner();

		const renToken = new Contract(
			deployments.kovan.renTokenAddr,
			IERC20Standard.abi,
			signer
		);
		(
			await renToken.approve(NETWORK.contracts.REN_POOL, getAmount(), {
				gasLimit: 200000,
			})
		).wait();
	}

	async function handleDeposit() {
		const provider = new providers.Web3Provider(window.ethereum as any);
		const signer = provider.getSigner();

		const renPool = new Contract(
			NETWORK.contracts.REN_POOL,
			RenPool.abi,
			signer
		);
		(await renPool.deposit(getAmount(), { gasLimit: 200000 })).wait();
	}

	function getAmount() {
		return BigNumber.from(amount).mul(TENS);
	}
</script>

<svelte:head>
	<title>Deposit | RenPool</title>
</svelte:head>

<h1>Deposit</h1>

<div>Using address {address}</div>

<input bind:value={amount} />

<button on:click={handleApprove}>Approve</button>

<button on:click={handleDeposit}>Deposit</button>
