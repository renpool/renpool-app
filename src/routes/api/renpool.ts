import { NETWORK } from '$lib/config';
import { Contract, providers } from "ethers";
import { RenPool } from "renpool-contracts";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const provider = new providers.JsonRpcProvider(import.meta.env.VITE_JSON_RPC_PROVIDER_URL);

	const contract = new Contract(
		NETWORK.contracts.REN_POOL,
		RenPool.abi,
		provider
	);

	try {
		const owner = await contract.owner();
		const nodeOperator = await contract.nodeOperator();
		const isLocked = await contract.isLocked();
		const totalPooled = (await contract.totalPooled()).toString();

		return {
			body: {
				owner,
				nodeOperator,
				isLocked,
				totalPooled,
			}
		}
	} catch (err) {
		return {
			status: 503,
			body: {
				message: err,
			}
		}
	}
}