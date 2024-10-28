const contenedor = document.getElementById('contenedorCambiante')


// cambia el color cuando hago click
contenedor.addEventListener('mousedown', ()=>{
    contenedor.className = 'eventosMouse azul'
})
//cambia el color cuando suelto el click
contenedor.addEventListener('mouseup', () =>{
    contenedor.className = 'eventosMouse rojo'
})

//cuando retiro el mouse
contenedor.addEventListener('mouseover', () => {
    contenedor.className = 'eventosMouse naranja'
})


// cuando el mouse se mueve dentro

// contenedor.addEventListener('mousemove', () => {
// contenedor.className = 'eventosMouse agrandar'
// })

// evento click

contenedor.addEventListener("click", () =>{
    contenedor.className = 'eventosMouse radio'
})


/*no está mal, pero no es el mejor
contenedor.addEventListener("mousedown", () => {
    contenedor.style.backgroundColor = 'red'
})*/