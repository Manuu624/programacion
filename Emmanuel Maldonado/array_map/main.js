const tareas = [
    { 
        nombre: 'Testeando soft',
        duracion: '25min'
    
    },

    {
        nombre: 'implementacion de alta cliente',
        duracion: '90min'

    },

    {
        nombre: 'actualiza cliente',
        duracion: '40min'

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