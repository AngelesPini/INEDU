/*

Palabras reservadas: 

break, case, catch, continue, default, let, delete, do, else, finally
for, function, if, in, instanceof, new, return, switch, this, throw, try,
typeof, var, void, while, with.... y muchas mas

Estas son las mas populares.

*/

//variables y valores.

/* una variable es una espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecución de un programa 
En las variables almacenamos diversos tipos de datos que utilizaremos en la aplicacion que vayamos a desarrollar.*/

/*let nombre = "anshi"; //esta es una variable de tipo cadena o string. 
let edad; //esta es una variable sin asignación.

const generoBiologico = 'femenino';

//El simbolo '=' significa ASIGNACIÓN

edad = 27;

// edad = 30;

// nombre = 'raul';

console.log('Bienvenido ' + nombre + ' tenés ' + edad + ' años')


// generoBiologico = 'masculino' ----> ESTO NO SE PUEDE HACER

//El uso de VAR para declarar variables queda estrictamente prohibido. 


let numeroA = 1;
let numeroB = 10;

let numeroA2 = '1';
let numeroB2 = '10';


let resultadoSuma = numeroA + numeroB

let resultadoResta = numeroA - numeroB

let resultadoMultiplicacion = numeroA * numeroB

console.log(numeroA)
console.log(numeroB)
console.log('El resultado es: ' + resultadoSuma)
console.log('El resultado es: ' + resultadoResta)
console.log('El resultado es: ' + resultadoMultiplicacion)
console.log('El resultado es: ' + numeroA2 + numeroB2)

*/


/*Prompts y alerts */

//La sentencia prompt() muerta un cuedro de dialogo para que el usuario ingrese un dato.

/*let nombreIngresado = prompt("Ingrese su nombre")

let nombreUsuario = nombreIngresado

console.log('Bienvenido ' + nombreUsuario)*/

/* Null =/= undefined =/= NaN 
Null ---> nulo o inexistente

undefined ----> sin definir

NaN ---> not a number
*/


/* tipos de console*/



console.log('mensaje') // muestra un mensaje normal en la consola que puede ser utilizado para mostrar info, valores, concatenaciones, etc.

console.error('Este es un error') //muestra un mensaje de error en la consola, es util para destacar problemas o errores

console.warn('Cuidado! esto es una advertencia') // Mostrar una advertencia en la consola que puede utilizarse para señalar sitaciones que pueden generar un problema

console.table() //muestra datos tabulares, como arrays y objetos, en forma de tabla. Esto sirve para facilitar la lectura y analisis de datos ---> acompañado de arrays u objetos SI O SI. 


console.time() /*Estos lo que hacen es medir el tiempo que tarda en ejecutarse un bloque de codigo. Se utilizan para evaluar el rendimiento de ciertas partes del codigo*/
console.timeEnd()



/* ALERTS */

//la sentencia alert muestra una ventana sobre la pagina web que estamos accediendo y revela un mensaje que pasa como parametro a la llamada


//alert('Hola Mundo! ')


// let nombre = prompt('Ingrese su nombre')
// let edad = parseInt(prompt('Ingrese su edad'))


// alert('Bienvenido/a ' + nombre + ' tenés ' + edad + ' años')


let numero1 = parseInt(prompt('Ingrese el primer numero'))
let numero2 = parseInt(prompt('Ingrese el siguiente numero'))

let resultadoSuma = numero1 + numero2


alert('El resultado de la suma es: ' + resultadoSuma)