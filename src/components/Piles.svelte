<script lang="ts">
  import type ICard from "../types/ICard";
  import { Card, Heading, P } from "flowbite-svelte";
  import PlayingCard from "./PlayingCard.svelte";

  export let onDrawClick: () => void;
  export let discardPile: ICard[];
  export let drawPile: ICard[];
  export let enableDraw: boolean;
  export let drawBuffer: number;
</script>

<Card size="lg" class="grid grid-cols-2">
  <div>
    <Heading tag="h5">
      Discard Pile
    </Heading>
    <P>({discardPile.length} cards)</P>
    <PlayingCard card={discardPile[0]} />
  </div>
  <div>
    <Heading tag="h5">
      Draw Pile
    </Heading>
    <P>({drawPile.length} cards)</P>
    {#if (drawBuffer > 0)}
      <PlayingCard playable={enableDraw} onDraw={onDrawClick} backText={"+" + drawBuffer} />
    {:else}
      <PlayingCard playable={enableDraw} onDraw={onDrawClick} />
    {/if}
  </div>
</Card>
