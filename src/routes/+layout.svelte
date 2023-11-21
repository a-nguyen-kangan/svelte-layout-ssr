<script>
    import { Navbar, NavBrand, NavUl, NavLi, NavHamburger, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
  import "../app.pcss";
</script>

<Navbar class="bg-red-200" >
  <NavBrand href="/">
    <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/viewData">View Data</NavLi>
    <NavLi href="/viewPosts">View Posts</NavLi>
    <NavLi href="/viewPostsServer">View Posts Server</NavLi>
  </NavUl>
</Navbar>

<slot />


<Footer>
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>