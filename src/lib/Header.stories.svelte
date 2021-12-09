<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Header from "./Header.svelte";
</script>

<Meta title="$lib/Header" component={Header} argTypes={{}} />

<Template let:args>
    <Header renPoolAddr="0x1234" {...args} />
</Template>

<Story
    name="Unlocked"
    args={{
        totalPooled: "100000",
        isLocked: false,
        userBalance: "1000",
    }}
/>

<Story
    name="Locked"
    args={{
        totalPooled: "100000",
        isLocked: true,
        userBalance: "1000",
    }}
/>
