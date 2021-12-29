<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Header from "./Header.svelte";
    import Wallet from "./Wallet.svelte";
</script>

<Meta title="$lib/Header" component="{Header}" argTypes="{{}}" />

<Template let:args>
    <Header renPoolAddr="0x1234" {...args} />
</Template>

<Story name="No wallet" />

<Story name="Loading MetaMask">
    <Header renPoolAddr="0x1234">
        <Wallet />
    </Header>
</Story>

<Story name="MetaMask not installed">
    <Header renPoolAddr="0x1234">
        <Wallet hasMetaMask="{false}" />
    </Header>
</Story>

<Story name="MetaMask installed">
    <Header renPoolAddr="0x1234">
        <Wallet hasMetaMask="{true}" />
    </Header>
</Story>

<Story name="MetaMask connected" args="{{}}">
    <Header renPoolAddr="0x1234">
        <Wallet hasMetaMask="{true}" selectedAddress="0xasdf" />
    </Header>
</Story>
