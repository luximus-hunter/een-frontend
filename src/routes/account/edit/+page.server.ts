import type { PageServerLoad, Actions } from "./$types";
import type IFetchFail from "../../../types/IFetchFail";

export const load = (({ cookies }) => {
  const player = cookies.get("playerId");
  const game = cookies.get("gameId");

  return {
    player,
    game
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    const player = cookies.get("playerId");
    const token = cookies.get("token");
    const form = await request.formData();
    const picture = form.get("picture") as string;

    if(!token) {
      return { success: false, message: "Not authenticated." };
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/users/${player}/?profileImage=${picture}`,
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Token": token
          }
        }
      );

      if (response.status === 400) {
        return { success: false, message: "Invalid request send to server." };
      }

      try {
        const data: IFetchFail = await response.json();

        if (data?.message) {
          cookies.delete("playerId");
          cookies.delete("gameId");
          return { success: false, message: data.message };
        }

        return { success: true, message: "success" };
      } catch (e) {
        return { success: false, message: response.statusText };
      }
    } catch ({ message }) {
      console.log(message);
      return { success: false, message: "The server is down." };
    }
  }
} satisfies Actions;
