
/**
 * 
 * DOM
 * Document Object Model(Modelo de Objeto do Documento)
 * 
 */

/**
 * 
 * eventos
 * 
 * addEventListener
 * 
 * elemento.addEventListener('evento', função);
 * 
 */

/**
 * passo a passo
 * 
 * 1º passo: capturar o valor da textarea para criar o tweet
 * 2º passo: construir o tweet
 * 3º passo: imprimir esse tweet
 * 
 */

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {
  event.preventDefault();/* evite o padrão */

  const tweetTextarea = textarea.value;
  criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);



function criarTweet(tweetTexto){
    
  let data = new Date();
  let horaFormatada = data.getHours().toString().padStart(2, '0') + ':' + data.getMinutes().toString().padStart(2,'0');//Os parâmetros do método padStart são: o tamanho dastring final (no caso, 2), a string usada para preencherno início (no caso, '0').
  //Ou seja, se o valor for menor que 10 (como 1, porexemplo), o resultado será 01. Se o valor for maior que10, ele não é alterado (como 16, por exemplo).
  //OBJETO
  const tweet = {
    nome: "Léo Vieira",
    foto: "./assets/img/ProfilePic.png",
    usuario: "@svieira_leo",
    texto: tweetTexto,
    tempo:`${horaFormatada}`
  }
  
  listarTemplateTweet(tweet);
    
}

function listarTemplateTweet(tweet){
    
  const {nome,foto,usuario,texto,tempo} = tweet
  
  //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
  let li = document.createElement("li");
  li.classList.add("conteudoPrincipal__tweet")
  let img = document.createElement("img");
  img.src = foto
  img.classList.add("tweet__fotoPerfil")
  let div = document.createElement("div");
  div.classList.add("tweet__conteudo")
  let h2 = document.createElement("h2");
  h2.innerText = nome
  
  let span = document.createElement("span");
  span.innerText = `${usuario} - ${tempo}`
  let p = document.createElement("p");
  p.innerText = texto
  
  //ADICIONANDO ELEMENTOS DENTRO DA DIV
  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)
  
  //ADICIONANDO ELEMENTOS DENTRO DA LI
  li.appendChild(img)
  li.appendChild(div)
  
  feed.appendChild(li)
  textarea.value = ""
}