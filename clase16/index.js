/* Clase 16 -> Funciones de orden superior */

/* forma tradicional */
// let total = 0
// for(let i = 1; i<=10; i++){
//     total +=i
// }

// console.log(total) //55

/*método de abstracción */
//console.log(sumarRango(1,10)) //55

/* funciones de alto orden o higher order functions */

/*function mayorQue(n){
    return(m) => m > n
}

let mayorQueDiez = mayorQue(10)

//let mayorQueDiez = (m) => m > 10

console.log(mayorQueDiez(12)) //true
console.log(mayorQueDiez(8)) //true
*/

/*function asignarOperacion(op){
    if(op == "sumar"){
        return(a,b) => a + b
    }else if(op == "restar"){
        return(a,b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log(suma(4,6)) //10
console.log(resta(5,3)) //2*/

/*const numeros =[1,2,3,4]

function porCadaUno(arr, fn){
    for(const el of arr){
        fn(el)
    }
}

porCadaUno(numeros, console.log)



let total = 0

function acumular(num){
    total += num
}

porCadaUno(numeros, acumular)

console.log(total) //10*/

/*const numeros =[1,2,3,4]

function porCadaUno(arr, fn){
    for(const el of arr){
        fn(el)
    }
}
const duplicado = []

porCadaUno(numeros, (el)=>{
    duplicado.push(el * 2)
})
console.log(`array original: ${numeros}`)
console.log(`array duplicado: ${duplicado}`)
*/

/* Metodos de busqueda y transformacion */


/*ForEach */

/*const numeros = [1,2,3,4,5,6]

numeros.forEach((num) => {
    console.log(num)
});*/

/*Find() */

/*const comidas = [
    {nombre: "milanesa", precio: 1500},
    {nombre: "papas fritas", precio: 500},
    {nombre: "ensalada", precio: 1000},
    {nombre: "milanesa con papas", precio: 2500}
]*/

/*const resultado = comidas.find((el) => el.nombre === "milanesa")
const resultado2 = comidas.find((el) => el.nombre === "Ensalada" ) //se resuelve con .toLowerCase()  o .toUpperCase()
const resultado3 = comidas.find((el) => el.precio === 2500)


console.log(resultado)
console.log(resultado2)
console.log(resultado3)*/


/* Filter() */

/*const resultadoFilter = comidas.filter((el) => el.nombre.includes("a"))
const resultadoFilter2 = comidas.filter((el) => el.precio < 2000)

console.log(resultadoFilter)
console.log(resultadoFilter2)*/


/*Some*/

/*console.log(comidas.some((el) => el.nombre == "milanesa")) //true
console.log(comidas.some((el) => el.nombre == "carne")) //false*/


/* Map */

/*const nombres = comidas.map((el) => el.nombre)
console.log(nombres)

const actualizado = comidas.map((el) => {
    return{
        nombre: el.nombre,
        precio: el.precio*1.25
    }
})

console.log(actualizado)*/


/*Reduce */


/*const numeros = [1,2,3,4,5,6]

const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) //21*/


/*const miCompra = [
    {nombre: "milanesa", precio: 1500},
    {nombre: "papas fritas", precio: 500},
    {nombre: "ensalada", precio: 1000},
    {nombre: "milanesa con papas", precio: 2500}
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(`El total de su compra es: $${total}`) //5500*/


/*sort*/

/*const numeros = [10,-2,0.3,4,5,6]

numeros.sort((a,b) => a-b)
console.log(numeros)*/

/*const comidas = [
    {nombre: "milanesa", precio: 1500},
    {nombre: "papas fritas", precio: 500},
    {nombre: "ensalada", precio: 1000},
    {nombre: "milanesa con papas", precio: 2500}
]

comidas.sort((a,b) =>{
    if(a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    //a es igual que b
    return 0;
})

console.log(comidas)*/

/* Ejemplo aplicado */

/*const comidas = [
    {id:1, producto: "milanesa", precio: 1500},
    {id:2, producto: "papas fritas", precio: 500},
    {id:3, producto: "ensalada", precio: 1000},
    {id:4, producto: "milanesa con papas", precio: 2500}
]

const buscado = comidas.find(producto => producto.id === 3)
console.log(buscado)

const existe = comidas.some(producto => producto.producto === "milanesa")
console.log(existe)

const baratos = comidas.filter(producto => producto.precio <= 1500)
console.log(baratos)

const listaNombres = comidas.map(producto => producto.producto)
console.log(listaNombres)*/


/* El objeto Math */

//console.log(Math.E)
//console.log(Math.PI)

//Math.min() Math.max()
// console.log(Math.min(55,12,-9,9000,542))
// console.log(Math.max(55,12,-9,9000,542))

// console.log(Math.min(55,12,-Infinity,-9,9000,542))
// console.log(Math.max(55,12,Infinity,-9,9000,542))

/*Ceil, Floor y Round*/

/*const PI = Math.PI //3.14415etcetcetc

//CEIL: devuelve el entero mayor o igual mas próximo
console.log(Math.ceil(PI))

//FLOOR: devuelve el entrero mas cercano redondo hacia abajo
console.log(Math.floor(PI))

//ROUND: retorna el valor de un numero redondeado al entero mas cercano
console.log(Math.round(PI))*/



/* Square Root -> si se le envia un nro negativo retorna NaN => not a number*/

/*console.log(Math.sqrt(2))
console.log(Math.sqrt(9))
console.log(Math.sqrt(1))
console.log(Math.sqrt(-1))
console.log(Math.sqrt(0))*/

//console.log(Math.random())

/*console.log(Math.floor(Math.random()*21))

console.log(Math.random()* 30+20)*/

// console.log(Math.floor(Math.random()*21)) //rango desde 0 hasta 20
// console.log(Math.ceil(Math.random()*21)) //rango es de 1 a 21
// console.log(Math.round(Math.random()*21)) // rango desde 0 hasta 21

/* clase DATE*/

/*console.log(new Date(2024, 9, 27))

let casiNavidad = new Date("December 25, 2024, 23:59:59")

console.log(casiNavidad)*/

/*const inicio = new Date()

for(let i = 0; i < 1000; i++){
    console.log('haciendo tiempo')
}

const final = new Date()
console.log(`El proceso tardó ${final + inicio} milisegundos`)*/

