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
    0x123...456
  </Chip>
</Story>

<Story
  name="info"
  args={{
    variant: 'info',
  }}
>
  <Chip variant="info">
    0x123...456
  </Chip>
</Story>

<Story
  name="success"
  args={{
    variant: 'success',
  }}
>
  <Chip variant="success">
    0x123...456
  </Chip>
</Story>

<Story
  name="warning"
  args={{
    variant: 'warning',
  }}
>
  <Chip variant="warning">
    0x123...456
  </Chip>
</Story>

<Story
  name="danger"
  args={{
    variant: 'danger',
  }}
>
  <Chip variant="danger">
    0x123...456
  </Chip>
</Story>

<Story
  name="danger class text-xs"
  args={{
    variant: 'danger',
    class: 'text-xs'
  }}
>
  <Chip variant="danger" class="text-xs">
    0x123...456
  </Chip>
</Story>
