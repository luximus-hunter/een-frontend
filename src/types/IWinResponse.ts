import type ISocketResponse from "./ISocketResponse";
import type IPlayer from "./IPlayer";

interface IWinResponse extends ISocketResponse {
  Player: IPlayer;
}

export default IWinResponse;
