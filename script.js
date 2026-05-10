var altura = window.document.querySelector('input#altura')
var peso = window.document.querySelector('input#peso')
var res = window.document.querySelector('section#res')
//Dessa forma podemos acessar o radio selecionado pelo mesmo name


function CalculaIMC() {
    var imc = (Number(peso.value) / (Number(altura.value) ** 2)).toFixed(2)
    res.innerHTML = `O seu IMC é ${imc}`
    window.alert(`${imc}`)
    if(imc<18.5){
        window.alert('deficit de massa corporal')
    } else if(imc>=18.5 && imc<=24.9){
        window.alert('Massa corporal normal')
    }else if(imc>=25 && imc<=29.9){
        window.alert('Sobrepeso')
    }else if(imc>=30 && imc<=34.9){
        window.alert('Obesidade leve')
    }else if(imc>=35 && imc<=39.9){
        window.alert('Obesidade média')
    }else if(imc>=40){
        window.alert('Obesidade mórbida')
    }
}