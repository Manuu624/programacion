function calcular(base,altura) //esta funcion realizará el cálculo

{

const hipotenusa = base*altura/2  //acá se realizará la operación luego de los datos ingresados
return hipotenusa //tomamos el resultado
}



    function mostrar() //esta funcion recolecta los datos y los entrega a la funcion calcular
    
    {

    const base = document.getElementById("base").value //buscamos y obtenemos la variable base, al igual que la variable altura
        
    const altura = document.getElementById("altura").value
    
    const resultado = calcular(base,altura) //recolectamos la informacion y la guardamos en la constante resultado
    
    document.getElementById("resultado").textContent = resultado //se obtiene los datos y el resultado y lo enviamos a un h1 en html
    
    }    
        
