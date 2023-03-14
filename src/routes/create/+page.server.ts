import type { Actions, PageServerLoad } from './$types';
import type IGameResponse from '../../types/IGameResponse';
import type IFetchFail from '../../types/IFetchFail';

export const load = (({ cookies }) => {
	const player = cookies.get('playerId');
	const game = cookies.get('gameId');

	return {
		player,
		game
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const form = await request.formData();
		const password = form.get('password');
		const players = form.get('players');
		const username = form.get('username');

		try {
			const response = await fetch(
				`${import.meta.env.VITE_API}/games/create?password=${password}&maxPlayers=${players}&username=${username}`,
				{
					method: 'post',
					mode: 'no-cors',
					headers: {
						'Access-Control-Allow-Origin': '*'
					}
				}
			);

			if (response.status === 400) {
				return { success: false, message: 'Invalid request send to server.' };
			}

			try {
				const d: IGameResponse | IFetchFail = await response.json();
				let data: IGameResponse | IFetchFail = d as IFetchFail;

				if (data?.message) {
					cookies.delete('playerId');
					cookies.delete('gameId');
					return { success: false, message: data.message };
				}

				data = d as IGameResponse;

				cookies.set('playerId', data.players[0].id);
				cookies.set('gameId', data.id);

				return { success: true, message: 'success' };
			} catch (e) {
				return { success: false, message: response.statusText };
			}
		} catch ({ message }) {
			console.log(message)
			return { success: false, message: 'The server is down.' };
		}
	}
} satisfies Actions;
