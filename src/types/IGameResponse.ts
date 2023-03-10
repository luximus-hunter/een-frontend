import type IPlayerResponse from "./IPlayerResponse";
import type ICardResponse from "./ICardResponse";

interface IGameResponse {
	running: boolean;
	id: string;
	onTurn: string;
	password: string;
	maxPlayers: number;
	players: IPlayerResponse[];
	drawPile: ICardResponse[];
	discardPile: ICardResponse[];
	drawBuffer: number;
}

export default IGameResponse;
