<script lang="ts">
  import {
    Card,
    Button,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    Checkbox,
    Listgroup
  } from "flowbite-svelte";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  const todos: { done: boolean; task: string }[] = [
    { done: true, task: "In-game error message not showing" },
    { done: true, task: "Player dock to full width" },
    { done: true, task: "Hide opponent cards above certain number of cards" },
    { done: true, task: "Dont look through opponents cards" },
    { done: true, task: "Spinner when players are loading in" },
    { done: true, task: "Form spinners on request" },
    { done: true, task: "Put on GitHub" },
    { done: true, task: "FontAwesome icons" },
    { done: true, task: "Card scale based on width" },
    { done: true, task: "Fix wild card logic" },
    { done: true, task: "Fix win logic" },
    { done: true, task: "Somewhat mobile responsive" },
    { done: true, task: "Dark mode" },
    { done: true, task: "Favicon" },
    { done: true, task: "Dockerize client" },
    { done: true, task: "Dockerize server" },
    { done: true, task: "Put on Windesheim servers" },
    { done: true, task: "Un-hardcode api url" },
    { done: true, task: "Page titles" },
    { done: true, task: "Rules page" },
    { done: true, task: "WebSocket player validation with Dictionary & connection id" },
    { done: true, task: "Remove game from server when not in use" },
    { done: true, task: "Fix dark mode colors" },
    { done: true, task: "Code refactor" },
    { done: true, task: "More icons" },
    { done: true, task: "User api routes" },
    { done: true, task: "Register page" },
    { done: true, task: "Login page" },
    { done: true, task: "Create & Join for users" },
    { done: true, task: "Account page" },
    { done: true, task: "Edit profile image as user" },
    { done: false, task: "Logout" },
    { done: false, task: "User creation validation" },
    { done: false, task: "Delete account" },
    { done: false, task: "TO & FO" },
    { done: false, task: "Fix docker for backend" },
    { done: false, task: "CI/CD" },
    { done: false, task: "Svelte warnings for unset properties" },
    { done: false, task: "Play test!" }
  ];
</script>

<svelte:head>
  <title>EEN - TODO's</title>
</svelte:head>

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/join">TODO's</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none">
    <Heading tag="h2" class="text-center">TODO's</Heading>
    <Listgroup items={todos} let:item class="my-3">
      <Checkbox disabled checked={item.done}>{item.task}</Checkbox>
    </Listgroup>
    <Button href="/">
      <Fa icon={faChevronLeft} class="mr-3" />
      Back
    </Button>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
