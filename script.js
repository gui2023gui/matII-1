document.addEventListener('DOMContentloaded,' function(){
  const botaodeacessibilidade = document.getElementById("botao-acessibilidade")
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

  botaodeacessibilidade.addEventListener('click',function (){
    botaodeacessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
  })

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