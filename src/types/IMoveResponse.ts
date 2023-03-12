import type ISocketResponse from './ISocketResponse';
import type IGame from './IGame';

interface IMoveResponse extends ISocketResponse {
	Game: IGame;
}

export default IMoveResponse;
