import type IUserResponse from "./IUserResponse";

interface ILoginResponse {
  token: string;
  user: IUserResponse
}

export default ILoginResponse
