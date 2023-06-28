<script lang="ts">
  import {
    Card,
    Input,
    Button,
    Heading,
    Radio,
    Breadcrumb,
    BreadcrumbItem,
    Spinner
  } from "flowbite-svelte";
  import type { ActionData, PageData } from "./$types";
  import Message from "../../components/Message.svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import Fa from "svelte-fa";
  import { faChevronLeft, faChevronRight, faPlus, faSquarePlus, faUser } from "@fortawesome/free-solid-svg-icons";
  import type IUserResponse from "../../types/IUserResponse";


  interface PD extends PageData {
    user?: IUserResponse;
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

<svelte:head>
  <title>EEN - Create</title>
</svelte:head>

{#if form?.success === false}
  <Message message={form?.message} color="red" />
{/if}

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/create">Create</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-0 mt-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card class="mx-3" size="none">
    <Heading tag="h2" class="text-center mb-2">Create a new Game</Heading>
    <form on:submit={() => (loading = true)} method="POST" action="?/guest">
      <div class="mb-1">
        <Input type="text" id="password" name="password" placeholder="Password" required />
      </div>
      <div class="mb-1">
        <ul
          class="bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600 mb-1"
        >
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={2}>
              <Fa class="mr-2" icon={faUser} />
              <Fa icon={faUser} />
            </Radio>
          </li>
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={3}>
              <Fa class="mr-2" icon={faUser} />
              <Fa class="mr-2" icon={faUser} />
              <Fa icon={faUser} />
            </Radio>
          </li>
          <li>
            <Radio name="players" bind:group={players} class="p-3" value={4}>
              <Fa class="mr-2" icon={faUser} />
              <Fa class="mr-2" icon={faUser} />
              <Fa class="mr-2" icon={faUser} />
              <Fa icon={faUser} />
            </Radio>
          </li>
        </ul>
      </div>
      {#if (data?.user)}
        <Button class="w-full mb-3" type="submit" formaction="?/authed">
          {#if loading}
            <Spinner size="5" color="white" />
          {:else}
            Create
            <Fa icon={faChevronRight} class="ml-3" />
          {/if}
        </Button>
      {:else}
        <div class="mb-3">
          <Input type="text" id="username" name="username" placeholder="Username" required />
        </div>
        <Button class="w-full mb-3" type="submit">
          {#if loading}
            <Spinner size="5" color="white" />
          {:else}
            Create
            <Fa icon={faChevronRight} class="ml-3" />
          {/if}
        </Button>
      {/if}
      <Button class="w-full" outline href="/">
        <Fa icon={faChevronLeft} class="mr-3" />
        Back
      </Button>
    </form>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
