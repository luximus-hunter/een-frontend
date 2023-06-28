import type IPlayerResponse from "./IPlayerResponse";

interface IUserResponse extends IPlayerResponse {
  wins: number;
  loses: number;
}

export default IUserResponse;
