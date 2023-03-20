import type { PageServerLoad, Actions } from "./$types";
import type IPlayerResponse from "../../types/IPlayerResponse";
import type IFetchFail from "../../types/IFetchFail";
import type IUserResponse from "../../types/IUserResponse";

export const load = (({ cookies }) => {
  const player = cookies.get("playerId");
  const game = cookies.get("gameId");
  const userString = cookies.get("user");

  try {
    const user = JSON.parse(userString || "");
    return {
      user,
      player,
      game
    };
  } catch (err) {
    return {
      player,
      game
    };
  }
}) satisfies PageServerLoad;


export const actions = {
  guest: async ({ cookies, request, fetch }) => {
    const form = await request.formData();
    const code = form.get("code") as string;
    const password = form.get("password") as string;
    const username = form.get("username") as string;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/games/join/guest?gameId=${code}&password=${password}&username=${username}`,
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.status === 400) {
        cookies.delete("playerId");
        cookies.delete("gameId");
        return { success: false, message: "Invalid request send to server." };
      }

      try {
        const d: IPlayerResponse | IFetchFail = await response.json();
        let data: IPlayerResponse | IFetchFail = d as IFetchFail;

        if (data?.message) {
          cookies.delete("playerId");
          cookies.delete("gameId");
          return { success: false, message: data.message };
        }

        data = d as IPlayerResponse;

        cookies.set("playerId", data.id);
        cookies.set("gameId", code);

        return { success: true, message: "success" };
      } catch (e) {
        return { success: false, message: response.statusText };
      }
    } catch ({ message }) {
      cookies.delete("playerId");
      cookies.delete("gameId");
      console.log(message);
      return { success: false, message: "The server is down." };
    }
  },
  authed: async ({ cookies, request, fetch }) => {
    const form = await request.formData();
    const code = form.get("code") as string;
    const password = form.get("password") as string;
    const user: IUserResponse = JSON.parse(cookies.get("user") || "");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/games/join/user?gameId=${code}&password=${password}&userId=${user.id}`,
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.status === 400) {
        cookies.delete("playerId");
        cookies.delete("gameId");
        return { success: false, message: "Invalid request send to server." };
      }

      try {
        const d: IPlayerResponse | IFetchFail = await response.json();
        let data: IPlayerResponse | IFetchFail = d as IFetchFail;

        if (data?.message) {
          cookies.delete("playerId");
          cookies.delete("gameId");
          return { success: false, message: data.message };
        }

        data = d as IPlayerResponse;

        cookies.set("playerId", data.id);
        cookies.set("gameId", code);

        return { success: true, message: "success" };
      } catch (e) {
        return { success: false, message: response.statusText };
      }
    } catch ({ message }) {
      cookies.delete("playerId");
      cookies.delete("gameId");
      console.log(message);
      return { success: false, message: "The server is down." };
    }
  }
} satisfies Actions;
