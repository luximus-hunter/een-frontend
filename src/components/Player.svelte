<script lang="ts">
  import type IPlayer from "../types/IPlayer";
  import type ICard from "../types/ICard";
  import Deck from "./Deck.svelte";
  import { Card, Heading, Avatar, Badge } from "flowbite-svelte";

  export let player: IPlayer;
  export let me: string;
  export let onTurn: string;
  export let onCardClick: (card: ICard) => void;
</script>

{#key onTurn}
  <Card size="none" class={player.Id === me ? "col-span-3" : ""}>
    <div class="flex mb-3">
      <Avatar class="mr-3" src={player.ProfileImage} rounded />
      <Heading tag="h3">
        {player.Username}
      </Heading>

      {#if (player.Id === onTurn)}
        <Badge class="mr-1" color="dark" border>Playing...</Badge>
      {/if}

      {#if (player.Id === me)}
        <Badge class="mr-1" color="blue" border>You</Badge>
      {/if}
    </div>
    {#if (player.Id === me)}
      <Deck amount={player.Cards.length} cards={player.Cards} playable={onTurn === me} onCardClick={onCardClick} />
    {:else}
      <Deck amount={player.Cards.length} />
    {/if}
  </Card>
{/key}
