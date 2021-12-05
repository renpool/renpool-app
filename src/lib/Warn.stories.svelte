<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
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

<Story name="Content" args={{}}
  ><Warn title="Your Warning Message">Something went south</Warn></Story
>

<Story name="Long Content" args={{}}
  ><Warn title="Your Warning Message">{"Something went south ".repeat(5)}</Warn
  ></Story
>
