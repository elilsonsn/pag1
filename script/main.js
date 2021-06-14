
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === './img/logo.png') {
      minhaImagem.setAttribute ('src','./img/logo2.png');
    } else {
      minhaImagem.setAttribute ('src','./img/logo.png');
    }
    
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else{
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Chrome é Legal ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else{
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Chrome é legal ' + nomeGuardado;

}
meuBotao.onclick = function() {
  defineNomeUsuario();
}