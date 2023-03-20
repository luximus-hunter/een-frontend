<script lang="ts">
  import { Button, Breadcrumb, BreadcrumbItem, Card, Heading, Avatar } from "flowbite-svelte";
  import { faChevronLeft, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import type { PageData } from "./$types";
  import type IUserResponse from "../../types/IUserResponse";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  interface PD extends PageData {
    user?: IUserResponse;
  }

  export let data: PD;

  if (browser && data?.user === undefined) {
    goto("/");
  }
</script>

<svelte:head>
  <title>EEN - Account</title>
</svelte:head>

<Breadcrumb
  aria-label="Menu"
  class="p-4 bg-white md:flex md:p-6 dark:bg-gray-800 z-20 w-full rounded-none border-none"
  solid
>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem>Account</BreadcrumbItem>
</Breadcrumb>

<div class="grid md:grid-cols-3 grid-cols-1 gap-3 m-3">
  <div class="hidden md:block"><!-- Placeholder --></div>
  <Card size="none">
    <div class="flex items-center space-x-4 mb-3">
      <Avatar
        src={data.user?.profileImage}
        size="xl" rounded />
      <div class="space-y-1 font-medium dark:text-white w-full">
        <Heading tag="h2">{data.user?.username}</Heading>
        <div class="text-sm text-gray-500 dark:text-gray-400">{data.user?.wins} Wins, {data.user?.loses} Loses</div>
        <div class="grid gap-3 grid-cols-2">
          <Button class="w-full" href="/account/edit" outline>
            Edit picture
            <Fa icon={faPen} class="ml-3" />
          </Button>
          <Button class="w-full" href="/" color="red" outline>
            Delete Account
            <Fa icon={faTrashCan} class="ml-3" />
          </Button>
        </div>
      </div>
    </div>
    <Button class="w-full" href="/">
      <Fa icon={faChevronLeft} class="mr-3" />
      Home
    </Button>
  </Card>
  <div class="hidden md:block"><!-- Placeholder --></div>
</div>
