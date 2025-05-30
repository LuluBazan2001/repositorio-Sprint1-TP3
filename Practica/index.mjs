import { leerSuperheroes,agregarSuperheroes } from './utils.mjs';

/*  MODIFICACIONES */
const archivoOriginal = './superheroes.txt';
const archivoNuevo = './agregarSuperheroes.txt';

//Agregamos nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevo);


//Lee y muestra la lista de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados: ');
console.log(superheroes);