//LocalStorage & SessionStorage

//LOCAL STORAGE : Set item

//Los datos almacenados en local storage (variable global preexistente) se almacenan en el navegador de forma indefinida. Esta informacion persiste en cada ejecucion/inicializacion del navegador y hasta del sistema operativo

//Para almacenar la info se utiliza SetItem:

//Metodo -> localStorage.setItem (clave, valor)
//clave = nombre que identifica al elemento
//valor = valor/contenido del elemento


/*localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);*/

//clave-valor
// la informacion almacenada en el Storage se guarda rn la forma de clave-valor. Similar a como se tratan los objetos-> definimos claves en storage donde almacenamos valores.

/*localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

//Local storage: get item
localStorage.setItem('bienvenida', 'Hola Mundo!');

let mensaje = localStorage.getItem('bienvenida');

console.log(mensaje)


//Session storage: setItem

//se almacena hasta que el user cierra el browser o ventana/pestaña

localStorage.removeItem('bienvenida')

sessionStorage.setItem('seleccionados', [1,2,3])

let lista = sessionStorage.getItem('seleccionados').split(' ,')

console.log(typeof lista, lista)


for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log(`Clave: ${clave}`)
    console.log(`Valor: ${localStorage.getItem(clave)}`)
}

sessionStorage.clear()

console.log(sessionStorage)*/

//[Object, Object]


/*const objeto = {id: 2, producto: "Play Station"}
localStorage.setItem('objeto', objeto) //se guarda [object, Object]

localStorage.numeroPrueba = 5;


alert(localStorage.numeroPrueba) //5

let clave = 'toString' //toString -> metodo reservado
localStorage[clave] = "6"  //No se guarda este dato*/



// qué es JSON? -> JavaScript Object Notation 

// stringify -> acepta un objeto como paramentro y devuelve el texto JSON equivalente

// parse -> recibir un texto JSON como parametro y devuelve un objeto JAVASCRIPT

//JSON.sringify

/*const producto = {id: 1, producto: "arroz"}
const enJSON = JSON.stringify(producto)


console.log(enJSON) //{"id:" 1, producto: "arroz"}

console.log(typeof producto) //object

console.log(typeof enJSON) //string


localStorage.setItem('producto', enJSON) */ //guarda {id: 1, producto: "arroz"}

//parse -> JSON.parse

/*const enJSON = '{"id":1,"producto":"arroz"}'
const producto1 =  JSON.parse(enJSON)

console.log(typeof enJSON) //string

console.log(typeof producto1) //Object

console.log(producto1.producto) //arroz

// const producto2 = JSON.parse(localStorage.getItem('producto1'))

console.log(producto1.id)*/


let usuario
let usuariosEnLS = JSON.stringify(localStorage.getItem('usuario'))

if(usuariosEnLS){
    usuario = usuariosEnLS
}else{
    usuario = prompt('Ingrese su nombre de usuario')
}