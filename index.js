// js da calculadora
let result = document.getElementById('display-numbers')
let result1 = ""
let result2 = ""
let operador = ""

let operaçao = (numbers) =>{
    result.value +=  numbers
    
    
}

let calcular = () =>{
   result2 = Number(result.value)
   document.getElementsByName('display')[0].placeholder = 0
   if( result2 !="" && operador == '+'){
       result.value = (result1 + result2) 
       result2 = 0
       operador = ''
   }else if(result2 !="" && operador == '*'){
    result.value = (result1 * result2) 
    result2 = 0
    operador = ''
   }else if(result2 !="" && operador == '-'){
    result.value = (result1 - result2) 
    result2 = 0
    operador = ''
   }else if(result2 !="" && operador == '/'){
    result.value = (result1 / result2) 
    result2 = 0
    operador = ''
   } 
    
}

const operaçoes = (opera) =>{
    result1 =  Number(result.value)
    operador = opera
    result.value = ""
    document.getElementsByName('display')[0].placeholder = result1
    console.log(result1,operador)
}

const deletar = () =>{
    result.value = result.value.slice(0,-1)
    console.log(result1)
}
const resetar = () =>{
    document.getElementsByName('display')[0].placeholder = 0
    result.value = ""
    result1 = ""
}

// js da calculadora de imc

function digitosValidos(text){
    return text.replace(/[^0-9,]/g, "")
}
const calcularImc = () =>{
    let altura = document.getElementById('altura').value 
    let peso = document.getElementById('peso').value
    altura = altura.replace(',','.')
    let resultadoImc = (peso / altura ** 2).toFixed(2)
    if(altura != "" && peso != ""){
       
       document.getElementById('result-imc').innerHTML = "o resultado é " + resultadoImc
        console.log(altura,peso)
    }else{
        document.getElementById('result-imc').innerHTML = "digite um valor valido"
    }
}