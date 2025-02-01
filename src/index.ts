import { getPokemon } from './generics/get-pokemons';

getPokemon('pikachu')
	.then((res) => console.log(res.sprites))
	.catch((err) => console.error(err));
