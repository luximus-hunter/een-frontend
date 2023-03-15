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
  import { faChevronLeft, faLink } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
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
    <Button class="mt-3" outline href="/">
      <Fa icon={faChevronLeft} class="mr-3" />
      Back
    </Button>
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
          <Fa icon={faLink} class="ml-3" />
				</span>
			</Span>
      Under Construction
    </Button>
  </Card>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Source Code</Heading>
    <Button class="mt-3" outline href="https://github.com/luximus-hunter/een-frontend">
      Client Source
      <Fa icon={faLink} class="ml-3" />
    </Button>
    <Button class="mt-3" outline href="https://github.com/luximus-hunter/een-backend">
      Server Source
      <Fa icon={faLink} class="ml-3" />
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
