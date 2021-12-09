<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { setContext } from "svelte";
    import EtherscanLink from "./EtherscanLink.svelte";

    const ETHERSCAN = "https://kovan.etherscan.io/address/";
    setContext("etherscan", ETHERSCAN);
</script>

<Meta title="$lib/EtherscanLink" component={EtherscanLink} argTypes={{}} />

<Template let:args>
    <p>Using config: {ETHERSCAN}</p>
    <EtherscanLink {...args} />
</Template>

<Story name="Empty" args={{}} />

<Story
    name="Address -- RenPool"
    args={{
        address: "0xf1e98770ab8ed1364371b8c7dbda56633f7cb6a9",
    }}
/>
