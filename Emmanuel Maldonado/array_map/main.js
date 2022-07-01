const tareas = [
    { 
        nombre: 'Testeando soft',
        duracion: 25
    
    },

    {
        nombre: 'implementacion de alta cliente',
        duracion: 90

    },

    {
        nombre: 'actualiza cliente',
        duracion: 40

    },

    { nonmbre: 'deplay de soft',

      duracion: 120
    },
    
    {
    nombre: 'correccion de bug',
    duracion: 180


    }


]

//uso del metodo map()

let nonmbres = []
tareas.forEach(element => {
        nonmbres.push(element.nombre)

})

//aplicando map
tareas.map (tarea => {  
    return  tarea.nombre

})

//uso de filter

let tareas_prolongadas = []
tareas.forEach(element => {

    if (element.duracion>=129){
            tareas_prolongadas.push(element)

    }



});
console.log(tareas_prolongadas)

//filtrar haciendo uso el metodo filter

const tareas_prolongadas2 = tareas.filter( tarea => {
    return tareas.duracion>=120

})
console.log(tareas_prolongadas2)