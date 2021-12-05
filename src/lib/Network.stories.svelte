<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Network from "./Network.svelte";
</script>

<Meta title="$lib/Network" component={Network} argTypes={{}} />

<Template let:args>
    <Network {...args} />
</Template>

<Story
    name="Empty"
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
