import type { PageServerLoad } from "./$types";

export const load = (({ cookies }) => {
  cookies.delete("playerId", { path: "/" });
  cookies.delete("gameId", { path: "/" });
}) satisfies PageServerLoad;
