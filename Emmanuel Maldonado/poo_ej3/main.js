import Producto from "./producto.js";

function guardar()
{
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta= document.getElementById("inp_precio_venta").value
    let categoria= document.getElementById("slt_cat").value


    let producto = new Producto(descripcion, precio_venta, categoria)

    //invocamos(ejecutamos) al metodo guardar_producto(),
    //perteneciente a la clase Producto

    producto.guardar_producto()

}

document.getElementById("btn_guardar").addEventListener("click",guardar)