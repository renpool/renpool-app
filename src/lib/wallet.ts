import { writable } from "svelte/store";
import { Contract, ethers } from "ethers";
import { deployments, IERC20Standard } from "renpool-contracts";
import { DECIMALS } from "$lib/config";
import { browser } from '$app/env';

const CHAIN_ID = import.meta.env.VITE_CHAIN_ID.toString();

async function balanceOf(
    address: string,
    provider: ethers.providers.Web3Provider
) {
    const renTokenAddr = deployments.kovan.renTokenAddr;
    const contract = new Contract(
        renTokenAddr,
        IERC20Standard.abi,
        provider
    );

    return contract.balanceOf(address);
}

class Wallet {
    hasMetaMask: boolean | null = null;
    chainId: string | null = null;
    selectedAddress: string | null = null;
    balance: string | null = null;

    setHasMetaMask(hasMetaMask: boolean) {
        this.hasMetaMask = hasMetaMask;
        return this;
    }

    setChainId(chainId: string) {
        this.chainId = parseInt(chainId).toString();

        if (this.chainId !== CHAIN_ID) {
            console.warn(
                `Wallet provider's chainId ${this.chainId} does not match RenPool's chainId ${CHAIN_ID}`
            );
        }
        return this;
    }

    setSelectedAddress(selectedAddress: string | null) {
        this.selectedAddress = selectedAddress;
        return this;
    }

    setBalance(balance: string | null) {
        this.balance = balance;
        return this;
    }

}

function updateBalance() {
    const ethereum = window.ethereum;

    console.assert(ethereum.chainId);
    console.assert(ethereum.selectedAddress);

    if (parseInt(ethereum.chainId).toString() === CHAIN_ID) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        balanceOf(ethereum.selectedAddress, provider).then(balance => {
            balance = ethers.utils.formatUnits(balance, DECIMALS);
            wallet.update(w => w.setBalance(balance));
        })
    } else {
        wallet.update(w => w.setBalance(null));
    }
}

export const wallet = writable(new Wallet());

if (browser) {

    const ethereum = window.ethereum;

    if (ethereum === undefined) {
        wallet.update(w => w.setHasMetaMask(false));
    } else {
        wallet.update(w => w.setHasMetaMask(true));

        console.debug(`MetaMask installed. Current chainId:${ethereum.chainId}`);
        wallet.update(w => w.setChainId(ethereum.chainId));

        if (ethereum.selectedAddress !== null) {
            wallet.update(w => w.setSelectedAddress(ethereum.selectedAddress));
            updateBalance();
        }

        ethereum.on("chainChanged", (chainId) => {
            console.debug(`ethereum.chainChanged: ${chainId}`);
            wallet.update(w => w.setChainId(chainId));
            updateBalance();
        });

        ethereum.on("accountsChanged", (accounts) => {
            console.debug(`ethereum.accountChanged: ${accounts}`);
            if (accounts.length === 0) {
                wallet.update(w => w.setSelectedAddress(null).setBalance(null));
            } else {
                wallet.update(w => w.setSelectedAddress(ethereum.selectedAddress));
                updateBalance();
            }
        });
    }

}