let resultado = document.querySelector('#resultado')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')

function calculoImc() {

    if (altura.value !== '' && peso.value !== '') {

        let imc = (peso.value / (altura.value * altura.value)).toFixed(2)

        let tabela = ''
        if (imc < 18.5) {
            tabela = 'Abaixo do peso'
        } else if (imc < 25) {
            tabela = 'Peso normal'
        } else if (imc < 30) {
            tabela = 'Acima do peso'
        } else if (imc < 35) {
            tabela = 'Obesidade Grau I'
        } else if (imc < 41) {
            tabela = 'Obesidade Grau II'
        } else {
            tabela = 'Obesidade Grau III'
        }
        resultado.innerHTML = `${imc} (${tabela})`
    } else {
        resultado.innerHTML = 'Preencha os campos'
        limpar()
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = ""
    document.getElementById('altura').value = ""
    document.getElementById('peso').value = ""

}

