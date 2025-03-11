document.addEventListener('DOMContentloaded,' function(){
  const botaodeacessibilidade = document.getElementById("botao-acessibilidade")
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

  botaodeacessibilidade.addEventListener('click',function (){
    botaodeacessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
  })

    const aumentafontebotao = document.getElementById('aumentar-fonte');
    const diminuifontebotao = document.getElementById('diminuir-fonte');

    const alternarcontraste=document.getElementById('alterna-contraste')

let tamanhoatualfonte = 1;

aumentafontebotao.addEventListener('click',function(){
    tamanhoatualfonte += 0.1;
document.body.style.fontSize = `${tamahoatualfonte}rem`

})

alternarcontraste.addEventListener('click',function(){
  document.body.classList.toggle('alto-contraste')
})

diminuifontebotao.addEventListener('click',function(){
    tamanhoatualfonte -= 0.1;
document.body.style.fontSize = `${tamahoatualfonte}rem`
})



})