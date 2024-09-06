/* Funciones
Se declaran a traves de la palabra reservada function.
Si osi lleva un nombre en minuscula y sin espacios, seguido de parentesis
El contenido se coloca entre llaves
El nombre de la funcion no se puede repetir

function saludar(){
todo el contenido de la funcion
}
*/

// let nombre = "anshi"

// function saludar(){
//     console.log(`hola ${nombre}`)
// }

// saludar() //lamado a la funcion


// function solicitarNombre(){
// let nombreIngresado = prompt("Ingresar nombre")
// alert(`el nombre ingresado es ${nombreIngresado}, no tiene covid`)    
// }

// let solicitarDato = prompt('tiene covid? ')

// if(solicitarDato === "si"){ 
//     alert(`no puede pasar`)
// }else{
//     solicitarNombre()
// }

// function milanesas(par1, par2){
//     console.log(par1 + " " + par2)
// }

// milanesas("Clase de programacion", " número 13 y 14")

/*
//Declarar una variable para guardar un resultado
let resultado = 0

//Funcion que suma dos numeros y reasigna el valor de resultado
function sumar(num1, num2){
    resultado = num1 + num2
}

//Funcion que muestra el resultado por consola

function mostrar(mensaje){
    console.log(mensaje)
}

//Llamado a las funciones

sumar(3,6)
mostrar(resultado)
*/


/*
function sumar(num1, num2){
    return num1 + num2
}

let resultado = sumar(5, 5)

console.log(resultado)*/
/*
function calculadora(num1, num2, operacion){
    switch (operacion){
        case "+":
            return num1+num2
            break;
        case "-":
            return num1-num2
            break;
        case "*":
            return num1*num2
            break;
        case "/":
            return num1/num2
            break;
        default:
            return 0
            break;
    }
}

console.log(calculadora(10, 5,"*"))*/

/*Scope (o ambito)

ambito global: cuando una variable se define al principio del código sin pertenecer a ninguna función o bloque en particular

ambito local: una variable que pertenece exclusivamente a una funcion, ciclo, bloque, etc


por ejemplo:

function saludar(){
let nombre = "anshi" <----- esta variable es local. 
}

let nombre = "anshi"

function saludar(){
console.log('hola' + nombre)
}


console.log('te llamas' + nombre)
*/

/*
function saludar(){
    let nombre = 'anshi'
    console.log(nombre)
}

saludar()

let nombre2 = prompt('ingrese su nombre')

function saludar2(){
    alert(nombre2)
}

saludar2()

nombre2 = "juana"

console.log(nombre2)*/

/* Funciones anonimas*/

/*
const suma = function(a, b) {return a+b}

const resta = function(a, b) {return a-b}

console.log(suma(15,20))
console.log(resta(10,2))*/


/*funciones flecha*/

/*const suma = (a,b) => { return a+ b }

console.log(suma(13,20))*/


/*Calcular un precio*/

/*const suma = (a,b) => { return a+ b }
const resta = (a,b) => { return a - b }

const iva = x => x * 0.21
let precioProducto = 500
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio)*/
