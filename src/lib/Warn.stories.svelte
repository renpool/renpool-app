<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { within, userEvent, waitFor } from "@storybook/testing-library";

  import Warn from "./Warn.svelte";
</script>

<Meta
  title="$lib/Warn"
  component={Warn}
  argTypes={{
    title: { control: "text" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Warn {...args} on:click={args.onClick} />
</Template>

<Story name="Empty" args={{}} />

<Story
  name="No Content"
  args={{
    title: "Your Warning Message",
  }}
/>

<Story name="Content" args={{}}>
  <Warn title="Your Warning Message">Something went south</Warn>
</Story>

<Story name="Long Content" args={{}}>
  <Warn title="Your Warning Message">{"Something went south ".repeat(5)}</Warn>
</Story>

<Story
  name="Dismiss Content"
  args={{}}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await new Promise((r) => setTimeout(r, 2000));
    userEvent.click(canvas.getByRole("button"));
  }}
>
  <Warn title="Your Warning Message">{"Something went south ".repeat(5)}</Warn>
  <p>Warn message should be dismissed after 2s.</p>
</Story>
