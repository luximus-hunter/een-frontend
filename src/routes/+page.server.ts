import type { PageServerLoad } from './$types';

export const load = (({ cookies }) => {
	cookies.delete('playerId');
	cookies.delete('gameId');
}) satisfies PageServerLoad;
