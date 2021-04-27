
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === './img/logo.png') {
      minhaImagem.setAttribute ('src','./img/logo2.png');
    } else {
      minhaImagem.setAttribute ('src','./img/logo.png');
    }
    
}