<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Header from "./Header.svelte";
</script>

<Meta title="$lib/Header" component="{Header}" argTypes="{{}}" />

<Template let:args>
    <Header renPoolAddr="0x1234" {...args} />
</Template>

<Story name="Default" />
