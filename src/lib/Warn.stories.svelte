<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Warn from "./Warn.svelte";
  // import
  // import "../app.css";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="$lib/Warn"
  component={Warn}
  argTypes={{
    title: { control: "text" },
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Warn {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
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
