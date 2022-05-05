function mostrar_mensaje() {
    //popup
    alert('probando mi función')

}

function mostrar_en_consola(){
    //asignamos una cadena de string a una constante
    const nombre_apellido = 'Emmanuel Maldonado'

    //forma 1 - sin template string

    console.log('nombre y apellido: '+nombre_apellido)

    //forma 2 tempalate string

    console.log(`
            Nombre y apellido: ${nombre_apellido}
            DNI
            Dirección:
    `)
}

//condicionales
function validar(){
    const calificacion = prompt('ingrese su calificación:');

 //condición - forma 1
/*   if(calificacion >= 7){
        alert('Estas aprobado')
    }else{
        alert('Estas desaprobado')
        h
    }*/
    //expresión ternario
    (calificacion>= 7) ? alert('aprobado, hasta nunca'): alert('te vas a diciembre pa')
}

//funcion con retorno y comuncación entre funciones
function calcular (){
    const number = prompt('Ingresa un número');
    const resultado = Number * 10
    //estamos entregando una respuesta
    return resultado
}

function vizualizar ()
{
const respuesta = calcular ()
alert(respuesta)
}