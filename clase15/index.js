//Arrays o Arreglos tienen un indice que va desde 0 (SIEMPRE desde 0) y finalizan en el ultimo objeto o valor que tengan.

/*const array1 = [];

const array = [1, 2, 3, 4]

const array3 = ["juana", "esteban", "jose"]

const array4 = [true, false, false, false, true]

const array5= [1, true, "juana", true, false, 3, 1512136465, "esteban"]*/

// console.log(array5[0])
// console.log(array5[5])

/*for(let index = 0; index < 8; index++){
    console.log(array5[index])
} */
// let resultado = array5[0] + array5[5]
// console.log(resultado)


//método que cuenta cuantos elementos hay en el array
//console.log(array5.length)

/*for(let i = 0; i < array5.length; i++){
    console.log(array5[i])
}*/


//metodo push -> suma un elemento al final del array
/*let miArray = ["marca", 3, true]
console.log(miArray)

miArray.push('otro elemento')
console.log(miArray.length)
console.log(miArray)


//metodo unshift -> suma un elemento al inicio del array
miArray.unshift('otro elemento al principio')
console.log(miArray)*/

//Quitar elementos utilizo POP y SHIFT
/*miArray.pop()
console.log('eliminar el ultimo'.toLocaleUpperCase())
console.log(miArray)
console.log('eliminar el primero'.toLocaleUpperCase())
miArray.shift()
console.log(miArray)
miArray.shift()
console.log('eliminar el primero otra vez'.toLocaleUpperCase())
console.log(miArray)*/

//metodo splice() 
/*console.log(array5)

array5.splice(2, 6)

console.log(array5)*/

//join 

/*console.log(array5.join(", "))*/

//Concat
/*const arraysjuntos = array4.concat(array5)

console.log(arraysjuntos)*/


//slice

/*const separados = array5.slice(1,5)

console.log(separados)*/

//indexOf
/*
console.log(array5.indexOf("juana"))
console.log(array5.indexOf('Raul'))*/

//includes

/*console.log(array5.includes("juana"))
console.log(array5.includes('raul'))*/

//Reverse
/*console.log(array5.indexOf('esteban'))
array5.reverse()
console.log(array5)
console.log(array5.indexOf('esteban'))*/


//Iniciar array vacio

/*let nombres = []

let confirmar = prompt('Desea agregar un nombre?')

while(confirmar === 'si'){
    let nombre = prompt('Ingrese su nombre')
 if(nombre){
    nombres.push(nombre)
    alert(`nombre agregado: ${nombre}`)
}else{
    alert('No se ingresó nada')
}   
confirmar = prompt('Desea agregar un nombre?')
}


console.log(nombres)*/


/*
let nombres = ["ana", "luis", "josé", "anshi"]

let nombreParaEliminar = prompt('Que nombre desea eliminar?')

let index = nombres.indexOf(nombreParaEliminar)

if(index !== -1){
    nombres.splice(index, 1)
    alert(`nombre eliminado: ${nombreParaEliminar}`)
}else{
    alert(`el nombre ${nombreParaEliminar} no existe o ya fue eliminado`)
}


console.log(nombres)*/


//mostrar el contenido de un array por alert

/*let nombres = ["ana", "luis", "josé", "anshi"]

let convertir = nombres.join(", ")
alert(`contenido del array: ${convertir}`)*/


/*const objeto1 = {id: 1, producto: "Arroz"}
let array = [objeto1, {id: 2, producto :"Fideos"}]

console.log(array)

array.push({id: 3, producto: "Mermerlada"})*/


//for of permite recorrer un array ejecutando un bloque de codigo por cada elemento del objeto. 

/*

for(const gatito of gatitos){
    console.log(gatito.id, gatito.nombre, gatito.vida, gatito.especial)
}*/
const gatitos = [
    {id: 0, nombre: "Vidar", vida: 100, especial: false},
    {id: 1, nombre: "atun", vida: 100, especial: true},
    {id: 2, nombre: "bigotes", vida:100, especial:true},
    {id: 3, nombre: "micaela", vida: 100, especial: false},
    {id: 4, nombre: "cumbia", vida: 100, especial: true}
]

class Gatito{
    constructor(nombre, especial){
        this.nombre = nombre.toUpperCase()   
        this.especial = especial
    }

}

gatitos.push(new Gatito ("Goos", false))
gatitos.push(new Gatito ("Margarita", false))
gatitos.push(new Gatito ("Tally Bananas", false))
gatitos.push(new Gatito ("Beetlejuice", false))


for(const gatito of gatitos){
    console.log(gatito.nombre, gatito.especial)
}