var altura = window.document.querySelector('input#altura')
var idade = window.document.querySelector('input#idade')
var peso = window.document.querySelector('input#peso')
var res = window.document.querySelector('section#res')
//Dessa forma podemos acessar o radio selecionado pelo mesmo name


function CalculaIMC(){
    var radioSelecionado = window.document.querySelector('input[name="genero"]:checked')
    var imc = Number(peso.value)/(Number(altura.value)**2)
    res.innerHTML = `O seu IMC é ${imc}`
    switch(radioSelecionado.value){
        case "Masculino": 
        masculino()
        break
        case "Feminino": 
        feminino()
        break
        default: alert('Selecione um gênero')
    }
}
function masculino(){
    window.alert('masculino')
}
function feminino(){
    window.alert('feminino')
}