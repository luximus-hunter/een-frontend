// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			gameId?: string;
			playerId?: string;
		}

		// interface Platform {}
	}
}

export {};
