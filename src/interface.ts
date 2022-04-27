export interface IUser {
	id: string;
	username: string;
	name: string;
	email: string;
	phone: string;
	website: string;
	address: Address;
	company: {
		name: string;
	}
}

interface Address {
	street: string;  // Address line 1 
	suite: string;  // Address line 2 
	city: string;
	zipcode: string;
}