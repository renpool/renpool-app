<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Stats from "./Stats.svelte";
</script>

<Meta title="$lib/Stats" component="{Stats}" argTypes="{{}}" />

<Template let:args>
    <Stats {...args} />
</Template>

<Story
    name="Unlocked"
    args="{{
        totalPooled: '100000',
        isLocked: false,
        userBalance: '1000',
    }}"
/>

<Story
    name="Locked"
    args="{{
        totalPooled: '100000',
        isLocked: true,
        userBalance: '1000',
    }}"
/>
