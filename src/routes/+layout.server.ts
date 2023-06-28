import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
  const token = cookies.get("token");
  const userString = cookies.get("user");

  try {
    const user = JSON.parse(userString || "");
    return {
      user, token
    };
  } catch (err) {
    return {};
  }
}) satisfies LayoutServerLoad;
