import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';

export interface Profile {
	id?: string;
	username?: string;
	age?: number;
	firstName?: string;
	lastName?: string;
	currency?: Currency;
	country?: Country;
	city?: string;
	avatar?: string;
}
