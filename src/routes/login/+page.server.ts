import type { PageServerLoad, Actions } from "./$types";
import type IFetchFail from "../../types/IFetchFail";
import type ILoginResponse from "../../types/ILoginResponse";

export const load = (({ cookies }) => {
  return {
    token: cookies.get("token")
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, request, fetch }) => {
    const form = await request.formData();
    const username = form.get("username") as string;
    const password = form.get("password") as string;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/login?username=${username}&password=${password}`,
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
        const d: ILoginResponse | IFetchFail = await response.json();
        let data: ILoginResponse | IFetchFail = d as IFetchFail;

        if (data?.message) {
          cookies.delete("user");
          cookies.delete("token");
          return { success: false, message: data.message };
        }

        data = d as ILoginResponse;

        cookies.set("user", JSON.stringify(data.user));
        cookies.set("token", data.token);

        return { success: true, message: "success" };
      } catch (e) {
        cookies.delete("user");
        cookies.delete("token");
        return { success: false, message: response.statusText };
      }
    } catch ({ message }) {
      cookies.delete("user");
      cookies.delete("token");
      console.log(message);
      return { success: false, message: "The server is down." };
    }
  }
} satisfies Actions;
