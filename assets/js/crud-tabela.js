//começa com dois pois ja temos uma linha na tabela criada no html
let proximoId = 2;
//variavel para saber qual o colaborador que estamos editando, se estiver com -1 estamos no modo cadastro
let indexParaEditar = -1;

const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNome = document.getElementById("campo-nome");
const campoCargo = document.getElementById("campo-cargo");
const campoHoras = document.getElementById("campo-horas");
const tbody = document.getElementById("colaboradores");

function salvar() {
    const nome = campoNome.value.trim();
    const cargo = campoCargo.value;
    const horas = campoHoras.value;
    if (nome.length < 3) {
        alert("O nome deve conter pelo menos 3 caracteres.");
        return;
    } else if (nome.length > 100) {
        alert("O nome deve conter no máximo 100 caracteres.");
        return;
    }
    console.log(cargo);
    if (cargo === "") {
        alert("Selecione um cargo.");
        return;
    }
    if (horas < 40 || horas > 400) {
        alert("A quantidade de horas deve ser entre 40 e 400.");
        return;
    }

    const valorHora = obterValorHoraPorCargo(cargo);
    const salarioBruto = calcularSalarioBruto(horas, valorHora);
    console.log(nome, cargo, horas, valorHora, salarioBruto);
}
function salvar() {
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value;

    const campoCargo = document.getElementById("campo-cargo");
    const cargo = campoCargo.value;

    const campoHoras = document.getElementById("campo-horas");
    const horas = campoHoras.value;

    const valorHora = obterValorHoraPorCargo(cargo);
    const salarioBruto = calcularSalarioBruto(horas, valorHora);

    if (indexParaEditar === -1) {
        criarLinha(nome, cargo, horas, valorHora, salarioBruto, proximoId);
        proximoId += 1;
    } else {
        editarLinha(nome, cargo, horas, valorHora, salarioBruto);
    }
    limparCampos();
}
function calcularSalarioBruto(horas, valorHora) {
    const salarioBruto = horas * valorHora;
    return salarioBruto;
}
function obterValorHoraPorCargo(cargo) {
    if (cargo === "Junior") {
        return 10;
    } else if (cargo === "Pleno") {
        return 22.72;

    } else if (cargo === "Senior") {
        return 40.91;
    } else {
        return 0;
    }
}
function criarLinha(nome, cargo, horas, valorHora, salarioBruto, id) {
    const linha = `<tr>
                    <td class="px-4 py-3">${id}</td>
                    <td class="px-4 py-3">${nome}</td>
                    <td class="px-4 py-3">${cargo}</td>
                    <td class="px-4 py-3">${horas}</td>
                    <td class="px-4 py-3">R$ ${salarioBruto.toFixed(2)}</td>
                    <td class="px-4 py-3 flex gap-2">
                        <button class="botao-editar bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1 rounded-md text-sm transition">
                            Editar
                        </button>
                        <button class=" botao-apagar bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-md text-sm transition">
                            Excluir
                        </button>
                    </td>
                </tr>`;


    //const linha = document.createElement("tr");
    //tbody.appendChild(linha);
    tbody.innerHTML = tbody.innerHTML + linha;
    //tbody.innerHTML += linha; // mesma coisa que a linha de cima, mas mais simples
    adicionarCliqueBotoes();
}
function editarLinha(nome, cargo, horas, valorHora, salarioBruto){
    const linhaEditar = tbody.children[indexParaEditar - 1];
    //alterar coluna do nome
    linhaEditar.children[1].innerHTML = nome;
    //alterar coluna do cargo
    linhaEditar.children[2].innerHTML = cargo;
    //alterar coluna do horas
    linhaEditar.children[3].innerHTML = horas;
    //alterar coluna do salario bruto
    linhaEditar.children[4].innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
}


function limparCampos() {
    campoNome.value = "";
    campoCargo.value = "";
    campoHoras.value = "";
    //reset dos indeices para editar que permite o cadastar novamente
    indexParaEditar = -1;
}
function adicionarCliqueBotoes() {
    let editarBotoes = document.getElementsByClassName("botao-editar");
    for (let i = 0; i < editarBotoes.length; i += 1) {
        let botaoEditar = editarBotoes[i];
        botaoEditar.addEventListener("click", preencherCamposParaEditar);
    }
    let botaoApagar = document.getElementsByClassName("botao-apagar");
    for (let i = 0; i < botaoApagar.length; i += 1) {
        let botaoExcluir = botaoApagar[i];
        botaoExcluir.addEventListener("click", confirmarParaApagar);
    }
}

function preencherCamposParaEditar(event) {
    const botaoEditar = event.target;
    const coluna = botaoEditar.parentElement;
    const linha = coluna.parentElement;
    const colunasDaLinha = linha.children;
    const id = colunasDaLinha[0].innerText;
    const nome = colunasDaLinha[1].innerText;
    const cargo = colunasDaLinha[2].innerText;
    const horas = colunasDaLinha[3].innerText;

    campoNome.value = nome;
    campoCargo.value = cargo;
    campoHoras.value = horas;
    //salvar na variaver global para qual depois consegiomos editar o dado corretamente
    indexParaEditar = linha.rowIndex;
}
function confirmarParaApagar(event) {
    const confirmaApagar = confirm("Tem certeza que deseja excluir este colaborador?");
    if (confirmaApagar === false) {
        return;
    }

    const botaoClique = event.target;
    const coluna = botaoClique.parentElement;
    const linha = coluna.parentElement;
    tbody.removeChild(linha);

    alert("Colaborador excluído com sucesso!");
}
//adcionar clique para linha existente da tabela
adicionarCliqueBotoes();
