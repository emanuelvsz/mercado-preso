
class Product {
	#name: string;
	#price: number;
	#description: string;

	constructor(
		name: string,
		price: number,
		description: string
	) {
		this.#name = name;
		this.#price = price;
		this.#description = description;
	}

	get name() {
		return this.#name;
	}

	get price() {
		return this.#price;
	}

	get description() {
		return this.#description;
	}	
}

export { Product };
