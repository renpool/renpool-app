<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Main from "./Main.svelte";
</script>

<Meta title="$lib/Main" component={Main} argTypes={{}} />

<Template let:args>
    <Main {...args} />
</Template>

<Story
    name="!isWrong"
    args={{
        chain: { isWrong: false },
        stats: {},
        addresses: {},
        network: {},
    }}
/>

<Story
    name="isWrong|localnet"
    args={{
        chain: { isWrong: true, shouldConnectTo: "localnet" },
        stats: {},
        addresses: {},
        network: {},
    }}
/>

<Story
    name="no stats"
    args={{
        chain: { isWrong: false },
        addresses: {},
        network: {},
    }}
/>
