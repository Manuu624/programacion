export default class Producto{
    constructor(d,i,pv,c){
        this.descripcion = d
        this.imagen = i
        this.precio_venta = pv
        this.categoria = c
        
    }
    //metodo 
    guardar_producto(){
        let nuevo_producto = {
            descripcion:this.descripcion,
            imagen:this.imagen,
            precio_venta:this.precio_venta,
            categoria:this.categoria
            
        }

        if("productos" in localStorage){
            //convertimos el JSON ontenido desde el storage en una expresion nativa de javascript
            let lista_productos = JSON.parse(localStorage.getItem("productos") )
            lista_productos.push(nuevo_producto)
            localStorage.setItem("productos",JSON.stringify(lista_productos) )
        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)
    
            //guardar en el storage
            localStorage.setItem("productos",JSON.stringify(lista_productos) )

        }
        /*invocamos el metodo obtener_productos()para
            lograr reconstruir la tabla, y asi reflejar los datos actualizados que provienen 
            del localStorage.especificamente del item "productos"
         */
        this.obtener_productos()
        this.vaciar_formulario()
    }
    obtener_productos(){
        /*recolectamos todos los productos aloajdos en el item que estn notacion json, debemos convertirlo en una expresion nativa de javascript
            es decir, hacemos un JSON.parse
        */
        let lista_productos = JSON.parse(localStorage.getItem("productos"))

        let filas = []
        lista_productos.forEach( (element,index) => {
            let fila = ` 
            <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>
                    <img style="width:4rem" class="img-fluid" src="${element.imagen}"></img>
                </td>
                <td>${element.precio_venta}</td>
                <td>${element.categoria}</td>
                
                <td>
                    <button onclick ="almacenar_indice(${index})" class="btn btn-danger btm-sm">
                        <i class="fa fa-trash" data-bs-toggle="modal" data-bs-target="#mymodal"></i>
                    </button>

                    <button onclick="editar(${index})" class="btn btn-primary btn-sm">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
            </tr>  
            `
            filas.push(fila)
            
        });
        document.getElementById("tbody").innerHTML = filas.join('')

    }


    
    eliminar_producto(indice)
    {
       let lista_productos = JSON.parse(localStorage.getItem("productos"))
       
       lista_productos.splice(indice,1)

       localStorage.setItem("productos", JSON.stringify(lista_productos ))

       this.obtener_productos()

    }

    actualizar_producto(){
        let indice = localStorage.getItem("indice")

        let lista_productos = JSON.parse(localStorage.getItem("productos"))
        lista_productos[indice].descripcion = document.getElementById("inp_descripcion").value
        lista_productos[indice].precio_venta = document.getElementById("inp_precio").value
        lista_productos[indice].imagen = document.getElementById("image").value
        lista_productos[indice].detalles = document.getElementById("inp_detalles").value

        localStorage.setItem("productos",JSON.stringify(lista_productos))

        this.obtener_productos()

        document.getElementById("btn_guardar").style.display = "block"
        document.getElementById("btn_actualizar").style.display = "none"
        this.vaciar_formulario()
}
}