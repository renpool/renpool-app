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
		const renToken = getRenToken();
		(
			await renToken.approve(NETWORK.contracts.REN_POOL, getAmount(), {
				gasLimit: 200000,
			})
		).wait();
	}

	function getRenToken() {
		const provider = new providers.Web3Provider(window.ethereum as any);
		const signer = provider.getSigner();

		return new Contract(
			deployments.kovan.renTokenAddr,
			IERC20Standard.abi,
			signer
		);
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

	let allowance;

	async function checkForAllowance() {
		const provider = new providers.Web3Provider(window.ethereum as any);
		const signer = provider.getSigner();
		const renToken = getRenToken();
		// if (renToken == null || owner == null || spender == null) return false;
		// if (value.lt(BigNumber.from(1))) return false;
		allowance = await renToken.allowance(
			await signer.getAddress(),
			NETWORK.contracts.REN_POOL
		);
		// return allowance.sub(value).gte(BigNumber.from(0));
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

<button on:click={checkForAllowance}>{allowance}</button>
