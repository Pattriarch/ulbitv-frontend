import { type Country, type Currency } from 'shared/const/common';

export interface Profile {
	username: string;
	password: string;
	age: number;
	firstName: string;
	lastName: string;
	currency: Currency;
	country: Country;
	city: string;
	avatar: string;
}

export interface ProfileSchema {
	data?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
}
