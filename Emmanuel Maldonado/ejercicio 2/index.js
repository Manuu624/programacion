function calcular (){
    const n1 = parseInt( prompt('Ingresa valor de base mayor'));
    const n2 = parseInt( prompt('Ingresa valor de base menor'));
    const a = parseInt( prompt('Ingresa altura'));
    const suma = n1+ n2
    const bruno = suma*a
    const resultado = bruno/2
    return resultado
}

function visualizar ()
{
const respuesta = calcular ()
alert(respuesta)
}