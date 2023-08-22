
const botaoImc = () =>{
    location.href = "imc.html"
}
const botaoOpe = () =>{
    location.href = "operation.html"
}
const resetBtn = () =>{
    location.href = "index.html"
}



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


const tabela = document.getElementById('table1')
let resultado = ""
let valorMudança =  0

const calcularReajuste =() =>{
    let salario = document.getElementById('salario').value
    let reajuste = document.getElementById('reajuste').value
    
    salario = Number(salario)
    reajuste = Number(reajuste)
    resultado = Number(reajuste / 100 * salario) + salario
    valorMudança = Number( salario - resultado )
    valorMudança = Math.abs(valorMudança).toFixed(2)
    resultado = Number(resultado).toFixed(2)
    console.log(resultado,salario,reajuste,valorMudança)

}
const exibeResultado =() =>{
 
    if(salario.value != ""){
        calcularReajuste()
        const salarioAtual = document.createElement('td')
        salarioAtual.innerHTML = salario.value
        tabela.append(salarioAtual)

        const salarioPorcentagemAu = document.createElement('td')
        salarioPorcentagemAu.innerHTML = reajuste.value + "%"
        tabela.append(salarioPorcentagemAu)

        const salarioMudança = document.createElement('td')
        salarioMudança.innerHTML = valorMudança
        tabela.append(salarioMudança)

        const salarioNovo = document.createElement('td')
        salarioNovo.innerHTML = resultado
        tabela.append(salarioNovo)
        
        // document.getElementById("gen2").style.display = "none";
        document.getElementById('tabela-toda').style.display = "block";
        
        salario.value = ""
        reajuste.value = ""
        resultado = ""
        valorMudança = ""
    }else{
        alert("digite um valor válido")
    }
    
    

}