import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import type { Cookies } from "@sveltejs/kit";

export const load = (({ params, cookies }: { params: { game: string }; cookies: Cookies }) => {
  const { game } = params;
  const player = cookies.get("playerId");

  if (!player) {
    throw redirect(300, "/");
  }

  return {
    gameId: game,
    playerId: player
  };
}) satisfies PageServerLoad;
