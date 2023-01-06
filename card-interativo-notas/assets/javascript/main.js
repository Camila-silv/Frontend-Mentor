// 1- SELECIONAR ELEMENTOS QUE SOFRERAO ALTERAÇAO
// 2- CRIAR O EVENTO DE MONITORAMENTO PARA ESSES ELEMENTOS



let itens = document.querySelectorAll(".lista-avaliacao_itens");
let containerNotaEscolhida = document.querySelector(".container-nota-escolhida");

let containerAgradecimento = document.querySelector(".container-agradecimento");
let containerPrincipal = document.querySelector(".secao-principal");


let botaoCardAgradecimento = document.querySelector(".container-agradecimento__botao-fechar");

let botaoSecaoPrincipal = document.querySelector(".container-secao__botao");


botaoSecaoPrincipal.addEventListener("click", function () {
    for (i = 0; i < itens.length; i++) {

        let verificarClasse = itens[i].classList.contains("lista-avaliacao_itens--selecionado");

        if (verificarClasse) {
            let elementoSelecionado = itens[i].value;
            containerNotaEscolhida.innerText = elementoSelecionado;
        }


    }

    containerPrincipal.classList.replace("secao-principal", "esconder-secao-principal");

    containerAgradecimento.classList.replace("container-agradecimento", "mostrar-container-agradecimento");
})


botaoCardAgradecimento.addEventListener("click", function () {

    containerAgradecimento.classList.replace("mostrar-container-agradecimento", "container-agradecimento");

    containerPrincipal.classList.replace("esconder-secao-principal", "secao-principal");
})


itens[0].addEventListener("click", function () {


    mudarClasse();

    itens[0].classList.replace("lista-avaliacao_itens", "lista-avaliacao_itens--selecionado");


})

itens[1].addEventListener("click", function () {


    mudarClasse();

    itens[1].classList.replace("lista-avaliacao_itens", "lista-avaliacao_itens--selecionado");


})

itens[2].addEventListener("click", function () {


    mudarClasse();

    itens[2].classList.replace("lista-avaliacao_itens", "lista-avaliacao_itens--selecionado");


})

itens[3].addEventListener("click", function () {


    mudarClasse();

    itens[3].classList.replace("lista-avaliacao_itens", "lista-avaliacao_itens--selecionado");


})

itens[4].addEventListener("click", function () {


    mudarClasse();

    itens[4].classList.replace("lista-avaliacao_itens", "lista-avaliacao_itens--selecionado");


})


function mudarClasse() {

    for (i = 0; i < itens.length; i++) {
        itens[i].classList.replace("lista-avaliacao_itens--selecionado", "lista-avaliacao_itens");
    }
}

