<script lang="ts">
	import '../app.postcss';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

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
		</FooterLinkGroup>
	</Footer>
</div>
