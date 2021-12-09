<script lang="ts">
    import { BigNumber } from "ethers";
    import { TENS } from "./net/bond";
    import type { Contracts } from "./net/contracts";

    /**
     * The address of the specific _RenPool_ to interact with.
     *
     * Usually this comes from the URL being visited, _.e.g._,
     * `https://somedomain/pools/<renPoolAddress>/deposit`.
     *
     * On this component, it is used for informative purposes only.
     */
    export let renPoolAddr: Address;

    export let contracts: () => ReturnType<typeof Contracts>;

    /**
     * The amount that the user would want to either approve to
     * the _RenToken_ or deposit into the _RenPool_.
     */
    export let amount: string | null = null;

    let allowance: string;

    async function onApproveClick() {
        await contracts().renToken.approve(renPoolAddr, getAmount());
    }

    async function onDepositClick() {
        await contracts().renPool(renPoolAddr).deposit(getAmount());
    }

    async function onCheckForAllowance() {
        allowance = await contracts().renToken.poolAllowanceFor(renPoolAddr);
    }

    function getAmount() {
        return BigNumber.from(amount).mul(TENS);
    }
</script>

<!-- 
    @component

    Allows the user to enter an amount to be either approved or
    deposited into the _RenPool_.

 -->

<h1>Deposit</h1>

<div>Using RenPool address {renPoolAddr}</div>

<input bind:value={amount} />

<button on:click={onApproveClick}>Approve</button>

<button on:click={onDepositClick}>Deposit</button>

<button on:click={onCheckForAllowance}>{allowance}</button>
