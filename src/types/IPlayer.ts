import type ICard from './ICard';

interface IPlayer {
	Id: string;
	Username: string;
	ProfileImage: string;
	Cards: ICard[];
}

export default IPlayer;
