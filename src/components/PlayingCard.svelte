<script lang="ts">
  import type ICard from "../types/ICard";
  import Icon from "./Icon.svelte";
  import { getColor, getValue } from "./playingCardFc";

  export let card: ICard | undefined;
  export let backText: string | undefined;
  export let playable: boolean;
  export let move: boolean;
  export let onClick: (card: ICard) => void;
  export let onDraw: () => void;

  const color = getColor(card?.Color);
  const value = getValue(card?.Value);

  let display = value;

  const isIcon = card?.Value === 10 || card?.Value === 11 || card?.Value === 13;
  const isDraw = card?.Value === 12 || card?.Value === 14;

  if (isDraw) {
    display = "+" + value.charAt(4);
  }

  const onCardClick = () => {
    if (card !== undefined) {
      onClick(card);
    } else {
      onDraw();
    }
  };
</script>

<div
  class={`card card-${card !== undefined ? color : "back"} ${playable ? "playable" : ""} ${move ? "move" : ""}`}
  on:click={playable && onCardClick}>
  {#if (card !== undefined)}
    <span class={`indicator indicator-1 ${isIcon ? "icon" : ""}`}>
      {#if (isIcon)}
        <Icon name={display} size={15} color="#222222" />
      {:else}
        {display}
      {/if}
    </span>
    <span class={`indicator indicator-2 ${isIcon ? "icon" : ""}`}>
      {#if (isIcon)}
        <Icon name={display} size={15} color="#222222" />
      {:else}
        {display}
      {/if}
    </span>
  {/if}
  <div class="middle center">
    <span class="center">
      {#if (card === undefined)}
        {#if (backText !== undefined)}
          {backText}
        {:else}
          EEN
        {/if}
      {:else if (isIcon)}
        <Icon name={display} size={40} color="#222222" />
      {:else}
        {display}
      {/if}
    </span>
  </div>
</div>

<style lang="scss">
    $width: 100px;
    $height: 150px;
    $border: 5px;

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .card {
        user-select: none;

        position: relative;
        width: $width;
        height: $height;

        border: $border solid black;
        border-radius: calc($width / 5);
        overflow: hidden;

        font-size: 40px;
        color: #222222;
        font-weight: bold;

        transition: margin-right 100ms, transform 100ms;
        margin-right: calc($width * -1 + $width / 3);

        &.playable {
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
            }
        }

        .indicator {
            position: absolute;
            font-size: 15px;
            line-height: 15px;
            background-color: white;
            padding: 5px 0;
            width: 25px;
            height: 25px;
            text-align: center;

            &.icon {
                padding: 5px;
            }

            &-1 {
                top: 0;
                left: 0;
                border-bottom-right-radius: 50%;
            }

            &-2 {
                bottom: 0;
                right: 0;
                border-top-left-radius: 50%;
            }
        }

        .middle {
            width: calc($width - 2 * $border);
            height: $width;
            border-radius: 50% calc($width / 10) 50% calc($width / 10);
            background: #ffffff;
        }

        &-red {
            background-color: #dd2200;
        }

        &-blue {
            background-color: #0099cc;
        }

        &-green {
            background-color: #009933;
        }

        &-yellow {
            background-color: #ffcc00;
        }

        &-special {
            background-color: #222222;
        }

        &-back {
            color: #cccccc;
            background-color: #cccccc;
        }

        &:last-child {
            margin-right: 0;
        }

        &.move {
            &:hover {
                margin-right: calc($width * -1 / 6);
            }
        }
    }
</style>
