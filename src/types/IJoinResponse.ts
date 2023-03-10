import type ISocketResponse from "./ISocketResponse";
import type IPlayer from "./IPlayer";

interface IJoinResponse extends ISocketResponse {
  Players: IPlayer[];
}

export default IJoinResponse;
