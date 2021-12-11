<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Chip from './Chip.svelte'
</script>

<Meta title="$lib/Chip" component={Chip} argTypes={{}} />

<Template let:args>
  <Chip {...args} />
</Template>

<Story
  name="default"
  args={{
    variant: 'default',
  }}
>
  <Chip variant="default">
    <span>0x123...456</span>
  </Chip>
</Story>

<Story
  name="info"
  args={{
    variant: 'info',
  }}
>
  <Chip variant="info">
    <span>0x123...456</span>
  </Chip>
</Story>

<Story
  name="success"
  args={{
    variant: 'success',
  }}
>
  <Chip variant="success">
    <span>0x123...456</span>
  </Chip>
</Story>

<Story
  name="warning"
  args={{
    variant: 'warning',
  }}
>
  <Chip variant="warning">
    <span>0x123...456</span>
  </Chip>
</Story>

<Story
  name="danger"
  args={{
    variant: 'danger',
  }}
>
  <Chip variant="danger">
    <span>0x123...456</span>
  </Chip>
</Story>
