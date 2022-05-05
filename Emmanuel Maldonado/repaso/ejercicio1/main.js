function calcular(temperatura){

    const resultado = temperatura * 1.8+32
    return resultado

}
function mostrar(){

const temperatura = document.getElementById("inp_calcular").value 
const respuesta = calcular(temperatura)
document.getElementById("h_respuesta").textContent = respuesta
}