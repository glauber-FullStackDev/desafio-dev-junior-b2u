type Users = {
	id?: string;
	nome: string;
	email: string;
	phone: string;
};

type Cars = {
	id?: string;
	userId: string;
	nome: string;
	brand: string;
	description: string;
	yearOfManufacturing: string;
};

export type { Users, Cars };
