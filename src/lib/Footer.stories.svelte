<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Footer from "./Footer.svelte";
</script>

<Meta title="$lib/Footer" component={Footer} argTypes={{}} />

<Template let:args>
    <Footer {...args} />
</Template>

<Story name="Default" args={{}} />
