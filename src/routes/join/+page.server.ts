import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import type IPlayerResponse from '../../types/IPlayerResponse';
import type IFetchFail from '../../types/IFetchFail';

export const load = (({ cookies, request }) => {
	const player = cookies.get('playerId');
	const game = cookies.get('gameId');

	if (player) {
		throw redirect(301, `/game/${game}`);
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const form = await request.formData();
		const code = form.get('code') as string;
		const password = form.get('password') as string;
		const username = form.get('username') as string;

		try {
			const response = await fetch(
				`http://localhost:5000/games/join?gameId=${code}&password=${password}&username=${username}`,
				{ method: 'post' }
			);

			if (response.status === 400) {
				return { success: false, message: 'Invalid request send to server.' };
			}

			try {
				const d: IPlayerResponse | IFetchFail = await response.json();
				let data: IPlayerResponse | IFetchFail = d as IFetchFail;

				if (data?.message) {
					cookies.delete('playerId');
					cookies.delete('gameId');
					return { success: false, message: data.message };
				}

				data = d as IPlayerResponse;

				cookies.set('playerId', data.id);
				cookies.set('gameId', code);

				return { success: true, message: 'success' };
			} catch (e) {
				return { success: false, message: response.statusText };
			}
		} catch (e) {
			return { success: false, message: 'The server is down.' };
		}
	}
} satisfies Actions;
