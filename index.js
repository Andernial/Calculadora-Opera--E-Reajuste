//troca de tela
const botaoImc = () => {
    location.href = "reajuste.html"
}
const botaoOpe = () => {
    location.href = "operation.html"
}
const resetBtn = () => {
    location.href = "index.html"
}



// js da calculadora
let result = document.getElementById('display-numbers')
let result1 = ""
let result2 = ""
let operador = ""

let operaçao = (numbers) => {
    result.value += numbers


}

let calcular = () => {
    result2 = Number(result.value)
    document.getElementsByName('display')[0].placeholder = 0
    if (result2 != "" && operador == '+') {
        result.value = (result1 + result2)
        result2 = 0
        operador = ''
    } else if (result2 != "" && operador == '*') {
        result.value = (result1 * result2)
        result2 = 0
        operador = ''
    } else if (result2 != "" && operador == '-') {
        result.value = (result1 - result2)
        result2 = 0
        operador = ''
    } else if (result2 != "" && operador == '/') {
        result.value = (result1 / result2)
        result2 = 0
        operador = ''
    }

}

const operaçoes = (opera) => {
    result1 = Number(result.value)
    operador = opera
    result.value = ""
    document.getElementsByName('display')[0].placeholder = result1
    console.log(result1, operador)
}

const deletar = () => {
    result.value = result.value.slice(0, -1)
    console.log(result1)
}
const resetar = () => {
    document.getElementsByName('display')[0].placeholder = 0
    result.value = ""
    result1 = ""
}

// js da calculadora de reajuste


const tabela = document.getElementById('table1')
let resultado = ""
let valorMudança = 0

const calcularReajuste = () => {
    let salario = document.getElementById('salario').value
    let reajuste = document.getElementById('reajuste').value

    salario = Number(salario)
    reajuste = Number(reajuste)
    resultado = Number(reajuste / 100 * salario) + salario
    valorMudança = Number(salario - resultado)
    valorMudança = Math.abs(valorMudança).toFixed(2)
    resultado = Number(resultado).toFixed(2)
   

}
const exibeResultado = () => {

    if (salario.value != "") {
        calcularReajuste()
        const salarioAtual = document.getElementById('salarioAtual')
        salarioAtual.value = "Salário atual: " + salario.value

        const salarioPorcentagemAu = document.getElementById('salarioPorcentagemAu')
        salarioPorcentagemAu.value = "Porcentagem do aumento: " + reajuste.value + "%"

        const salarioMudança = document.getElementById('salarioMudança')
        salarioMudança.value = "Valor do reajuste: " + valorMudança

        const salarioNovo = document.getElementById('salarioNovo')
        salarioNovo.value = "Salário reajustado: " + resultado

        document.getElementById("resultados-id").style.display = "block"
        salario.value = ""
        reajuste.value = ""

    } else {
        alert("digite um valor válido")
    }



}