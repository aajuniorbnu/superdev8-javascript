function agendarConsulta() {

    // Ex 1.1 - Nome do pet
    let campoNomePet = document.getElementById("nome-pet");
    let nomePet = campoNomePet.value;

    // Ex 1.2 - Data da consulta
    let campoDataConsulta = document.getElementById("data-consulta");
    let dataConsulta = campoDataConsulta.value;

    // Ex 1.3 - Tipo de animal
    let campoTipo = document.getElementById("tipo");
    let tipoAnimal = campoTipo.value;

    // Ex 1.4 - Idade
    let campoIdade = document.getElementById("idade");
    let idade = campoIdade.value;

    // Apresentação dos dados
    alert(
        "Agendamento realizado!\n\n" +
        "Nome do pet: " + nomePet + "\n" +
        "Data da consulta: " + dataConsulta + "\n" +
        "Tipo do animal: " + tipoAnimal + "\n" +
        "Idade: " + idade + " anos"
    );
}

const botaoLimparCampos = document.getElementById("limpar-campos");
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar");
botaoProcessar.addEventListener("click", processarPedido);

const botaoCalcularSoma = document.getElementById("calcular-soma");
botaoCalcularSoma.addEventListener("click", somar);

const botaoCalcularMedia = document.getElementById("calcular-media");
botaoCalcularMedia.addEventListener("click", calcularMedia);

function limparCampos() {
    let campoPlacaMae = document.getElementById("placa-mae");
    console.log(campoPlacaMae);

    let campoPlacaVideo = document.getElementById("placa-video");
    console.log(campoPlacaVideo);

    campoPlacaMae.value = "";
    campoPlacaVideo.value = "";
}

function processarPedido() {
    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPlacaVideo = document.getElementById("placa-video");

    let placaMae = campoPlacaMae.value;
    let placaVideo = campoPlacaVideo.value;

    alert(placaMae + " " + placaVideo);
}

function somar() {
    debugger
    let campoNumero01 = document.getElementById("numero01");
    console.log(campoNumero01);

    let campoNumero02 = document.getElementById("numero02");
    console.log(campoNumero02);

    let numero01 = parseInt(campoNumero01.value);
    let numero02 = parseInt(campoNumero02.value);

    let soma = numero01 + numero02;

    alert("Soma: " + soma);
}

function calcularMedia() {
    debugger
    const campoNome = document.getElementById("nome");
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    const campoNota3 = document.getElementById("nota3");

    // console.log(campoNome); // null undefined
    // console.log(campoNota1);
    // console.log(campoNota2);
    // console.log(campoNota3);

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value)
    let nota3 = parseFloat(campoNota3.value)
    // 
    // console.log(nome);
    // console.log(nota1);
    // console.log(nota2);
    // console.log(nota3);
    let media = (nota1 + nota2 + nota3) / 3;

    let status = "";
    if (media < 7) {
        status = "Reprovado";
    } else {
        status = "Aprovado"
    }

    const texto = `Aluno: ${nome}<br>
    Nota 1: ${nota1.toFixed(2).replace(".", ",")}<br>
    Nota 2: ${nota2.toFixed(2).replace(".", ",")}<br>
    Nota 3: ${nota3.toFixed(2).replace(".", ",")}<br>
    Média: ${media.toFixed(2).replace(".", ",")}<br>
    Status: ${status}`;

    const divResultadoMedia = document.getElementById("resultado-media");
    divResultadoMedia.innerHTML = texto;
}


