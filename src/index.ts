import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'; // object is not extensible

console.log(charmander);
charmander.savePokemonToDB(900);
