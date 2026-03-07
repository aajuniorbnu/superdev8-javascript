// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");
// Função responsável por cadastrar (adicionar) um jogo na lista

//adiconar um "ouvinte de evento" ao campo
//quando ocorrer o evento do teclado pressionado
function eventoEnterCampoNome(event) {
    //verificaqual tecla foi pressionada
    //se a tecla for "Enter"
    if (event.key === "Enter") {
        //chama a funçao cadastrarJogo
        //isso faz com que o jogo seja adicionado a lista
        cadastrarJogo();
    }
}
function cadastrarJogo() {
    // Pega o valor digitado dentro do input,removendo os espaços do comeó e fim
    const nome = campoNome.value.trim();

    if (nome.legth < 2) {
        //apresenta uma msg que contem menos de 2 caracteres
        alert("O nome do jogo deve conter pelo menos 2 caracteres");
        //interrompe a execução da função quando é invalida        
        return;
    }

    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);
    //limpar o campo nome
    campoNome.value = "";
    //foco no campo nome
    campoNome.focus();
}