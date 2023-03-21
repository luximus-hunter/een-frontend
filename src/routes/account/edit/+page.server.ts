import type { PageServerLoad, Actions } from "./$types";
import type IFetchFail from "../../../types/IFetchFail";
import type IUserResponse from "../../../types/IUserResponse";

// export const load = (({ cookies }) => {
//   const userString = cookies.get("user");
//   const token = cookies.get("token");
//
//   if (token === undefined) {
//     return;
//   }
//
//   try {
//     const user: IUserResponse = JSON.parse(userString || "");
//     return {
//       token, user: user.id
//     };
//   } catch (e) {
//     return;
//   }
// }) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    const userString = cookies.get("user");
    const token = cookies.get("token");
    const form = await request.formData();
    const picture = form.get("picture") as string;

    if (!token) {
      return { success: false, message: "Not authenticated." };
    }

    try {
      const user: IUserResponse = JSON.parse(userString || "");
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/users/${user.id}/?profileImage=${picture}`,
          {
            method: "put",
            // mode: "no-cors",
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
          const d: IUserResponse | IFetchFail = await response.json();
          let data: IUserResponse | IFetchFail = d as IFetchFail;

          if (data?.message) {
            cookies.delete("playerId");
            cookies.delete("gameId");
            return { success: false, message: data.message };
          }

          data = d as IUserResponse;

          cookies.set("user", JSON.stringify(data));

          return { success: true, message: "success" };
        } catch (e) {
          return { success: false, message: response.statusText };
        }
      } catch (e) {
        return { success: false, message: "The server is down." };
      }
    } catch (e) {
      return { success: false, message: "You messed with the cookies." };
    }
  }
} satisfies Actions;
