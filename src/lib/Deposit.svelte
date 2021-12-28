<script lang="ts">
    import { BigNumber, utils } from "ethers";
    import { createEventDispatcher } from "svelte";
    import {
        Form,
        FormGroup,
        NumberInput,
        Button,
    } from "carbon-components-svelte";

    import { TENS, DECIMALS } from "./net/bond";

    enum Actions {
        approve = "approve",
        deposit = "deposit",
    }
    /**
     * The address of the specific _RenPool_ to interact with.
     *
     * Usually this comes from the URL being visited, _.e.g._,
     * `https://somedomain/pools/<renPoolAddress>/deposit`.
     *
     * On this component, it is used for informative purposes only.
     */
    // export let renPoolAddr: Address;

    // export let contracts: () => ReturnType<typeof Contracts>;

    const dispatch = createEventDispatcher();

    export let approveDisabled = true;
    export let depositDisabled = true;
    export let balance: BigNumber;
    /**
     * The amount that the user would want to either approve to
     * the _RenToken_ or deposit into the _RenPool_.
     */
    let amount = 0;
    let _amount = BigNumber.from(0);
    let isValid = true;
    let errorMessage = "";

    // TODO: introduce isFormValid fn
    $: {
        console.log("amount", amount);
        _amount = BigNumber.from(utils.parseUnits(amount.toString(), DECIMALS)); // input * 10^18

        if (_amount.lt(BigNumber.from(1))) {
            isValid = false;
            errorMessage = "Please, enter a valid amount.";
        } else if (_amount.gt(balance)) {
            isValid = false;
            errorMessage = "Insufficient balance.";
        } else {
            isValid = true;
            errorMessage = "";
        }
    }

    function handleSubmit(action: keyof typeof Actions) {
        // const _amount = BigNumber.from(utils.parseUnits(amount.toString(), DECIMALS)); // input * 10^18
        console.log("action", action, _amount.toString());

        if (!isValid) return;

        dispatch(action, { amount: _amount });
    }
    // let allowance: string;

    // async function onApproveClick() {
    //     await contracts().renToken.approve(renPoolAddr, getAmount());
    // }

    // async function onDepositClick() {
    //     await contracts().renPool(renPoolAddr).deposit(getAmount());
    // }

    // async function onCheckForAllowance() {
    //     allowance = await contracts().renToken.poolAllowanceFor(renPoolAddr);
    // }

    // function getAmount() {
    //     return BigNumber.from(amount).mul(TENS);
    // }
</script>

<Form>
    <FormGroup>
        <NumberInput
            label="Amount of REN to deposit"
            invalid={isValid}
            invalidText="{errorMessage}"
            disabled="{approveDisabled && depositDisabled}"
            bind:value="{amount}"
        />
    </FormGroup>
    <Button
        type="button"
        disabled="{approveDisabled}"
        on:click="{() => {
            handleSubmit(Actions.approve);
        }}"
    >
        Approve
    </Button>
    <Button
        type="button"
        disabled="{depositDisabled}"
        on:click="{() => {
            handleSubmit(Actions.deposit);
        }}"
    >
        Deposit
    </Button>
</Form>

<!-- <script lang="ts">
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

<h1>Deposit</h1>

<div>Using RenPool address {renPoolAddr}</div>

<form>

<input bind:value="{amount}" />

<button on:click="{onApproveClick}">Approve</button>

<button on:click="{onDepositClick}">Deposit</button>

<button on:click="{onCheckForAllowance}">{allowance}</button>
</form>
-->
