import type ICardResponse from './ICardResponse';

interface IPlayerResponse {
	id: string,
	username: string,
	profileImage: string,
	cards: ICardResponse[]
}

export default IPlayerResponse;
