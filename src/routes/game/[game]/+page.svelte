<script lang="ts">
  // Svelte stuff
  import type { PageData } from "./$types";
  import { browser } from "$app/environment";

  // Library stuff
  import * as signalR from "@microsoft/signalr";
  import { Breadcrumb, BreadcrumbItem, Button, Card, Avatar, Badge, Heading, Modal, Spinner } from "flowbite-svelte";

  // Own types
  import type ISocketResponse from "../../../types/ISocketResponse";
  import type IMoveResponse from "../../../types/IMoveResponse";
  import type IJoinResponse from "../../../types/IJoinResponse";
  import type IMoveRequest from "../../../types/IMoveRequest";
  import type IPlayer from "../../../types/IPlayer";
  import type IGame from "../../../types/IGame";
  import type ICard from "../../../types/ICard";

  // Own components
  import Player from "../../../components/Player.svelte";
  import Piles from "../../../components/Piles.svelte";
  import Message from "../../../components/Message.svelte";
  import Icon from "../../../components/Icon.svelte";

  interface PD extends PageData {
    gameId: string,
    playerId: string
  }

  export let data: PD;

  let { gameId, playerId } = data || null;
  let connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5000/games").build();

  let game: IGame | null = null;
  let players: IPlayer[] | null = null;
  let opponents: IPlayer[] | null = null;
  let messageText: string | null = null;
  let messageColor: "red" | "green" = "red";
  let messageShow = false;
  let wildModalShow = false;
  let winModalShow = false;
  let winner: IPlayer | null = null;

  if (browser) {
    connection.start().catch((err) => console.error(err)).finally(() => {
      connection.send("Join", JSON.stringify({ gameId, playerId }));
    });
  }

  connection.on("Join", (json: string) => {
    const response: IJoinResponse = JSON.parse(json);
    players = response.Players;
    const player = response.Players[response.Players.length - 1];

    if (player.Id !== playerId) {
      showMessage("green", `${player.Username} joined!`);
    }
  });

  connection.on("Err", (json: string) => {
    const response: ISocketResponse = JSON.parse(json);
    console.error(response.Message);
    showMessage("red", response.Message);
  });

  connection.on("Start", (json: string) => {
    const response: IMoveResponse = JSON.parse(json);
    showMessage("green", "Game started!");
    game = response.Game;
    setOpponents();
    winModalShow = false;
  });

  connection.on("Move", (json: string) => {
    const response: IMoveResponse = JSON.parse(json);
    game = response.Game;
    setOpponents();
    if (game.OnTurn === playerId) {
      showMessage("green", "It's your turn!");
    }
  });

  connection.on("Win", (_: string) => {
    game?.Players.map(player => {
      if (player.Cards.length < 1) {
        winner = player;
      }
    });
    winModalShow = true;
  });

  const btnStartClick = () => {
    connection.send("Start", JSON.stringify({ GameId: gameId }));
  };

  const onWildChoose = (color: 0 | 1 | 2 | 3) => {
    wildModalShow = false;
    const card: ICard = { Value: 13, Color: color };
    onCardClick(card);
  };

  const onCardClick = (card: ICard | undefined) => {
    if (card && card.Value == 13 && card.Color == 4) {
      wildModalShow = true;
      return;
    }

    const request: IMoveRequest = {
      PlayerId: playerId,
      GameId: gameId,
      Move: {
        Card: card === undefined ? null : card,
        Action: card === undefined ? 1 : 0
      }
    };

    connection.send("Move", JSON.stringify(request));
  };

  const btnCopyClick = () => {
    navigator.clipboard.writeText(gameId);
    showMessage("green", "Copied game code to clipboard!");
  };

  const showMessage = (color: "red" | "green", message: string) => {
    messageText = message;
    messageColor = color;
    messageShow = !messageShow;
  };

  const setOpponents = () => {
    if (game && game?.Players) {
      opponents = game?.Players.filter(player => player.Id !== playerId);
    } else {
      opponents = null;
    }
  };

  const onPlayAgain = () => {
    winModalShow = false;
    winner = null;
    btnStartClick();
  };
</script>

<Breadcrumb aria-label="Menu" solid>
  <BreadcrumbItem href="/" home>EEN</BreadcrumbItem>
  <BreadcrumbItem href="/game">Game</BreadcrumbItem>
  <BreadcrumbItem>{gameId}</BreadcrumbItem>
</Breadcrumb>

{#key messageShow}
  {#if (messageText !== null)}
    <Message message={messageText} seconds={1} color={messageColor} />
  {/if}
{/key}

{#if (game?.Running)}
  <Modal bind:open={wildModalShow} size="md" title="Choose color">
    <div class="text-center">
      <div class="mx-auto mb-4 w-[50px]">
        <Icon name="wild" size="50" color="#222222" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <Button on:click={() => onWildChoose(0)} color="red">Red</Button>
        <Button on:click={() => onWildChoose(1)} color="blue">Blue</Button>
        <Button on:click={() => onWildChoose(2)} color="green">Green</Button>
        <Button on:click={() => onWildChoose(3)} color="yellow">Yellow</Button>
      </div>
    </div>
  </Modal>

  <Modal bind:open={winModalShow} size="md" title="Winner!">
    <div class="text-center">
      {#key winner}
        {#if (winner !== null)}
          <Heading tag="h2">{winner.Username} won!</Heading>
        {/if}
      {/key}
      <Button class="mt-3" on:click={onPlayAgain}>Play again</Button>
    </div>
  </Modal>

  {#key game}
    <div class="grid grid-cols-3 gap-3 mt-3 mx-3">
      {#each Array(3) as _, index}
        {#if (opponents[index])}
          <Player player={opponents[index]} me={playerId} onTurn={game.OnTurn} onCardClick={onCardClick} />
        {:else }
          <div><!-- Placeholder --></div>
        {/if}
      {/each}
      <div><!-- Placeholder --></div>
      <Piles onDrawClick={onCardClick} discardPile={game.DiscardPile} drawPile={game.DrawPile}
             enableDraw={game.OnTurn === playerId} drawBuffer={game.DrawBuffer} />
      <div><!-- Placeholder --></div>
      <div><!-- Placeholder --></div>
      <Player player={game.Players.find(p => p.Id === playerId)} me={playerId} onTurn={game.OnTurn}
              onCardClick={onCardClick} />
      <div><!-- Placeholder --></div>
    </div>
  {/key}
{:else}
  <div class="grid grid-cols-3 gap-3 mt-3">
    <div><!-- Placeholder --></div>
    <Card size="none">
      <Heading tag="h2" class="mb-3">Players</Heading>
      {#if (players !== null)}
        {#key players}
          {#each players as player}
            <div class="flex mb-2">
              <Avatar class="mr-2" src={player.ProfileImage} rounded />
              <Heading tag="h3">
                {player.Username}
              </Heading>

              {#if (player.Id === playerId)}
                <Badge class="mr-1" color="blue" border>You</Badge>
              {/if}
            </div>
          {/each}
        {/key}
      {:else}
        <Spinner class="mb-3 mx-auto" size={9} />
      {/if}
      <Button class="mb-1" on:click={btnStartClick}>Start</Button>
      <Button outline on:click={btnCopyClick}>Copy Code</Button>
    </Card>
    <div><!-- Placeholder --></div>
  </div>
{/if}
