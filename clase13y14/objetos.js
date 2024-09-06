/*objetos*/

// let nombre = "Homero"
// let edad = 33
// let calle = "Avda. Siempreviva 742"
/*
const persona1 = {
    nombre : "Homero", 
    edad: 33, 
    calle: "Avda.Siempreviva 742"
}

console.log(persona1.nombre)
console.log(persona1.edad)
persona1.edad= 40
console.log(persona1.edad)
console.log(persona1.calle)*/

//console.log(persona1["nombre"])

/*
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("Homero", 33, "Avda. Siempreviva 742")
const persona2 = new Persona("Marge", 31, "Avda. Siempreviva 742")
console.log(persona1, persona2)*/
/*
function f1(){
    return this
}

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}*/


/*metodos*/

/*
let cadena = "HOLA MUNDO"

console.log(cadena.length) //<--- medir el largo de la cadena

console.log(cadena.toLowerCase()) //<---- pasa a minusculas todo el texto

console.log(cadena.toUpperCase())//<---- convierte el texto a mayusculas*/
/*
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años de edad`)}
}

const persona1 = new Persona("Homero", 33, "Avda. Siempreviva 742")

persona1.hablar()

console.log("nombre" in persona1)
console.log("origen" in persona1)

for(const propiedad in persona1){
    console.log(persona1[propiedad])
}*/


/**Clases */
/*
class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años de edad`)
    }

}

const persona1 = new Persona("Homero", 33, "Avda. Siempreviva 742")

persona1.hablar()*/


class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio *1.21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto("arroz", "125")

console.log(producto1.nombre)
console.log(producto1.precio)

producto1.sumaIva(); // No lo imprimas directamente, ya que no retorna nada
console.log(producto1.precio); // Ahora precio incluye el IVA

producto1.vender(); // Tampoco retorna nada
console.log(producto1.vendido); // true