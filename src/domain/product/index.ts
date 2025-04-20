
class Product {
	#name: string;
	#price: number;
	#description: string;
	#imageUrl: string

	constructor(
		name: string,
		price: number,
		description: string,
		imageUrl: string
	) {
		this.#name = name;
		this.#price = price;
		this.#description = description;
		this.#imageUrl = imageUrl
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

	get imageUrl() {
		return this.#imageUrl
	}
}

export { Product };
