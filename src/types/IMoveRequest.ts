import type IMove from './IMove';

interface IMoveRequest {
	GameId: string;
	PlayerId: string;
	Move: IMove;
}

export default IMoveRequest;
