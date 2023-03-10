<script lang="ts">
  import { Card, Input, Button, Heading, Breadcrumb, BreadcrumbItem, Spinner } from "flowbite-svelte";
  import type { ActionData } from "./$types";
  import Message from "../../components/Message.svelte";

  interface AD extends ActionData {
    success: boolean;
    game?: string;
    player?: string;
    message?: string;
  }

  export let form: AD | null;

  let loading = false;
</script>

{#if form?.success === false}
  <Message message={form?.message} color="red" />
{/if}

<Breadcrumb aria-label="Menu" solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/join">Join</BreadcrumbItem>
</Breadcrumb>


<div class="grid grid-cols-3 gap-3 mt-3">
  <div><!-- Placeholder --></div>
  <Card size="none">
    <Heading tag="h2" class="text-center mb-2">Join</Heading>
    <form on:submit={() => loading = true} method="POST">
      <div class="mb-1">
        <Input type="text" id="code" name="code" placeholder="Code" required />
      </div>
      <div class="mb-1">
        <Input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
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
          Join Game
        {/if}
      </Button>
      <Button class="w-full" outline href="/">Back</Button>
    </form>
  </Card>
  <div><!-- Placeholder --></div>
</div>

