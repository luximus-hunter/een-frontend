import type { PageServerLoad } from "./$types";
import type IUserResponse from "../../types/IUserResponse";
import type IFetchFail from "../../types/IFetchFail";

export const load = (async ({ cookies, fetch }) => {
  const userString = cookies.get("user");
  const token = cookies.get("token");

  if (token === undefined) {
    return;
  }

  try {
    const user: IUserResponse = JSON.parse(userString || "");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/users/${user.id}`,
        {
          method: "get",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "token": token
          }
        }
      );

      if (response.status === 400) {
        cookies.delete("user");
        cookies.delete("token");
        return { success: false, message: "Invalid request send to server." };
      }

      try {
        const d: IUserResponse | IFetchFail = await response.json();
        let data: IUserResponse | IFetchFail = d as IFetchFail;

        if (data?.message) {
          cookies.delete("user");
          cookies.delete("token");
          return { success: false, message: data.message };
        }

        data = d as IUserResponse;

        cookies.set("user", JSON.stringify(data));

        return { success: true, message: "success", user: data };
      } catch (e) {
        cookies.delete("user");
        cookies.delete("token");
        return { success: false, message: response.statusText };
      }
    } catch (e) {
      cookies.delete("user");
      cookies.delete("token");
      return { success: false, message: "The server is down." };
    }
  } catch (err) {
    return;
  }
}) satisfies PageServerLoad;
