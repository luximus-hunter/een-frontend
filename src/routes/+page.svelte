<script lang="ts">
  import { Card, Button, Heading, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Menu"
            class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none"
            solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none">
    <Heading tag="h1" class="mb-3 text-center">EEN</Heading>
    <Button class="mb-1" href="/join">Join Game</Button>
    <Button href="/create">Create Game</Button>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>

