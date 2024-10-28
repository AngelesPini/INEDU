//JSON -> es un formato basado en texto plano. 


// Eventos en JS

//el método addEventListener() -> nos permite definir el evento que se va a escuchar

/*
let boton = document.getElementById("btnPrincipal")

boton.addEventListener("click", respuestaClick)

function respuestaClick(){
alert("hiciste click")
}

*/

//primera manera
let boton = document.getElementById("btnPrincipal")

function respuestaClick(){
    alert("hiciste click")
    }

boton.addEventListener("click", respuestaClick)

//segunda manera
let boton2 = document.getElementById('btnSecundario')

boton2.onclick = () =>{alert('click en bton 2')}


//tercera opcion -> esta es la PEOR
//<button value="Click3" onclick="alert('Respuesta 3')"> Click 3</button> NO VA MAS


/*Eventos mas comunes
mouse -> mousedown, mouseup / mouseover, mouseout/ mousemove/click
teclado
change
input
submit
otros
*/

// let contenedor = document.getElementsByClassName("eventosMouse"[0])

// function cambiarColor(){
//     contenedor.className = 'azul'
// }

// contenedor.addEventListener("click", cambiarColor)


//eventos del teclado

//eventos key

/*let inputNombre = document.getElementById('nombre')
let inputEdad = document.getElementById('edad')


inputNombre.onkeyup = () => {console.log('Ingreso de caracter')}
inputEdad.onkeydown = () => {console.log('Key down')}*/



//eventos change

/*let inputNombre = document.getElementById('nombre')
let inputEdad = document.getElementById('edad')


inputNombre.onchange = () => {console.log('valor nombre')}
inputEdad.onchange = () => {console.log('valor edad')}


//Elemento input
let inputEvento = document.getElementById('eventoInput')

inputEvento.addEventListener('input', () =>{
    console.log(inputEvento.value)
})*/

//Evento submit

let formulario = document.getElementById('formulario')

function validarFormulario(e){
    e.preventDefault();
    alert('Formulario Enviado')

    let form = e.target
    console.log(form.children[0].value)


}

formulario.addEventListener('submit', validarFormulario)


//comentario de prueba
