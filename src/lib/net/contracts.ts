import { BigNumber, Contract, providers } from "ethers";
import { IERC20Standard, RenPool } from "renpool-contracts";

export type Network = {
    renTokenAddr: Address;
};

export function Contracts(
    { renTokenAddr }: Network,
    provider: providers.JsonRpcProvider
) {
    const signer = () => provider.getSigner();

    return {
        renToken: {
            contract() {
                return new Contract(renTokenAddr, IERC20Standard.abi, signer());
            },

            async balanceOf(account: Address) {
                return this.contract().balanceOf(account);
            },

            async poolAllowanceFor(renPoolAddr: Address) {
                return this.contract().allowance(
                    await signer().getAddress(),
                    renPoolAddr
                );
            },

            async approve(renPoolAddr: Address, amount: BigNumber) {
                const tx = await this.contract().approve(renPoolAddr, amount, {
                    gasLimit: 200000,
                });
                await tx.wait();
            },
        },

        renPool: function (renPoolAddr: Address) {
            function contract() {
                return new Contract(renPoolAddr, RenPool.abi, signer());
            }

            return {
                /**
                 *
                 * @param amount The amount to deposit into the RenPool of `renPoolAddr`.
                 */
                async deposit(amount: BigNumber) {
                    const tx = await contract().deposit(amount, {
                        gasLimit: 200000,
                    });
                    await tx.wait();
                },
            };
        },
    };
}
