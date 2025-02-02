let campoIdade;
let campoFantasia; 
let campoAventura; 

function setup() {
  createCanvas(400, 400);
  createElement("h2", "Recomendador de Filmes")
  createSpan("Sua idade");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  
  fill(color("white"));
  textAlign(CENTER, CENTER); 
  textSize(38); 
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem Aranha: No Aranhaverso";
        } else {
          return "Ladrões de Bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As Aventuras de Pi";
        } else {
          return "Depois da Chuva";
        }
      }
    }
  } else {
      if(gostaDeFantasia) {
      return "A viagem de Chihiro";
    } else {
      return "O Feitiço do Tempo";
    }
  }
}









