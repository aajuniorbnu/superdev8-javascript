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
