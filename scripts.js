let chave = "04541062868033f9dd80e7c66a137aee";

function colocarNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML = Math.floor(
    dados.main.temp
  ).toString() + "°C";
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"; 
  document.querySelector(".icone").src =
    "https://www.openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric`;
    let dados = await fetch(url).then((resposta) => resposta.json());
    colocarNaTela(dados);
    console.log(dados);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}
