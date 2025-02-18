document.addEventListener('DOMContentloaded,' function(){
const aumentafontebotao = document.getElementById('aumentar-fonte');

let tamanhoatualfonte = 1;

aumentafontebotao.addEventListener('click',function(){
    tamanhoatualfonte += 0.1;
document.body.style.fontSize = `${tamahoatualfonte}rem`
})


})