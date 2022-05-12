const temperatura = (dato1) => //declaramos la variable temperatura
{
    if(dato1 >=14 && dato1 <32){ //si se cumple la condicion, se realiza la operacion de temperatura
        return 'Temperatura Baja'
    
    }else{ 
        if(dato1 >=32 && dato1 <68){ //si no se cumple la condicion, se cumple la siguiente
            return 'Temperatura Adecuada'
        }else { 
            if(dato1 >=68 && dato1 <96){
                return 'Temperatura Alta'
            }else{
                return 'Temperatura desconocida'
            }
        }
    }

}

const mostrar = () => {  //mostramos el resultado

    const dato1 = document.getElementById("dato1").value //busca y obtiene el elemento dato1

    const respueta = temperatura (dato1)  //se recolecta la información y queda en la constante respuesta

    document.getElementById("h_resultado").textContent = respueta  //obtenemos la informacion de la respuesta y la obtenemos como h_resultado y luego la enviamos al h1

}

const boton = document.getElementById("btn_calcular"); //

boton.addEventListener("click",mostrar); //cuando se haga click en el boton "calcular" se mostrará el resultado

