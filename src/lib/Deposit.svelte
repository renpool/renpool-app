<script lang="ts">
    import { BigNumber, utils } from "ethers";
    	import { createEventDispatcher } from 'svelte';
    import {
    Form,
    FormGroup,
    NumberInput,
    Button,
  } from "carbon-components-svelte";

    import { TENS, DECIMALS } from "./net/bond";

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
    let invalid = false;
    let errorMessage = '';

    $: {
      console.log('amount', amount);
      _amount = BigNumber.from(utils.parseUnits(amount.toString(), DECIMALS)); // input * 10^18

      if (_amount.lt(BigNumber.from(1))) {
          invalid = true;
          errorMessage = "Please, enter a valid amount.";
      } else if (_amount.gt(balance)) {
          invalid = true;
          errorMessage = "Insufficient balance.";
      } else {
        invalid = false;
        errorMessage = ""
      }
    }


	function onSubmit(eventType: 'approve' | 'deposit') {
    // const _amount = BigNumber.from(utils.parseUnits(amount.toString(), DECIMALS)); // input * 10^18
    console.log('EventType', eventType, _amount.toString())

    if (invalid) return;

		dispatch(eventType, { amount: _amount });
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

    <!-- TODO: make sure amount is positive -->
  <NumberInput
    label="Amount of REN to deposit"
    {invalid}
    invalidText="{errorMessage}"
    disabled="{approveDisabled && depositDisabled}"
    bind:value="{amount}"
  />
    </FormGroup>
  <Button
    type="button"
    disabled="{approveDisabled}"
    on:click="{() => { onSubmit('approve') }}"
  >
    Approve
  </Button>
  <Button
    type="button"
    disabled="{depositDisabled}"
    on:click="{() => { onSubmit('deposit') }}"
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
