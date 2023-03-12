<script lang="ts">
	import type IPlayer from '../types/IPlayer';
	import type ICard from '../types/ICard';
	import Deck from './Deck.svelte';
	import { Card, Heading, Avatar, Badge } from 'flowbite-svelte';

	export let player: IPlayer;
	export let me: string;
	export let onTurn: string;
	export let onCardClick: (card: ICard) => void;
</script>

{#if player}
	{#key onTurn}
		<Card size="none" class={player.Id === me ? 'col-span-3' : 'col-span-3 md:col-span-1'}>
			<div class="flex mb-3">
				<Avatar class="mr-3" src={player.ProfileImage} rounded />
				<Heading tag="h3">
					{player.Username}
				</Heading>

				{#if player.Id === onTurn}
					<Badge class="mr-1" color="dark" border>Playing...</Badge>
				{/if}

				{#if player.Id === me}
					<Badge class="mr-1" color="blue" border>You</Badge>
				{/if}
			</div>
			{#if player.Id === me}
				<Deck
					amount={player.Cards.length}
					cards={player.Cards}
					playable={onTurn === me}
					{onCardClick}
				/>
			{:else}
				<Deck amount={player.Cards.length} />
			{/if}
		</Card>
	{/key}
{:else}
	<Card size="none" class="col-span-1 hidden md:block">
		<div class="flex mb-3">
			<Avatar
				class="mr-3"
				src="https://api.dicebear.com/5.x/identicon/svg?row1=xooox&row2=oxoxo&row3=ooxoo&row4=oxoxo&row5=xooox&rowColor=e53935&backgroundColor=ffffff"
				rounded
			/>
			<Heading tag="h3" class="text-gray-700">[empty slot]</Heading>
		</div>
		<Deck amount={0} />
	</Card>
{/if}

<style lang="scss">
	.no-player {
		color: #cccccc;
	}
</style>
