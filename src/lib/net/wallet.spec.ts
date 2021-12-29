/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
// import { render, fireEvent } from '@testing-library/svelte';

import { initializeProvider } from "@metamask/providers";

jest.setTimeout(10000);
import { Duplex } from "stream";
// import { checkForAllowance } from './deposit';
import { Contract, providers, Wallet } from "ethers";
import { deployments, IERC20Standard } from "renpool-contracts";
import type { ExternalProvider } from "@ethersproject/providers";

export default class DuplexStream extends Duplex {
    constructor() {
        super({
            objectMode: true,
        });
    }

    pushToSubstream(name: string, data: unknown) {
        console.log("push");
        console.log(name);
        this.push({ name, data });
    }

    _write(_data: unknown, _encoding: string, callback: any) {
        console.log(_data);
        callback();
    }

    _read() {
        return undefined;
    }
}
describe("Warn", () => {
    it("changes count when button is clicked", async () => {
        // Create a stream to a remote provider:
        const metamaskStream = new DuplexStream();
        metamaskStream.on("data", data => console.log(data));

        // this will initialize the provider and set it as window.ethereum
        // initializeProvider({
        //     connectionStream: metamaskStream,
        // });
        // Create a stream to a remote provider:
        // const { ethereum } = window;
        // console.log(ethereum)
        // const w = new Wallet(Wallet.createRandom(), rpc);
        // const provider = new providers.Web3Provider(window.ethereum as any);
        // const ext: ExternalProvider = {
        //     isMetaMask: true,
        //     isStatus: true,
        //     host: 'adfadsf',
        //     path: '23123133',
        //     request({ method, params }): Promise<any> {
        //         return rpc.send(method, params as any)
        //     }
        // };
        // window.ethereum = ext as any;
        // const provider = new providers.Web3Provider(ext);
        // const signer = provider.getSigner();
        // let x = await signer.getAddress();
        // console.log(x);
    });
});
