import type { PageServerLoad } from "./$types";

export const load = (({ cookies }) => {
  cookies.delete("token")
  cookies.delete("user")
}) satisfies PageServerLoad;
