/*Condicionales 
Definicion: en programacion cuando hablamos de condicionales, nos referimos a una estructura sintactica que sirve para tomar una decision
a partir de una condicion.

Es decir:


Si <condicion>, entonces <operación>

if(condicion) -> if = "si" se cumple tal cosa..
{
operacion, retorno, o resultado
}


Para trabajar con condiciones mayormente lo hacemos a traves de valores booleanos


string = cadena de texto
numericos = numeros enteros, flotantes, etc
booleanos = verdadero o false / true // false.


if (condicion = true){
x operacion
} else = false{
operacion, retorno, resultado.
}
*/


/* Estructura IF -> MAS UTILIZADA EN TODOS LOS LENGUAJES DE PROGRAMACIÓN */


/*if(true){
    //bloque de código a ejecutar
    console.log('vas a ver este mensaje')
}

if(false){
    //bloque de código a ejecutar
    console.log('este mensaje no se va a ver')
}

console.log('fin del programa')*/

/*Comparaciones:
cuando utilizamos operadores matematicos,e stos resuelven un tipo de valor numerico. Osea el nresultaod de la operacion.
El primer operador de comparacion es el operador de equivalencia

un signo '=' ---> es asignación / asigna un valor a una variable o a una constante.

dos signos '==' --> equivalencia o comparación 

tres signos '===' comparación estricta.
*/


/*let numero = 6

//con (numero == 5) comparamos si numero es = a 5

if(numero == 5){//esta comparación no es verdadera
    console.log('es el numero correcto')
}else{//esta si
    console.log('no es el numero correcto')
}
*/

/*let color = "rojo" //---> Javascript DISTINGUE entre mayúsculas y minúsculas. No es lo mismo 'rojo' que 'Rojo' que 'ro jo'... etc

if(color == 'rojo'){
    console.log('el color es rojo')
}else{
    console.log('el color NO es rojo')
}*/


/* Entradas y salidas */

/*let nombreUsuario = prompt('Ingrese su nombre de usuario: ')

if(nombreUsuario == ""){
    alert('Usuario no válido')
}else{
    alert(`Nombre ingresado: ${nombreUsuario}`)
}*/

/*Template literals:

'Nombre ingresado: ' + nombreUsuario ---> mejor que esto

`Nombre ingresado: ${nombreUsuario}`----> utilizo esto

*/

/* condiciones anidadas: if, else. PERO TAMBIÉN: ELSE IF --> sino también....  */

/*let precio = prompt('Ingrese un precio: ')

if(precio < 20){
    alert('El precio es menor que $20')
}else if(precio < 50){
    alert('el precio es menor que $50')
}else if(precio < 100){
    alert(`El precio ingresado es: ${precio}, es menor a $100`)
}else if(precio == 100){
    alert('El precio es igual a $100')
}else{
    alert('el precio es mayor que $100')
}*/

/* Variables Booleanas */


/*let numero = 10
let esMayor = (numero > 5)

if(esMayor){
    console.log('El booleano es TRUE')
}*/




/* Operadores lógicos
Disponemos de operadores logicos tales como:
igual a, distinto a, menor, menor o igual, mayor, mayor o igual, and(y), or(o) y not (no).
La sintaxis de los OL se basa en simbolos matematicos que ya conocemos y se diferencian de la siguiente manera. 

OJO CON CONFUNDIR == CON = porque implican cosas distintas

Operadores logicos y relacionales:
== --> es igual: a==b
=== ---> Es estrictamente igual a===b 
5 === "5": FALSO 
'true' === true: FALSO 
true === true: VERDADERO 
true === false: FALSO
!= ---> es distinto: a!= b
!== es estrictamente distinto: a!==b
<, <=, >=, > ----> menor, menor o  igual, mayor o igual, mayor: a<=b
&& ----> operador and (y): a&&b
|| -----> operador or(o): a||b
! ----> operador not (no): !a
*/


//let nombreIngresado = prompt('Ingrese un nombre')
//let apellidoIngresado = prompt('Ingrese un apellido')

//comparador AND &&

/*if((nombreIngresado != "") && (apellidoIngresado !="")){
    alert(`Bienvenido! ${nombreIngresado} ${apellidoIngresado}`)
}else{
    alert('Error de validación.')
}*/

//comparador OR ||

/*if((nombreIngresado == 'ANSHI') || (nombreIngresado == 'anshi')){
    alert(`bienvenida ${nombreIngresado}`)
}else{
    alert('El nombre ingresado no es válido')
}
*/

/* Puedo combinar comparadores && y || */

/*if((nombreIngresado !="") && (nombreIngresado =="anshi") || (nombreIngresado =="ANSHI")){
    alert(`bienvenida ${nombreIngresado}`)
}else{
    alert('El nombre ingresado no es válido')
}*/

/*
No es lo mismo:

if((nombreIngresado !="") && (nombreIngresado == "anshi") || (nombreIngresado == "ANSHI"))

que:

if(((nombreIngresado != "") && (nombreIngresado =="anshi")) || (nombreIngresado == "ANSHI"))

*/

/* conversores toUpperCase & toLowerCase*/


/* SWITCH

switch(numero){
case 5:
    .....
    break;
case 8:
    .....
    break;
case 10000:
    ......
    break;
default:
    .....
    break;

}

*/



let entrada = prompt('Ingrese un nombre')

switch(entrada){
    case "luca":
        alert('hola luca')
        break;

    case "marco":
        alert('Hola marco')
        break;

    case "anshi":
        alert('Hola anshi')
        break;
    default:
        alert('hola extraño')
        break;
}