import { type AuthData } from '@/entities/User';

export interface Comment {
	id: string;
	user: AuthData;
	text: string;
}
