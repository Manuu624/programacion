import Producto from "./producto.js";

function guardar()
{
    let descripcion = document.getElementById("inp_descripcion").value
    let imagen = document.getElementById("image").value
    let precio_venta= document.getElementById("inp_precio_venta").value
    let categoria= document.getElementById("slt_cat").value
    


    let producto = new Producto(descripcion,imagen, precio_venta, categoria)

    //invocamos(ejecutamos) al metodo guardar_producto(),
    //perteneciente a la clase Producto

    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar(){
    let producto = new Producto
    producto.obtener_productos()
}
listar()

function eliminar()
{
    let indice = localStorage.getItem("indice")

    //creamos una instancia
    // para acceder a los metodos y artributos de la clase Producto
    let producto = new Producto()

    //haciendo uso de la instancia
    //invocamos al metodo eliminar_producto()
    
    producto.eliminar_producto(indice)

}
function actualizar(){
    let producto = new Producto()
    producto.actualizar_producto()
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)

document.getElementById("btn_eliminar").addEventListener("click",eliminar)

