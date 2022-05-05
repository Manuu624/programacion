function calcular(base,altura) //esta funcion se enfoca en el calculo

{

const hipotenusa = base*altura/2
return hipotenusa
}



    function mostrar() //esta funcion recolecta los datos y los entrega a la funcion calcular ()
    
    {

    const base = document.getElementById("base").value
        
    const altura = document.getElementById("altura").value
    
    const resultado = calcular(base,altura) //se ejecuta la funcion
    
    document.getElementById("resultado").textContent = resultado
    
    }    
        
