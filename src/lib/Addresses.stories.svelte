<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Addresses from "./Addresses.svelte";
</script>

<Meta title="$lib/Addresses" component={Addresses} argTypes={{}} />

<Template let:args>
    <Addresses {...args} />
</Template>

<Story
    name="Default"
    args={{
        owner: "0x5678",
        nodeOperator: "0x1234",
    }}
/>