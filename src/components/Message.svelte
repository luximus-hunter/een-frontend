<script lang="ts">
	import { Toast, Progressbar } from 'flowbite-svelte';

	export let message: string;
	export let color: 'red' | 'green';

	let show = true;
	let counter = 0;
	const seconds = 2;

	function trigger() {
		show = true;
		counter = 0;
		timeout();
	}

	function timeout() {
		if (++counter < seconds * 100) {
			return setTimeout(timeout, 10);
		}

		show = false;
	}

	if (seconds !== undefined) {
		trigger();
	}
</script>

<Toast {color} simple bind:open={show} position="top-right">
	<svelte:fragment slot="icon">
		<svg
			aria-hidden="true"
			class="w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#if color === 'red'}
				<!-- Red cross -->
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			{:else if color === 'green'}
				<!-- Green check -->
				<path
					fill-rule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clip-rule="evenodd"
				/>
			{/if}
		</svg>
	</svelte:fragment>
	{message}
	{#if seconds !== undefined}
		<Progressbar class="mt-1" size="h-1.5" {color} progress={counter / seconds} />
	{/if}
</Toast>
