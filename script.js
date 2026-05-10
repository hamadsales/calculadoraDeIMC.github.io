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
    res.innerHTML = `O seu IMC é ${imc}`
    if(imc<18.5){
        res.innerHTML = `O seu imc é ${imc} e você está com Peso Baixo`
    } else if(imc>=18.5 && imc<=24.9){
        res.innerHTML = `O seu imc é ${imc} e você está com Peso Normal`
    }else if(imc>=25 && imc<=29.9){
        res.innerHTML = `O seu imc é ${imc} e você está com Sobrepeso`
    }else if(imc>=30 && imc<=34.9){
        res.innerHTML = `O seu imc é ${imc} e você está com Obesidade I`
    }else if(imc>=35 && imc<=39.9){
        res.innerHTML = `O seu imc é ${imc} e você está com Obesidade II`
    }else if(imc>=40){
        res.innerHTML = `O seu imc é ${imc} e você está com Obesidade III, busque ajuda imediatamente`
    }
}