import type { Actions } from "./$types";
import type IFetchFail from "../../types/IFetchFail";

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    const form = await request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/register?username=${username}&password=${password}`,
        {
          method: "post",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.status === 400) {
        cookies.delete("user");
        cookies.delete("token");
        return { success: false, message: "Invalid request send to server." };
      }

      try {
        const data: IFetchFail = await response.json();

        cookies.delete("user");
        cookies.delete("token");

        return { success: false, message: data.message };
      } catch (e) {
        if (response.status === 200) {
          return { success: true, message: "Registered user." };
        }

        cookies.delete("user");
        cookies.delete("token");
        return { success: false, message: response.statusText };
      }
    } catch (e) {
      cookies.delete("user");
      cookies.delete("token");
      return { success: false, message: "The server is down." };
    }
  }
} satisfies Actions;
