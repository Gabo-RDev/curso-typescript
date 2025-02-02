function printToConsole(constructor: Function) {
	console.log(constructor);
}

// Factory Decorator
const printToConsoleConditional = (print: boolean): Function => {
	if (print) {
		return printToConsole;
	} else {
		return () => {};
	}
};

const bloquearPrototipo = function (constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;
		descriptor.value = (id: number) => {
			if (id < 1 || id > 800) {
				return console.error('El id del pokemon debe de estar entre 1 y 800');
			} else {
				return originalMethod(id);
			}
		};
		// descriptor.value = () => console.log('Hola mundo');
	};
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
	public publicApi: string = `https://pokeapi.co`;
	constructor(public name: string) {}

	@CheckValidPokemonId()
	savePokemonToDB(id: number) {
		console.log(`Pokemon saved in DB ${id}`);
	}
}
