<script lang="ts">
  import {
    Card,
    Input,
    Button,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    Spinner
  } from "flowbite-svelte";
  import type { ActionData } from "./$types";
  import Message from "../../../components/Message.svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import Fa from "svelte-fa";
  import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


  interface AD extends ActionData {
    success: boolean;
    message?: string;
  }

  export let form: AD | null;

  if (browser && form?.success) {
    goto(`/account`);
  }

  let loading = false;
</script>

<svelte:head>
  <title>EEN - Edit Account</title>
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
  <BreadcrumbItem href="/account">Account</BreadcrumbItem>
  <BreadcrumbItem href="/account/edit">Edit</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-0 mt-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none" class="mx-3">
    <Heading tag="h2" class="text-center mb-2">Update picture</Heading>
    <form on:submit={() => (loading = true)} method="POST">
      <div class="mb-1">
        <Input type="text" id="picture" name="picture" placeholder="Picture URL" required />
      </div>
      <Button class="w-full mb-3" type="submit">
        {#if loading}
          <Spinner size="5" color="white" />
        {:else}
          Update
          <Fa icon={faChevronRight} class="ml-3" />
        {/if}
      </Button>
      <Button class="w-full" outline href="/account">
        <Fa icon={faChevronLeft} class="mr-3" />
        Back
      </Button>
    </form>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
