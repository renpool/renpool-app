import { NETWORK } from "../_config";
import { Contract, providers } from "ethers";
import { RenPoolFactory } from "renpool-contracts";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const provider = new providers.JsonRpcProvider(
        import.meta.env.VITE_JSON_RPC_PROVIDER_URL
    );

    const contract = new Contract(
        NETWORK.contracts.REN_POOL_FACTORY,
        RenPoolFactory.abi,
        provider
    );

    try {
        const owner = await contract.owner();
        const pools = await contract.getPools();

        return {
            body: {
                owner,
                pools,
            },
        };
    } catch (err) {
        return {
            status: 503,
            body: {
                message: err,
            },
        };
    }
}
