<script lang="ts">
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderUtilities,
        SideNav,
        SideNavItems,
        SideNavLink,
        SkipToContent,
        Tag,
    } from "carbon-components-svelte";
    import { shortAccount } from "./net/shortAccount";

    export let renPoolAddr: string;
    export let selectedAddress: string | null = null;

    let isSideNavOpen = false;
    let links = [
        { href: "/", text: "Home" },
        { href: `/pools/${renPoolAddr}/deposit`, text: "Deposit" },
        { href: `/pools/${renPoolAddr}/withdraw`, text: "Withdraw" },
        { href: "/howto", text: "How To" },
    ];
</script>

<Header
    company="Ren"
    platformName="Community Pools"
    expandedByDefault="{false}"
    bind:isSideNavOpen
>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        {#each links as link}
            <HeaderNavItem href="{link.href}" text="{link.text}" />
        {/each}
    </HeaderNav>
    <HeaderUtilities>
      <div class="flex items-center px-3">
        <Tag type="cool-gray">
        {selectedAddress != null ? shortAccount(selectedAddress) : ''}
        </Tag>
      </div>
    </HeaderUtilities>
</Header>

<SideNav bind:isOpen="{isSideNavOpen}">
    <SideNavItems>
        {#each links as link}
            <SideNavLink href="{link.href}" text="{link.text}" />
        {/each}
    </SideNavItems>
</SideNav>
