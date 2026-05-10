var altura = window.document.querySelector('input#altura')
var peso = window.document.querySelector('input#peso')
var res = window.document.querySelector('section#res')
//Dessa forma podemos acessar o radio selecionado pelo mesmo name
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataAtual = window.document.querySelector('h3#dataAtual')

dataAtual.innerHTML = `Agora são ${hora}h${minutos}m`

function CalculaIMC() {
    var imc = (Number(peso.value) / (Number(altura.value) ** 2)).toFixed(2)
    
    // Limpa as classes de cores anteriores antes de aplicar a nova
    res.className = "";

    if(imc < 18.5){
        res.innerHTML = `Seu IMC é ${imc}: Peso Baixo`
        res.classList.add("amarelo")
    } else if(imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `Seu IMC é ${imc}: Peso Normal`
        res.classList.add("verde")
    } else if(imc >= 25 && imc <= 29.9){
        res.innerHTML = `Seu IMC é ${imc}: Sobrepeso`
        res.classList.add("amarelo")
    } else if(imc >= 30 && imc <= 34.9){
        res.innerHTML = `Seu IMC é ${imc}: Obesidade I`
        res.classList.add("laranja")
    } else if(imc >= 35 && imc <= 39.9){
        res.innerHTML = `Seu IMC é ${imc}: Obesidade II`
        res.classList.add("vermelho-claro")
    } else if(imc >= 40){
        res.innerHTML = `Seu IMC é ${imc}: Obesidade III, busque ajuda imediatamente`
        res.classList.add("vermelho-forte")
    }
}