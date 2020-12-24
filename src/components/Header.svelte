<script>
    import {
        SkipToContent,
        Header,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
    } from "carbon-components-svelte";
    let isSideNavOpen = false;
</script>

<Header
    company=""
    platformName="Aaron Stanley King"
    href="/"
    bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>
</Header>
<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink text="Link 1" />
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
        <SideNavMenu text="Menu">
            <SideNavMenuItem href="/" text="Link 1" />
            <SideNavMenuItem href="/" text="Link 2" />
            <SideNavMenuItem href="/" text="Link 3" />
        </SideNavMenu>
    </SideNavItems>
</SideNav>
