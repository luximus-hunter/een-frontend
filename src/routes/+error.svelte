<script>
  import { page } from '$app/stores';
  import { Button, Breadcrumb, BreadcrumbItem, Card, Heading } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Menu"
            class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none"
            solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem>{$page.status}</BreadcrumbItem>
</Breadcrumb>
<div class="grid w-full h-full mt-3">
  <div class="place-self-center">
    <Card class="mb-3">
      <Heading tag="h2" class="text-center mb-2">{$page.status}</Heading>
      <Heading tag="h3" class="text-center mb-2">{$page.error.message}</Heading>
        <Button class="w-full" href="/">Back to Home</Button>
    </Card>
  </div>
</div>

