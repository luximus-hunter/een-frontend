import type ICard from './ICard';

interface IMove {
	Action: number;
	Card: ICard | null;
}

export default IMove;
