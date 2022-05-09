
/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const objeto = {}
Object.defineProperties(objeto, {
    "color":{
        value:'rojo',
        enumerable: true
    },
    "tamaño":{
        value:'3 in',
        enumerable: true
    },
    "peso":{
        value:'10 kg',
        enumerable: true
    },
    "cantidad":{
        value:'3',
        enumerable: true
    },
}
);
console.log(objeto);
