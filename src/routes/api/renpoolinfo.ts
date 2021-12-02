import { NETWORK } from '$lib/config';
import { Contract, ethers } from "ethers";
import { RenPool } from "renpool-contracts";

const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;
const INFURA_PROJECT_ID = import.meta.env.INFURA_PROJECT_ID;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	return {
		body: await getRenPoolInfo()
	}
}

async function getRenPoolInfo() {
	const provider = new ethers.providers.InfuraProvider(NETWORK.name.toLowerCase(), INFURA_PROJECT_ID);

	const contract = new Contract(
		NETWORK.contracts.REN_POOL,
		RenPool.abi,
		provider
	);

	const owner = await contract.owner();
	const nodeOperator = await contract.nodeOperator();
	const isLocked = await contract.isLocked();
	const totalPooled = (await contract.totalPooled()).toString();

	return {
		owner,
		nodeOperator,
		isLocked,
		totalPooled,
	};

}