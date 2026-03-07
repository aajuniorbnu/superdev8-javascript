
//formulario categoria
const botaoCategoriaFisico = document.getElementById("categoria-fisico");
botaoCategoriaFisico.addEventListener("change" ,  mostrarCampoFisico);

const botaoCategoriaDigital = document.getElementById("categoria-digital");
botaoCategoriaDigital.addEventListener("change",mostraCampoDigital);

//formulario botoes
const botaoSalvar = document.getElementById("form-produto");
botaoSalvar.addEventListener("submit", salvarProduto);

const botaoLimpar = document.getElementById("btn-limpar");
botaoLimpar.addEventListener("click", limparFormulario);

//preço e quantidade visiveis
const campoPreco = document.getElementById("preco");
campoPreco.addEventListener("ïnput", aplicarMascaraPreco);
const campoQuantidade = document.getElementById("quantidade");
campoQuantidade.addEventListener("input", aplicarMascaraQuantidade);

//funçáo mostrar campo fisico
function mostrarCampoFisico(){
     // <div id="divider-fisico">...</div>
const dividerFisico = document.getElementById("divider-fisico");
// <div id="tipo-fisico">...</div>
const divCampoFisico = document.getElementById("tipo-fisico");
//<div id="divider-digital">...</div>
const dividerDigital = document.getElementById("divider-digital");
// <div id="tipo-digital">...</div>
const divCampoDigital =document.getElementById("tipo-digital");

//mostrar os campos produto fisico
dividerFisico.style.display = "flex";
divCampoFisico.style.display = "block";

//ocultar os campos produto digital
dividerDigital.style.display = "none";
divCampoDigital.style.display = "none";

const codigoBarras = document.getElementById("codigo-barras");
codigoBarras.addEventListener("input", aplicarMascaraCodigoBarras);
}

function mostraCampodigital(){
    // <div id="divider-digital">...</div>
    const dividerDigital = document.getElementById("divider-digital");
    // <div id="tipo-digital">...</div>
    const divCampoDigital = document.getElementById("tipo-digital");
    //<div id="divider-fisico">...</div>
    const dividerFisico = document.getElementById("divider-fisico");
    // <div id="tipo-fisico">...</div>
    const divCampoFisico = document.getElementById("tipo-fisico");

    //mostrar campos produto digital
    dividerDigital.style.display = "flex";
    divCampoDigital.style.display = "block";
    
    //ocultar os campos produto fisico
    dividerFisico.style.display = "none";
    divCampoFisico.style.display = "none";
}
function salvarProduto(evento) {
    // Impede a página de recarregar
    evento.preventDefault();

    // Lê o valor de cada campo pelo id
    const nome     = document.getElementById("nome-produto").value;
    const preco    = document.getElementById("preco").value;
    const qtd      = document.getElementById("quantidade").value;

    // Descobre qual categoria está selecionada
    const categoriaFisico  = document.getElementById("categoria-fisico");
    const categoriaDigital = document.getElementById("categoria-digital");

    // Validação simples: nome não pode estar vazio
    if (nome === "") {
        alert("Por favor, informe o nome do produto.");
        return;
    }

    // Validação: uma categoria deve estar selecionada
    if (categoriaFisico.checked === false && categoriaDigital.checked === false) {
        alert("Por favor, selecione a categoria do produto.");
        return;
    }

    // Monta o texto do resumo
    let textoResumo = "";

    textoResumo += "<strong>Nome:</strong> " + nome + "<br>";
    textoResumo += "<strong>Preço:</strong> R$ " + preco + "<br>";
    textoResumo += "<strong>Estoque:</strong> " + qtd + " unidades<br>";

    if (categoriaFisico.checked === true) {
        const peso    = document.getElementById("peso").value;
        const barras  = document.getElementById("codigo-barras").value;
        textoResumo += "<strong>Categoria:</strong> Produto Físico<br>";
        textoResumo += "<strong>Peso:</strong> " + peso + " kg<br>";
        textoResumo += "<strong>Cód. Barras:</strong> " + barras + "<br>";
    }

    if (categoriaDigital.checked === true) {
        const link    = document.getElementById("link-download").value;
        const tamanho = document.getElementById("tamanho-arquivo").value;
        const formato = document.getElementById("formato").value;
        textoResumo += "<strong>Categoria:</strong> Produto Digital<br>";
        textoResumo += "<strong>Link:</strong> " + link + "<br>";
        textoResumo += "<strong>Tamanho:</strong> " + tamanho + "<br>";
        textoResumo += "<strong>Formato:</strong> " + formato + "<br>";
    }

    // Exibe o resumo na div
    const divResumo = document.getElementById("resumo-produto");
    const paragrafoResumo = document.getElementById("resumo-texto");

    paragrafoResumo.innerHTML = textoResumo;
    divResumo.style.display = "block";
}



// FUNÇÃO DE LIMPAR FORMULÁRIO


function limparFormulario() {
    const desejaLimpar = confirm("Deseja limpar todos os campos?");

    if (desejaLimpar === true) {
        // <form id="form-produto">
        const formulario = document.getElementById("form-produto");
        formulario.reset();

        // Oculta as seções de categoria
        document.getElementById("divider-fisico").style.display = "none";
        document.getElementById("tipo-fisico").style.display = "none";
        document.getElementById("divider-digital").style.display = "none";
        document.getElementById("tipo-digital").style.display = "none";

        // Oculta o resumo
        document.getElementById("resumo-produto").style.display = "none";
    }
}


// FUNÇÕES DE MÁSCARA 


function aplicarMascaraPreco(evento) {
    const campo = evento.target;

    // Remove tudo que não for número
    let v = campo.value.replace(/\D/g, "");

    // Converte para formato monetário: 10000 → 100,00
    v = (parseInt(v) / 100).toFixed(2);

    // Troca ponto por vírgula
    v = v.replace(".", ",");

    // Evita "NaN" quando o campo está vazio
    if (v === "NaN") {
        campo.value = "";
        return;
    }

    campo.value = v;
}

function aplicarMascaraQuantidade(evento) {
    const campo = evento.target;

    // Permite apenas números
    let v = campo.value.replace(/\D/g, "").slice(0, 6);

    campo.value = v;
}

function aplicarMascaraPeso(evento) {
    const campo = evento.target;

    // Remove tudo que não for número e limita a 6 dígitos
    let v = campo.value.replace(/\D/g, "").slice(0, 6);

    // Formata: 001500 → 0,015 (3 casas decimais para kg)
    if (v.length > 3) {
        v = v.slice(0, v.length - 3) + "," + v.slice(-3);
    }

    campo.value = v;
}

function aplicarMascaraCodigoBarras(evento) {
    const campo = evento.target;

    // EAN-13: apenas números, máximo 13 dígitos
    let v = campo.value.replace(/\D/g, "").slice(0, 13);

    campo.value = v;
}

