<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Howto from "./Howto.svelte";
    import Step from "./HowtoStep.svelte";

    let steps = [];

    function handleClick() {
        steps = [...steps, "new step"];
    }
</script>

<Meta title="$lib/Howto" component="{Howto}" argTypes="{{}}" />

<Template let:args>
    <Howto {...args} />
</Template>

<Story name="Empty" args="{{}}" />

<Story
    name="No content"
    args="{{
        title: "Here's your howto title",
    }}"
/>

<Story name="With Content" args="{{}}">
    <Howto title="Instructions">
        <Step title="Should be Step #1">
            <div slot="desc">Something about what to do in this step #1.</div>
        </Step>
        <Step title="Should be Step #2">
            <div slot="desc">Something about what to do in this step #2.</div>
        </Step>
        <Step title="Should be Step #2">
            <div slot="desc">Something about what to do in this step #3.</div>
        </Step>
    </Howto>
</Story>

<Story name="Multiple Howtos" args="{{}}">
    <button on:click="{handleClick}"
        >Add a new step, it keeps the right context</button
    >
    <Howto title="Instructions #1">
        <Step title="Should be Step #1.1">
            <div slot="desc">Something about what to do in this step #1.</div>
        </Step>
        {#each steps as step}
            <Step title="{step}" />
        {/each}
    </Howto>
    <Howto title="Instructions #2">
        <Step title="Should be Step #2.1">
            <div slot="desc">Something about what to do in this step #1.</div>
        </Step>
        <Step title="Should be Step #2.2">
            <div slot="desc">Something about what to do in this step #2.</div>
        </Step>
        <Step title="Should be Step #2.3">
            <div slot="desc">Something about what to do in this step #3.</div>
        </Step>
    </Howto>
</Story>
