
let interruptor = document.getElementById('interruptor') /* um seletor que coloca dentro de uma variavel o nosso botão (interruptor) */

let root = document.documentElement  /* pegamos o root onde estão as nossas variaveis de cores  */

interruptor.addEventListener('click', () => {root.classList.toggle('tema-claro')})  /* aqui fazemos com que o interruptor(botão) seja escutado atravez da função addEventListener, cada vez que o usuario clicar nesse botão a gente vai executar uma função
que é, pegar o elemento root e seu css e fazendo uma alternancia usando a função toggle, que serve para colocar e tirar uma classe do css */

