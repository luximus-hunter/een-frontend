<script lang="ts">
  import { Card, Input, Button, Heading, Radio, Breadcrumb, BreadcrumbItem, Spinner } from "flowbite-svelte";
  import type { ActionData, PageData } from "./$types";
  import Message from "../../components/Message.svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  interface PD extends PageData {
    game?: string;
    player?: string;
  }

  interface AD extends ActionData {
    success: boolean;
    message?: string;
  }

  export let data: PD;
  export let form: AD | null;

  if (browser && data?.game) {
    goto(`/game/${data?.game}`);
  }

  let players = 4;
  let loading = false;
</script>

{#if form?.success === false}
  <Message message={form?.message} color="red" />
{/if}

<Breadcrumb aria-label="Menu"
            class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none"
            solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/create">Create</BreadcrumbItem>
</Breadcrumb>


<div class="grid grid-cols-3 gap-3 mt-3">
  <div><!-- Placeholder --></div>
  <Card class="my-3" size="none">
    <Heading tag="h2" class="text-center mb-2">Create</Heading>
    <form on:submit={() => loading = true} method="post">
      <div class="mb-1">
        <Input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="mb-1">
        <ul
          class="bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600 mb-1"
        >
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={2}
            >2 players
            </Radio
            >
          </li>
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={3}
            >3 players
            </Radio
            >
          </li>
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={4}
            >4 players
            </Radio
            >
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
      </div>
      <Button class="w-full mb-3" type="submit">
        {#if (loading)}
          <Spinner size="5" color="white" />
        {:else}
          Create new Game
        {/if}
      </Button>
      <Button class="w-full" outline href="/">Back</Button>
    </form>
  </Card>
  <div><!-- Placeholder --></div>
</div>
