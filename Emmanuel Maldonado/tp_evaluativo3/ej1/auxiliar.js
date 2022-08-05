function almacenar_indice(indice)
{
    localStorage.setItem("indice",indice)

}

function editar(index)
{
    let lista_productos = JSON.parse(localStorage.getItem("productos"))

    document.getElementById("inp_descripcion").value = lista_productos[index].descripcion
    document.getElementById("image").value = lista_productos[index].imagen
    document.getElementById("inp_precio_venta").value = lista_productos[index].precio_venta
    document.getElementById("slt_cat").value = lista_productos[index].categoria
    

    localStorage.setItem("indice", index)

    //apago el boton
    document.getElementById("btn_guardar").style.display = "none"

    //enciendo el boton
    document.getElementById("btn_actualizar").style.display = "block"
}