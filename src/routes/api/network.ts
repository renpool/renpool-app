import { providers } from "ethers";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const providerURL = import.meta.env.VITE_JSON_RPC_PROVIDER_URL;
    const provider = new providers.JsonRpcProvider(providerURL);

    try {
        const network = await provider.getNetwork();

        return {
            body: {
                name: network.name,
                chainId: network.chainId,
                ensAddress: network.ensAddress,
                provider: new URL(providerURL).origin,
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
