<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { BigNumber, utils } from "ethers";
    import Deposit from "./Deposit.svelte";
    import { DECIMALS } from "./net/bond";
</script>

<Meta title="$lib/Deposit" component="{Deposit}" argTypes="{{}}" />

<Template let:args>
    <Deposit {...args} />
</Template>

<Story
    name="Basic"
    args="{{
        address: '0xf1e98770ab8ed1364371b8c7dbda56633f7cb6a9',
    }}"
>
    <Deposit
        approveDisabled="{false}"
        depositDisabled="{true}"
        balance="{BigNumber.from(utils.parseUnits('1000', DECIMALS))}"
    />
</Story>
