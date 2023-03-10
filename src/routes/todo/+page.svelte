<script lang="ts">
  import { Card, Button, Heading, Breadcrumb, BreadcrumbItem, Checkbox, Listgroup } from "flowbite-svelte";

  const todos: { done: boolean, task: string }[] = [
    { done: true, task: "In-game error message not showing" },
    { done: true, task: "Player dock to full width" },
    { done: true, task: "Hide opponent cards above certain number of cards" },
    { done: true, task: "Dont look through opponents cards" },
    { done: true, task: "Spinner when players are loading in" },
    { done: true, task: "Form spinners on request" },
    { done: false, task: "WebSocket player validation with Dictionary & connection string" },
    { done: false, task: "Send API data in body instead of url" },
    { done: false, task: "Put on GitHub" },
    { done: false, task: "Code refactor" },
    { done: false, task: "Svelte warnings for unset properties" },
    { done: false, task: "Make Docker files stuff" },
    { done: false, task: "Put on Windesheim servers" },
    { done: false, task: "Play test!" }
  ];
</script>

<Breadcrumb aria-label="Menu" solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/join">TODO's</BreadcrumbItem>
</Breadcrumb>

<Card class="mt-3">
  <Heading tag="h2" class="text-center">TODO's</Heading>
  <Listgroup items={todos} let:item class="my-3">
    <Checkbox disabled checked={item.done}>{item.task}</Checkbox>
  </Listgroup>
  <Button href="/">Back</Button>
</Card>
