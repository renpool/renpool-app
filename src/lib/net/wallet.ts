import { writable } from "svelte/store";
import { Contract, ethers } from "ethers";
import { deployments, IERC20Standard } from "renpool-contracts";
import { DECIMALS } from "./bond";
import { browser } from "$app/env";

const CHAIN_ID = parseInt(import.meta.env.VITE_CHAIN_ID);

async function balanceOf(
    address: string,
    provider: ethers.providers.Web3Provider
) {
    const renTokenAddr = deployments.kovan.renTokenAddr;
    const contract = new Contract(renTokenAddr, IERC20Standard.abi, provider);

    return contract.balanceOf(address);
}

class Wallet {
    hasMetaMask: boolean | null = null;
    chainId: number | null = null;
    isWrongChain = false;
    selectedAddress: string | null = null;
    balance: string | null = null;

    setHasMetaMask(hasMetaMask: boolean) {
        this.hasMetaMask = hasMetaMask;
        return this;
    }

    setChainId(chainId: string | null) {
        this.chainId = chainId ? parseInt(chainId) : null;

        if (this.chainId !== CHAIN_ID) {
            this.isWrongChain = true;
            console.warn(
                `Wallet provider's chainId ${this.chainId} does not match RenPool's chainId ${CHAIN_ID}`
            );
        } else {
            this.isWrongChain = false;
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

export const wallet = writable(new Wallet());

if (browser) {
    const ethereum = window.ethereum;

    const updateBalance = () => {
        if (!ethereum.chainId) {
            console.debug(
                `Chain Id should be set, but it is ${ethereum.chainId}`
            );
            return;
        }

        if (!ethereum.selectedAddress) {
            console.debug(
                `Selected Address should be set, but it is ${ethereum.selectedAddress}`
            );
            return;
        }

        if (parseInt(ethereum.chainId) === CHAIN_ID) {
            const provider = new ethers.providers.Web3Provider(ethereum as any);
            balanceOf(ethereum.selectedAddress, provider).then(balance => {
                balance = ethers.utils.formatUnits(balance, DECIMALS);
                wallet.update(w => w.setBalance(balance));
            });
        } else {
            wallet.update(w => w.setBalance(null));
        }
    };

    if (ethereum === undefined) {
        wallet.update(w => w.setHasMetaMask(false));
    } else {
        wallet.update(w => w.setHasMetaMask(true));

        console.debug(
            `MetaMask installed. Current chainId:${ethereum.chainId}`
        );
        wallet.update(w => w.setChainId(ethereum.chainId));

        if (ethereum.selectedAddress !== null) {
            wallet.update(w => w.setSelectedAddress(ethereum.selectedAddress));
            updateBalance();
        }

        ethereum.on("chainChanged", chainId => {
            console.debug(`ethereum.chainChanged: ${chainId}`);
            wallet.update(w => w.setChainId(chainId as any));
            updateBalance();
        });

        ethereum.on("accountsChanged", accounts => {
            console.debug(`ethereum.accountChanged: ${accounts}`);
            if ((accounts as any).length === 0) {
                wallet.update(w => w.setSelectedAddress(null).setBalance(null));
            } else {
                wallet.update(w =>
                    w.setSelectedAddress(ethereum.selectedAddress)
                );
                updateBalance();
            }
        });
    }
}
