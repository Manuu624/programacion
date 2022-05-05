//crear un array
//creamos un arreglo de string
const series = ["Breaking bad","Okupas","Narco","Casados con hijos","Pleaky Blinders"]

//como conocer la longitud array

const longitud = series.length
console.log("Longitud:" +longitud)

//como acceder a un elemento del arreglo haciendo un indice
const primer = series[0]
console.log("Primer elemento:" +primer)

//como accedemos al ultimo elemento
const ultimo = series[longitud-1]
console.log("Ultimo elemento:" +ultimo)

//recorrer un arreglo haciendo uso de un foreach
series.forEach((element,index) => {
console.log(index+"-"+element)
    
});

//como agregar un elemento al final de un array
series.push("Dragon Ball")
console.log(series)

//eliminar el ultimo elemento de un arreglo
series.pop()
console.log(series)

//como agregar un elemento al inicio de un arreglo
series.unshift("Grey's anatomy")
console.log(series)

//como elimino el primer elemento dde un arreglo
series.shift()
console.log(series)

//como obtener la posicion de un elemento
const indice = series.indexOf("Casados con hijos")
console.log("numero" +indice)

//como eliminar un elemento teniendo su posición
//1er caso - eliminar un unico elemento
series.splice(indice,1)
console.log(series
    )

//2do caso - eliminar mas de un elemento
const pos = 1;
const numeroElementos = 2;
const elementosEliminados = series.splice(pos,numeroElementos)
console.log(elementosEliminados)
console.log(series)

//copiar un array
let copiar = series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)



