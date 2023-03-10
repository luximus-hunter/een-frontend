import type IPlayer from './IPlayer';
import type ICard from './ICard';

interface IGame {
	Running: boolean;
	Id: string;
	OnTurn: string;
	Password: string;
	MaxPlayers: number;
	Players: IPlayer[];
	DrawPile: ICard[];
	DiscardPile: ICard[];
	DrawBuffer: number;
}

export default IGame;
