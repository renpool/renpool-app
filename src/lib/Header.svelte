<script lang="ts">
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavItems,
        SideNavLink,
        SkipToContent,
    } from "carbon-components-svelte";

    export let renPoolAddr: string;

    let isSideNavOpen = false;
    let links = [
        { href: "/", text: "Home" },
        { href: `/pools/${renPoolAddr}/deposit`, text: "Deposit" },
        { href: `/pools/${renPoolAddr}/withdraw`, text: "Withdraw" },
        { href: "/howto", text: "How To" },
    ]
</script>

<Header company="RenPool" platformName="Community" bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        {#each links as link}
          <HeaderNavItem href="{link.href}" text={link.text} />
        {/each}
    </HeaderNav>
</Header>

<SideNav bind:isOpen="{isSideNavOpen}">
    <SideNavItems>
        {#each links as link}
          <SideNavLink href="{link.href}" text={link.text} />
        {/each}
    </SideNavItems>
</SideNav>
