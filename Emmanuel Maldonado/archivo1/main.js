function calcular(radio)
{
const resultado = Math.PI*Math.pow(radio,2)
return resultado
}

function mostrar()
{

const r =  document.getElementById("inp_radio").value
   const respuesta = calcular(r)

   alert(respuesta)
}