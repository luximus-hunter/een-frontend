<script lang="ts">
  import type ICard from "../types/ICard";
  import PlayingCard from "./PlayingCard.svelte";

  export let cards: ICard[] | undefined;
  export let amount: number | undefined;
  export let playable: boolean;
  export let onCardClick: (card: ICard) => void;

  const clamp = (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max);

  const maxCardsToShow = 7;
</script>

<div class="cards">
  {#if (amount > 0)}
    {#if (cards !== undefined)}
      {#each cards as card}
        <PlayingCard move={true} card={card} playable={playable} onClick={onCardClick} />
      {/each}
    {:else}
      {#each Array(clamp(amount, 0, maxCardsToShow - 1)) as _, index}
        <PlayingCard />
      {/each}
      {#if (amount >= maxCardsToShow)}
        <PlayingCard backText={amount} />
      {/if}
    {/if}
  {:else}
    <div class="empty w-full">NO CARDS</div>
  {/if}
</div>

<style lang="scss">
    .cards {
        display: flex;

        .empty {
            color: #cccccc;
            font-size: 40px;
            font-weight: bold;
            height: 150px;
            line-height: 150px;
            text-align: center;
        }
    }
</style>
