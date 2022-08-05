function crear_catalogo()
{
    let lista_productos = JSON.parse(localStorage.getItem("productos"))


    let columnas = []

    lista_productos.forEach(element => {

        let columna = `
 
             <div class="col-lg-3">
 
             <div class="card">
                 <img style="height:280px" src="${element.imagen}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${element.precio_venta}</h5>
                     <p class="card-text">${element.categoria}</p>
                     <a href="#" class="btn btn-primary">Comprar</a>
                 </div>
             </div>
 
             </div>
        `
 
        columnas.push(columna)
 
     });
 
     document.getElementById("catalogo").innerHTML = columnas.join('')
}


crear_catalogo()