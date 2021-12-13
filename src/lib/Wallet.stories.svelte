<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

    import Wallet from "./Wallet.svelte";
</script>

<Meta title="$lib/Wallet" component="{Wallet}" argTypes="{{}}" />

<Template let:args>
    <Wallet {...args} />
</Template>

<Story name="Loading MetaMask" args="{{}}" />

<Story
    name="MetaMask not installed"
    args="{{
        hasMetaMask: false,
    }}"
/>

<Story
    name="MetaMask installed"
    args="{{
        hasMetaMask: true,
    }}"
/>

<Story
    name="MetaMask connected"
    args="{{
        hasMetaMask: true,
        chainId: 99,
        selectedAddress: '0xasdf',
    }}"
/>

<Story
    name="MetaMask w/balance"
    args="{{
        hasMetaMask: true,
        chainId: 99,
        selectedAddress: '0xasdf',
        balance: '10000',
    }}"
/>
