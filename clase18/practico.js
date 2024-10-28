//contraseña establecida
const claveCorrecta = "123456"
const botonVerificar = document.getElementById('verificar')
const mensajeDiv = document.getElementById('mensaje')

botonVerificar.addEventListener('click', () => {
    const inputPassword = document.getElementById('password').value

    //validar la clave
    if(inputPassword === claveCorrecta){
        mensajeDiv.textContent = '¡Contraseña correcta!'
        mensajeDiv.className = 'mensaje-correcto'
    }else{
        mensajeDiv.textContent = '¿Olvidaste la clave? Intenta de nuevo'
        mensajeDiv.className = 'mensaje-incorrecto'
    }
})