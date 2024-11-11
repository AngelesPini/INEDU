/*let total = 0 ;
let cuenta = 1;

while(cuenta <= 10){
    total += cuenta;
    cuenta += 1;
    console.log(cuenta)
}

console.log(total)*///(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 +9 +10 =55)


/*function aplicar(funcion, valor){
    return funcion(valor);
}

function cuadrado(x){
    return x*x;
}
let resultado = aplicar(cuadrado,5)

console.log(resultado)*/

/*function asignarOperacion(op){
    if(op =="sumar"){
        return(a, b) => a+b;
    } else if(op =="restar"){
        return (a,b) => a-b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion('restar')

console.log(`El resultado de la suma es ${suma(4,6)}`) //10
console.log(resta(10,8)) //2*/


/*const frutas = ['manzana', 'pera', 'naranja', 'melon', 'frutilla', 'pomelo', 'kiwi']


const esLarga = (fruta) => fruta.length > 5; 
const frutasLargas = frutas.filter(esLarga)

console.log(frutasLargas.join(' - '))*/

/*const numeros = [1, 2, 3, 4, 5, 6]

const duplicar = (numero) => numero * 2  
const numerosDuplicados = numeros.map(duplicar)
console.table(numerosDuplicados) */

/*let mostrar = document.getElementById('mostrar')

const miArray = [1, 2, 3, 4, 5]


miArray.forEach(function (elemento){

    // mostrar.innerHTML = '';
    let div = document.createElement('div')
    div.innerHTML = `<p> ${elemento}</p>`

    mostrar.appendChild(div)
    console.log(elemento)
})*/


/*const miArray2 = [
{id:1, nombre: "Juana"},
{id:2, nombre: "Ramiro"},
{id:3, nombre: "Giovanna"},
{id:4, nombre: "Santino"},
{id:5, nombre: "Lorenzo"},
{id:6, nombre: "Maia"}
]

let buscador = document.getElementById('buscador')

const elementoEncontrado = miArray2.find(function (elemento){
    return elemento.id === buscador.value;
})

console.log(elementoEncontrado)*/


/*const numeros2 = [2, 5, 8, 10] //25


const suma2 = numeros2.reduce(function(acc, numero2){
return acc + numero2
})

console.log(suma2)*/


/* OBJETOS */

/*function Persona(nombre, edad, calle){
    this.nombre = nombre
    this.edad = edad
    this.calle = calle
    this.hablar = function(){console.log(`Hola! Soy ${this.nombre}, tengo ${this.edad} años y vivo en la calle ${this.calle}`)}
}

const persona1= new Persona("Homero", 39, "Av. Siempreviva 742")
const person2 = new Persona("Marge", 37, "Av. Siempreviva 742")

persona1.hablar()
person2.hablar()*/


/*const producto = {
    nombre: 'manzana',
    categoria : 'frutas',
    precio: 1.99,
    nutrientes:{
        carbs: 0.55,
        grasas: 0.3,
        proteina: 0.2
    }
}
console.log(producto)

console.log(producto.nombre)
console.log(producto.nutrientes.carbs)*/


/*const auto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2022,
    color: "Rojo",
    precio: 450000,
    conductor:{
        nombre: "Juan",
        edad: 35,
        licencia: true
    },
    caracteristicas: ["aire acondicionado", "audio premium", "asientos de cuero"]
}

console.log(auto.marca)
console.log(auto.modelo)
console.log(auto.conductor.nombre)
console.log(auto["caracteristicas"][2])
console.log("Precio viejo" + auto.precio)

auto.transmision = "automática"
auto.precio = 550000

console.log("Precio nuevo" + auto.precio)
console.log(auto.transmision)*/