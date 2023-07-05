import { type Currency } from 'entities/Currency/model/types/currency';
import { type Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
	NO_DATA = 'NO_DATA',
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
	SERVER_ERROR = 'SERVER_ERROR'
}

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
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	validateErrors?: ValidateProfileError[];
}
