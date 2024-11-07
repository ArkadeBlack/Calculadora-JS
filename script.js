//Agrega el valor del boton que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Funcion de Borrar
function borrar(){
    document.getElementById('pantalla').value = ''
}

//Funcion de calcular
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}