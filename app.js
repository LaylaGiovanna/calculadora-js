'use strict' 

const calcular = document.getElementById('calcular')

function somar (){
    //pega p elemento a partir do ID
    const number1 = Number(document.getElementById('number1').value)
    const number2 = Number(document.getElementById('number2').value)
    const resultado = document.getElementById('resultado')
    const formulario = document.getElementById('form')
    
    resultado.value = number1 + number2
    formulario.classList.add('roxo')
}

//recebe algum tipo de evento 
calcular.addEventListener('click', somar )