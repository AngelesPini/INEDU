//array donde mis productos elegidos se almacenarán
let miViaje = []

//filtro para encontrar paquetes y vuelos



//contenedor de paquetes

const pack = document.getElementById('paquetes')

//contenedor carrito

const serviciosElegidos = document.getElementById('serviciosElegidos')

//resultado de la suma de mis productos

const precioTotal = document.getElementById('precioTotal')

const agregados = document.getElementById('agregados')

//funcion que muestra productos
function mostrarPaquetes(array){
    //crear elemento HTML
    pack.innerHTML = '';

    //declarar parametros condicionales para mostrar los productos
    for(const Paquete of array){
        //crear un div contenedor de la info
        let div = document.createElement('div')
            //asigno una className
            div.className = 'paquete'

            //asigno contenido a la variable (corresponde al array de productos)
            div.innerHTML  = `           
                    <div class="card">
                        <h3>${Paquete.nombre}</h3>
                        <p>Para 1 personas</p>
                        <ul>
                            <li>Válido por: ${Paquete.dias} días</li>
                            <li>Tiene hotel?: ${Paquete.hotel}</li>
                            <li>Precio en dólares: U$D ${Paquete.precio}</li>
                        </ul>
                        <button id="botonAgregar${Paquete.id}">LO QUIERO YA!</button>
                    </div>
            `
            //agregar como hijo

            pack.appendChild(div)    //indicar a mi botón que cumpla la funcion de agregar productos al chango

            let botonAgregar = document.getElementById(`botonAgregar${Paquete.id}`)
            botonAgregar.addEventListener('click', ()=>{
                agregarPack(Paquete.id)
                alert(`Agregaste ${Producto.nombre} a tu carrito con éxito`)
            })
    }


}

mostrarPaquetes(paquetes)