import { type User } from '@/entities/User';

/**
 * Интерфейс комментария к статье.
 */
export interface Comment {
	/** Уникальный идентификатор комментария. */
	id: string;

	/** Пользователь, оставивший комментарий. */
	user: User;

	/** Текст комментария. */
	text: string;
}
