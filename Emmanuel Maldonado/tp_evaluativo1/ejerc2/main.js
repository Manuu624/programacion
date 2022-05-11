const temperatura = (dato1) =>
{
    if(dato1 >=14 && dato1 <32){
        return 'Temperatura Baja'
    
    }else{ 
        if(dato1 >=32 && dato1 <68){
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

const mostrar = () => {

    const dato1 = document.getElementById("dato1").value

    const respueta = temperatura (dato1)

    document.getElementById("h_resultado").texcontent = respueta

    

}
const boton = document.getElementById("btn_calcular");

    boton.addEventListener("click",mostrar);

