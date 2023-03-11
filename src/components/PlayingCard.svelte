<script lang="ts">
  import type ICard from "../types/ICard";
  import { getColor, getValue } from "./playingCardFc";
  import Fa from "svelte-fa";
  import { faFlag, faForward, faRepeat, faStar } from "@fortawesome/free-solid-svg-icons";

  export let card: ICard | undefined;
  export let backText: string | undefined;
  export let playable: boolean;
  export let move: boolean;
  export let onClick: (card: ICard) => void;
  export let onDraw: () => void;
  export let right: boolean

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
  class={`card card-${card !== undefined ? color : "back"} ${playable ? "playable" : ""} ${move ? "move" : ""} ${right ? "ml-auto" : ""}`}
  on:click={playable && onCardClick}>
  {#if (card !== undefined)}
    <span class="indicator indicator-1">
      {#if (card?.Value === 10)}
        <Fa icon={faForward} class="mx-auto" />
      {:else if (card?.Value === 11)}
        <Fa icon={faRepeat} class="mx-auto" />
      {:else if (card?.Value === 13)}
        <Fa icon={faStar} class="mx-auto" />
      {:else}
        {display}
      {/if}
    </span>
    <span class="indicator indicator-2">
      {#if (card?.Value === 10)}
        <Fa icon={faForward} class="mx-auto" />
      {:else if (card?.Value === 11)}
        <Fa icon={faRepeat} class="mx-auto" />
      {:else if (card?.Value === 13)}
        <Fa icon={faStar} class="mx-auto" />
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
      {:else if (card?.Value === 10)}
        <Fa icon={faForward} />
      {:else if (card?.Value === 11)}
        <Fa icon={faRepeat} />
      {:else if (card?.Value === 13)}
        <Fa icon={faStar} />
      {:else}
        {display}
      {/if}
    </span>
  </div>
</div>

<style lang="scss">
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .card {
        --width: 100px;
        --border: 5px;

        @media screen and (max-width: 950px) {
            --width: 80px;
            --border: 4px;
        }

        @media screen and (max-width: 750px) {
            --width: 60px;
            --border: 3px;
        }

        @media screen and (max-width: 550px) {
            --width: 40px;
            --border: 2px;
        }

        --height: calc(var(--width) * 1.5);

        user-select: none;

        position: relative;
        width: var(--width);
        height: var(--height);

        border: var(--border) solid black;
        border-radius: calc(var(--width) / 5);
        overflow: hidden;

        font-size: calc(var(--width) / 2.5);
        color: #222222;
        font-weight: bold;

        transition: margin-right 100ms, transform 100ms;
        margin-right: calc(var(--width) * -1 + var(--width) / 3);

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

            @media screen and (max-width: 950px) {
                width: 20px;
                height: 20px;
                font-size: 13px;
                line-height: 13px;
                padding: 3px 0;
            }

            @media screen and (max-width: 750px) {
                width: 15px;
                height: 15px;
                font-size: 10px;
                line-height: 10px;
                padding: 2px 0;
            }

            @media screen and (max-width: 550px) {
                width: 10px;
                height: 10px;
                font-size: 7px;
                line-height: 7px;
                padding: 1px 0;
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
            width: calc(var(--width) - 2 * var(--border));
            height: var(--width);
            border-radius: 50% calc(var(--width) / 10) 50% calc(var(--width) / 10);
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
                margin-right: calc(var(--width) * -1 / 6);
            }
        }
    }
</style>
