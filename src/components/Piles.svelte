<script lang="ts">
	import type ICard from '../types/ICard';
	import { Card, Heading, P } from 'flowbite-svelte';
	import PlayingCard from './PlayingCard.svelte';

	export let onDrawClick: () => void;
	export let discardPile: ICard[];
	export let drawPile: ICard[];
	export let enableDraw: boolean;
	export let drawBuffer: number;
</script>

<Card size="none" class="grid grid-cols-2 gap-3 col-span-3">
	<div class="">
		<P weight="bold" class="md:text-xl text-md text-right" bold>Discard Pile</P>
		<P class="md:text-md text-sm text-right mb-3"
			>{discardPile.length} card{discardPile.length > 1 ? 's' : ''}</P
		>
		<PlayingCard right card={discardPile[0]} />
	</div>
	<div>
		<P weight="bold" class="md:text-xl text-md" bold>Draw Pile</P>
		<P class="md:text-md text-sm mb-3">{drawPile.length} card{drawPile.length > 1 ? 's' : ''}</P
		>
		{#if drawBuffer > 0}
			<PlayingCard playable={enableDraw} onDraw={onDrawClick} backText={'+' + drawBuffer} />
		{:else}
			<PlayingCard playable={enableDraw} onDraw={onDrawClick} />
		{/if}
	</div>
</Card>
