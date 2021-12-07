<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import { setContext } from "svelte";
    import Step from "./HowtoStep.svelte";

    setContext("step", { count: 99 });
</script>

<Meta title="$lib/HowtoStep" component={Step} argTypes={{}} />

<Template let:args>
    <Step {...args} />
</Template>

<Story name="Empty" args={{}} />

<Story
    name="No content"
    args={{
        title: "Here's your step title",
    }}
/>

<Story name="With Content" args={{}}>
    <Step title="Here's your step title">
        <div slot="desc">Something about what to do in this step.</div>
    </Step>
</Story>
