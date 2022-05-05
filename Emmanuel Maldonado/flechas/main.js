const calcular = (a,b,c) => 
{
const a = Match.pow(b,2)-(4*a*c)
const b = match.sqrt(a)

return resultado


}

const mostrar = () => {

    const a = document.getElementById("a").value 
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value

    const respueta = calcular(a,b,c)
    document.getElementById("h_resultado").texcontent = respuesta

    


}

const boton = document.getElementById("btn_calcular")

boton.addEventListener("click",mostrar)