//prompt('ingrese su nombre')

/*console.dir(document.body)

//puedo acceder al DOM por etiqueta, classname o id


//GetElementById() -> acceder al eleemento de la estructura a través de su ID

let subtitulo = document.getElementById('subtitulo')

console.log(subtitulo.innerHTML)


//getElementByClassName()
let paises = document.getElementsByClassName('paises')

console.log(paises[2].innerHTML)

//getElementByTagName()
let textos = document.getElementsByTagName('p')
console.log(textos[1].innerHTML)*/

// let paises = document.getElementsByClassName('paises')


// for(const pais of paises){
//     console.log(pais.innerHTML)
// }


let modificado = document.getElementById('modificar')

console.log(modificado.innerText) //"Hola Mundo"

modificado.innerText = "Hola Mundo!"
console.log(modificado.innerText)

//innerHTML

let contenedor = document.getElementById('contenedorJavaScript')

contenedor.innerHTML = "<h2>Hola Mundo! </h2> <p> Aguante JavaScript</p>"

contenedor.className = "contenedor"

let parrafo = document.createElement('p')

parrafo.innerHTML = ' <p> Hola Chicos </p>'


contenedor.appendChild(parrafo)

parrafo.remove()

let paises = document.getElementsByClassName('paises')
paises[1].remove()

let padre = document.getElementById('personas')

let personas = ["HOMERO", "BART", "LISA", "MAGGIE", "MARGE"]

for(const persona of personas){
    let li = document.createElement('li')
    li.innerHTML = persona
    padre.appendChild(li)
}

/*let producto = {id: 1, nombre: "Arroz", precio: 125}

let concatenado = `<p>ID: ${producto.id} </p>
<p>Nombre: ${producto.nombre}</p>
<p>Precio: ${producto.precio}</p>`/*/

// let producto = {id: 1, nombre: "Arroz", precio: 125}

// let contenedorHTML = document.getElementById('producto')

// let contenedorPadre = document.createElement('div')
// contenedorPadre.className = 'ProductoUnitario'
// contenedorPadre.innerHTML = `<p>ID: ${producto.id} </p>
// <p>Nombre: ${producto.nombre}</p>
// <p>Precio: ${producto.precio}</p>`


// contenedorHTML.appendChild(contenedorPadre)

//Creacion d eproductos a partir d eun nodo

let contenedorPadre = document.getElementById('productos')
const productos = [
    {id:1 , nombre: "arroz", precio:125, stock:5},
    {id: 2, nombre: "harina", precio: 300, stock:2},
    {id:3 , nombre: "fideos", precio:120, stock:1},
    {id:4 , nombre: "milanesas", precio:1500, stock:10},
    {id:5 , nombre: "manzanas", precio:500, stock:20}
]

for(const producto of productos){
    let contenedor = document.createElement('div')
    contenedor.className = 'producto'
    contenedor.innerHTML = `<p>ID: ${producto.id} </p>
<p>Nombre: ${producto.nombre}</p>
<p>Precio: ${producto.precio}</p>
<p>Stock: ${producto.stock}</p>
<button>Añadir al carrito</button>
`
contenedorPadre.appendChild(contenedor)
}


//querySelector

let textoPadre = document.querySelector("#textoPadre p")

textoPadre.innerHTML = "modificado"
