document.addEventListener('DOMContentloaded,' function(){
  const botaodeacessibilidade = document.getElementById("botao-acessibilidade")

    const aumentafontebotao = document.getElementById('aumentar-fonte');
    const diminuifontebotao = document.getElementById('diminuir-fonte');

let tamanhoatualfonte = 1;

aumentafontebotao.addEventListener('click',function(){
    tamanhoatualfonte += 0.1;
document.body.style.fontSize = `${tamahoatualfonte}rem`
})

diminuifontebotao.addEventListener('click',function(){
    tamanhoatualfonte -= 0.1;
document.body.style.fontSize = `${tamahoatualfonte}rem`
})



})