
async function obtener_productos() {

   const datos = await fetch('https://fakestoreapi.com/products')

    const datos_definitivos = await datos.json()


    let columnas = []
        
    datos_definitivos.forEach(element => {

       let columna = `

            <div class="col-lg-3">

            <div class="card" style="width: 18rem;">
                <img height="350" src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">$${element.price}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>

            </div>
       `

       columnas.push(columna)

    });

    document.getElementById("catalogo").innerHTML = columnas.join('')
}

obtener_productos()