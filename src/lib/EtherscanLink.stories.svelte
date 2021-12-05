<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import EtherscanLink from "./EtherscanLink.svelte";
</script>

<Meta title="$lib/EtherscanLink" component={EtherscanLink} argTypes={{}} />

<Template let:args>
    <EtherscanLink {...args} />
</Template>

<Story name="Empty" args={{}} />

<Story
    name="Address -- RenPool"
    args={{
        address: "0xf1e98770ab8ed1364371b8c7dbda56633f7cb6a9",
    }}
/>
