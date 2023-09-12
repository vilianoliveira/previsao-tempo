
const key = "a2dd07834b6bea7952485523718ddf0f"

function dadosTela(dados){
    
    document.getElementById('local').innerHTML = "Tempo em " + dados.name
    document.getElementById('temp').innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.getElementById('est').innerHTML = "Tempo = " + dados.weather[0].description
    document.getElementById('umi').innerHTML = "Umidade = " +  dados.main.humidity + "%"
    document.getElementById('imgnuv').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dadosTela(dados)
}

function clickBuscar(){
    const cidade = document.querySelector("input").value

    buscarCidade(cidade)
}