// Ciclos e iteraciones

//if -> si... tal cosa entonces condicion. ---- else -> sino... si no se cumple, entonces esto..-  - - else if ---> sino también.


/*if(condicion ==true){
    //retorno
}*/

//ciclos por conteo ---> FOR

/*
Estructura:

for(DESDE; HASTA; MIENTRAS TANTOO ACTUALIZACION){

}

*/

/*for(let i = 0; i <= 100; i++){
    console.log(i)
}*/


/*let numero = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicar: '))

for(let i = 1; i <= 10; i++){
    let resultado = numero * i
    alert(`${numero} * ${i} = ${resultado}`)
}*/


/*for(let turno = 1; turno < 5; turno++){
    let nombre = prompt('diga su nombre')
    alert(`Turno# ${turno} asignado a paciente: ${nombre}`)
}*/



/*for(let i = 1; i <= 10; i++){
//antes del console. voy a colocar un if

    if( i === 5){
        break;
    }

    console.log(i)
}*/


/*for(let i = 1; i<=10; i++){
    let tieneCovid = prompt('Tiene covid?: ')

    if(tieneCovid === "si"){
        console.log('no puede pasar')
        break;
    }else{
        alert('pase')
    }

    console.log(i)
}*/


/*for(let i = 1; i <= 10; i++){
    if (i=== 5){
        continue
    }
    console.log(i)
}*/

/*for(let numero = 1; numero <=20;numero++){
    //mostrar numeros pares -> el % significa "modulo", tiene q ver con cuestiones matematicas, no se detengan en este ejemplo
    if(numero %2 === 0){
        continue
    }
    console.log(numero)
}*/



//Ciclo WHILE ------> significa "mientras"

/*
ESTO NONOOONONONOOOOOOOOO LO HAGAN

let repetir = true

while(repetir){
console.log('repitiendo')
}


while(condicion){

    codigo a ejecutar.

}

*/

/*let usuario = prompt('Ingrese su usuario: ')

while(usuario != 'pepito'){

    alert(`El usuario ${usuario} es incorrecto!`)
    usuario = prompt('Ingrese su usuario: ')

}


alert(`Bienvenido ${usuario}`)*/


/*let entrada = prompt('Ingrese un dato: ')

while(entrada != "ESC"){
    alert(`El usuario ha ingresado ${entrada}`)
    entrada = prompt('Ingrese un dato: ')
}
*/


//El bucle DO....While

/*
do{
este codigo se va a ejecutar al menos UNA vez, siempre que la condicion sea verdadera
}while(condicion)

*/


/*let repetir = false

do{
    console.log('entramos')
}
while(repetir)*/

/* no se utiliza do while, como no se utilia var ya que "var" no reocnoce el scope. */

/* SWITCH 

switch(valor){
case valor1: codigo a ejecutar si se cumple valor1
break;

case valor2: codigo a ejecutar si se cumple valor2
break;

default: codigo a ejecutar si no se cumple ningun valor
break;


}
*/

/*let moneda = "usd"

switch(moneda){
    case "cop": console.log("moneda colombiana")
    break;

    case "ars": console.log('moneda argentina')
    break;

    case "clp": console.log('moneda chilena')
    break;

    default: console.log('moneda desconocida')
    break;
}*/



/*let entrada= prompt('ingrese su nombre')

while(entrada != "ESC"){

    switch(entrada){
        case "ana": console.log("hola Ana")
        break;
    
        case "juan": console.log('Hola Juan')
        break;
    
        case "lucas": console.log('Hola Lucas')
        break;
    
        default: console.log('hola extraño')
        break;
    }
    entrada= prompt('ingrese su nombre')
}*/