import fs from 'fs';

//Clase para representar un superheroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad; 
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Funcion para leer y ordenar los superheroes
export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta , 'utf8');
    const superheroesArray = JSON.parse(datos);
    
    //Convertir a instancias de superheroes
    const superheroes = superheroesArray.map(superheroe => new Superheroe(
        superheroe.id,
        superheroe.nombreSuperheroe,
        superheroe.nombreReal,
        superheroe.nombreSociedad,
        superheroe.edad,
        superheroe.planetaOrigen,
        superheroe.debilidad,
        superheroe.poder,
        superheroe.habilidadEspecial,
        superheroe.aliado,
        superheroe.enemigo
    ));

    //Ordenar por nombre de superheroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
}










/******************************************************************************************************************************************/
//Modificaciones
//Nueva funcion para agregar superheroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    //Convertir los nuevos superheroes a instancias de Superheroe
    const superheroesNuevos = nuevosSuperheroes.map(superheroe => new Superheroe(
        superheroe.id,
        superheroe.nombreSuperheroe,
        superheroe.nombreReal,
        superheroe.nombreSociedad,
        superheroe.edad,
        superheroe.planetaOrigen,
        superheroe.debilidad,
        superheroe.poder,
        superheroe.habilidadEspecial,
        superheroe.aliado,
        superheroe.enemigo
    ));

    //Combinamos listas
    const superheroesCombinados = [...superheroesOriginales, ...superheroesNuevos];

    //Guardamos la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(superheroesCombinados, null, 2), 'utf8');
    console.log('Lista de superheroes actualizada con exito');
}