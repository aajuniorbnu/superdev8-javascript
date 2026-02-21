const imagens = [
    "assets/imagens/mine1.png",
    "assets/imagens/mine2.jpg",
    "assets/imagens/mine3.jpeg",
    "assets/imagens/mine4.webp"
]
   
const imagem = document.getElementById("imagem-mine");
let indice = 0;
setInterval(() => {
    let imagemSrc = imagens[indice];
    imagem.setAttribute("src", imagemSrc);

    indice = indice + 1;
    if (indice >= 4) {
        indice = 0;
    }
}, 1000);




//Busca no html todos os elementos que tenham, o atributo name="fonte"(radio/inputs de tamnanho de fonte)

let inputsTamanhoFonte = document.getElementsByTagName("fonte");

//Percorre a lista de inputs econtrados(do primeiro ao ultimo)
for (let i = 0; i < inputsTamanhoFonte.length; i += 1) {
    //pega o input da posiçao atual(indice i )dentro da lista
    const inputTamanhoFonte = inputsTamanhoFonte[i];
    //define que, quando esse input mudar o valor, a funçao campoFoteAlterado será executada
    inputTamanhoFonte.onchange = campoFonteAlterado;
}
//funçao chamada automaticamente quando algum input de fonte mudar(evento "change")
function campoFonteAlterado(event) {
    //pega o valor do input que disparou o evento(por exemplo 12 16 20 etc)
    let tamanho = event.target.value;
    //chama funçao responsavel por aplicar o tamanho da fonte no paragrafo
    alterarTamanhoFonte(tamanho);
}
// funçao que realmente altera o tamanho da fonte do primeiro <p> da pagina
function alterarTamanhoFonte(tamanho) {
    //busca todas as tags <p> e pega a primeira delas (indice 0 )
    const tagP = document.getElementsByTagName("p")[0];
    //define o font-size do paragrafo usando template string e adicionando "px"ao valor do tamanho
    tagP.style.fontSize = `${tamanho}px`;
}
//seleciona o elemento input/select responsavel pela cor do texto
const corTexto = document.getElementById("cor-texto");
//adiciona um listener para detectar quando o valor do input/select mudar
corTexto.addEventListener("change", definirCorTexto);
//seleciona o primeiro paragrafo da pagina
const tagP = document.getElementsByTagName("p")[0];
//funcao que será chamada qaundo a cor for alterada
function definirCorTexto(event) {
    //obtem o elemento que disparou o evento (o select de cores)
    let campoSelect = event.target;
    //pega o valor selecionado (a cor escolhida)
    let cor = campoSelect.value;
    //aplica a cor selecionada ao estilo do primeiro paragrafo
    tagP.style.color = cor;
}
//seleciona o input/select responsavel pela cor de fundo
const tagCorFundo = document.getElementsByTagName("body")[0];

//adiciona um listener para detectar quando o valor do input/select mudar
const corFundo = document.getElementById("cor-fundo");
corFundo.addEventListener("change", definirCorFundo);
//funcao que será chamada qaundo a cor de fundo for alterada
function definirCorFundo() {
    //pega o valor selecionado (a cor escolhida)
    const corFundo = tagCorFundo.value;
    //seleiona o elemento body da pagina
    const body = document.getElementsByTagName("body")[0];
    //aplica a cor escolhida ao fundo da pagina(backgroudColor)
    body.style.backgoundColor = corFundo;
}