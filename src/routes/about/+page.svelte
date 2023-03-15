<script lang="ts">
  import {
    Card,
    Button,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    P,
    Span,
    List,
    Li
  } from "flowbite-svelte";
  import Link from "../../components/Link.svelte";
</script>

<svelte:head>
  <title>EEN - About</title>
</svelte:head>

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/about">About</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">About EEN&trade;</Heading>
    <P justify
    >EEN&trade; was made by Thomas Lipman as an assignment for Windesheim University of
      Applied Sciences. EEN&trade; is a straight-up ripoff of UNO&trade;, no need to hide that
      fact.</P
    >
    <Button class="mt-3" outline href="/">Back</Button>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">About the Dev</Heading>
    <P justify
    >I'm a junior software developer with knowledge in web- and desktop development studying
      ICT at Windesheim University of Applied Sciences. Read more about me on my website.</P
    >
    <Button class="mt-3" disabled color="yellow" outline>
			<Span class="line-through mr-3">
				<span class="inline-flex items-center">
					Website
					<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 ml-2"
          >
						<path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
					</svg>
				</span>
			</Span>
      Under Construction
    </Button>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Source Code</Heading>
    <Button class="mt-3" outline href="https://github.com/luximus-hunter/een-frontend">
      Client Source
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Button>
    <Button class="mt-3" outline href="https://github.com/luximus-hunter/een-backend">
      Server Source
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Button>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Client Technologies</Heading>
    <div class="grid grid-cols-5 gap-3">
      <img src="icons/svelte.svg" alt="svelte" />
      <img src="icons/typescript.svg" alt="typescript" />
      <img src="icons/sass.svg" alt="sass" />
      <img src="icons/tailwindcss.svg" alt="tailwind" />
      <img src="icons/flowbite.svg" alt="svelte" />
      <img src="icons/prettier.svg" alt="svelte" />
      <img src="icons/eslint.svg" alt="svelte" />
      <img src="icons/signalr.svg" alt="svelte" />
      <img src="icons/fontawesome.svg" alt="svelte" />
      <img src="icons/dicebear.svg" alt="svelte" />
    </div>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Server Technologies</Heading>
    <div class="grid grid-cols-5 gap-3">
      <img src="icons/dotnet.svg" alt="svelte" />
      <img src="icons/csharp.svg" alt="svelte" />
      <img src="icons/signalr.svg" alt="svelte" />
      <img src="icons/swagger.svg" alt="svelte" />
      <img src="icons/bcrypt.svg" alt="svelte" />
    </div>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Tools used</Heading>
    <div class="grid grid-cols-5 gap-3">
      <img src="icons/rider.svg" alt="svelte" />
      <img src="icons/webstorm.svg" alt="svelte" />
      <img src="icons/windowsterminal.svg" alt="svelte" />
      <img src="icons/github.svg" alt="svelte" />
      <img src="icons/docker.svg" alt="svelte" />
    </div>
  </Card>
</div>
