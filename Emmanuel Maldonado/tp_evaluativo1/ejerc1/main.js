function calcular(auto) //declaramos la funcion calcular para hacer la operacion

{
    if (auto == 1750000){ //si se cumple la siguiente condicion, se va a realizar la siguiente operacion
    const ka = 1750000*15/100
    return ka
    }

    else if (auto == 1950000) { //si no se cumple la condicion anterior, se va a cumplir la siguiente
        const fiesta = 1950000*5/100
        return fiesta
    }
    else{
        const focus = 2560000*10/100
        return focus

    }

}

function mostrar(){ //mostramos el resultado
    const auto = document.getElementById("auto").value  //busca y obtiene la variable auto
    const respuesta = calcular(auto) //enviamos la informacion que obtuvo la funcion calcular a la constante respuesta
    document.getElementById("h_resultado").textContent = respuesta //obtenemos el resultado y los datos y lo enviamos al html (h1)
}
