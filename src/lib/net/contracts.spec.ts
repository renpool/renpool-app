/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { providers, Wallet } from "ethers";
import type { ExternalProvider } from "@ethersproject/providers";
import { Contracts } from "./contracts";
import { deployments } from "renpool-contracts";

describe("contracts", () => {
    const network = {
        renPoolAddr: "0xbf115a5538290d234fa31e917241a58a20a847bc",
        renTokenAddr: deployments.kovan.renTokenAddr,
    };

    const provider = new providers.JsonRpcProvider("http://127.0.0.1:8545");

    it("changes count when button is clicked", async () => {
        const { renToken } = Contracts(network, provider);

        let x = await renToken.poolAllowanceFor(
            "0xbF115A5538290D234fA31e917241a58A20a847Bc"
        );
        console.log(x);

        const b = await renToken.balanceOf(
            "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"
        );
        console.log(b);
    });
});
