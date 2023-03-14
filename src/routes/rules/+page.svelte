<script lang="ts">
  import { Card, Button, Heading, Breadcrumb, BreadcrumbItem, List, Li } from "flowbite-svelte";
</script>

<svelte:head>
  <title>EEN - Rules</title>
</svelte:head>

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/rules">Rules</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none">
    <Heading tag="h1" class="mb-3 text-center">Rules</Heading>
    <List tag="ul" class="space-y-1 mb-3" ulClass="w-full">
      <Li>You can play a card that's the same color or value as the last card.</Li>
      <Li>Special cards can be played on any card.</Li>
      <Li>If you can't play a card you have to draw one.</Li>
      <Li>Once you draw cards in any way your turn is over.</Li>
      <Li>+2 cards can not be placed on +4 cards.</Li>
      <Li>After a +4, the player who's turn it is gets to choose the next color.</Li>
      <Li>The first person to lose all their cards wins</Li>
    </List>
    <Button href="/" outline>Back</Button>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
