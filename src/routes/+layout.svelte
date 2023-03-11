<script lang="ts">
  import "../app.postcss";
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, Button } from "flowbite-svelte";
  // import Icon from "../components/Icon.svelte";
  // import { browser } from "$app/environment";

  // let app: HTMLElement;
  // let darkMode: boolean;
  //
  // if (browser) {
  //   app = document.getElementById("app");
  //   darkMode = localStorage.theme === "dark";
  // }
  //
  // const darkModeToggle = () => {
  //   darkMode = !darkMode;
  //
  //   if (darkMode) {
  //     app.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     app.classList.remove("dark");
  //     localStorage.theme = "light";
  //   }
  // };
</script>

<!--<div class={darkMode ? "dark" : ""}>-->
<div class="flex flex-col min-h-screen dark:bg-gray-900">
  <div class="flex-1">
    <slot />
  </div>

  <Footer class="z-20 w-full rounded-none border-gray-200 dark:border-gray-700">
    <FooterCopyright centered href="/" by="EEN&trade;" copyrightMessage="GPL-3.0 Licensed" />
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLink href="/about">About</FooterLink>
      <!--<Button class="!p-3" on:click={darkModeToggle}>-->
      <!--<Icon color="white" size={16} name={darkMode ? "sun" : "moon"} />-->
      <!--</Button>-->
    </FooterLinkGroup>
  </Footer>
</div>
<!--</div>-->
