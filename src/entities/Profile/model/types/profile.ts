import { type Currency } from 'entities/Currency/model/types/currency';
import { type Country } from 'entities/Country/model/types/country';

export interface Profile {
	username?: string;
	age?: number;
	firstName?: string;
	lastName?: string;
	currency?: Currency;
	country?: Country;
	city?: string;
	avatar?: string;
}

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
}
