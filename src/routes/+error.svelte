<script>
  import { page } from "$app/stores";
  import { Button, Breadcrumb, BreadcrumbItem, Card, Heading } from "flowbite-svelte";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<svelte:head>
  <title>EEN - Error</title>
</svelte:head>

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem>{$page.status}</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">{$page.status}</Heading>
    <Heading tag="h3" class="text-center mb-2">{$page.error.message}</Heading>
    <Button class="w-full" href="/">
      <Fa icon={faChevronLeft} class="mr-3" />
      Home
    </Button>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
