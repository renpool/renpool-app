<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Deposit from "./Deposit.svelte";
</script>

<Meta title="$lib/Deposit" component={Deposit} argTypes={{}} />

<Template let:args>
    <Deposit {...args} />
</Template>

<Story
    name="Basic"
    args={{
        address: "0xf1e98770ab8ed1364371b8c7dbda56633f7cb6a9",
    }}
>
    <Deposit
        renPoolAddr="0xf1e98770ab8ed1364371b8c7dbda56633f7cb6a9"
        onApproveClick={() => {}}
        onDepositClick={() => {}}
        onCheckForAllowance={() => {}}
    />
</Story>
