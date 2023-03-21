import type { PageServerLoad } from "./$types";

export const load = (({ cookies }) => {
  cookies.delete("token", { path: "/" });
  cookies.delete("user", { path: "/" });
}) satisfies PageServerLoad;
