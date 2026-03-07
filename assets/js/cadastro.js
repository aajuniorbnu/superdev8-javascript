

const botaoTipoPF = document.getElementById("tipo-pf-radio");
botaoTipoPF.addEventListener("change", mostrarCamposPF);

const botaoTipoPJ = document.getElementById("tipo-pj-radio");
botaoTipoPJ.addEventListener("change", mostrarCamposPJ);




const formularioCadastro = document.getElementById("form-cadastro");
formularioCadastro.addEventListener("submit", enviarFormulario);

// FUNÇÕES DE MOSTRAR / OCULTAR SEÇÕES


function mostrarCamposPF() {
    // <div id="divider-pf">...</div>
    const dividerPF = document.getElementById("divider-pf");
    // <div id="tipo-pf">...</div>
    const divCamposPF = document.getElementById("tipo-pf");
    // <div id="divider-pj">...</div>
    const dividerPJ = document.getElementById("divider-pj");
    // <div id="tipo-pj">...</div>
    const divCamposPJ = document.getElementById("tipo-pj");

    // Mostra os campos de Pessoa Física
    dividerPF.style.display = "flex";
    divCamposPF.style.display = "block";

    // Oculta os campos de Pessoa Jurídica
    dividerPJ.style.display = "none";
    divCamposPJ.style.display = "none";

    // Vincula as máscaras APÓS os campos estarem visíveis
    const campoCPF = document.getElementById("cpf");
    campoCPF.addEventListener("input", aplicarMascaraCPF);

    const campoRG = document.getElementById("rg");
    campoRG.addEventListener("input", aplicarMascaraRG);
}

function mostrarCamposPJ() {
    // <div id="divider-pj">...</div>
    const dividerPJ = document.getElementById("divider-pj");
    // <div id="tipo-pj">...</div>
    const divCamposPJ = document.getElementById("tipo-pj");
    // <div id="divider-pf">...</div>
    const dividerPF = document.getElementById("divider-pf");
    // <div id="tipo-pf">...</div>
    const divCamposPF = document.getElementById("tipo-pf");

    // Mostra os campos de Pessoa Jurídica
    dividerPJ.style.display = "flex";
    divCamposPJ.style.display = "block";

    // Oculta os campos de Pessoa Física
    dividerPF.style.display = "none";
    divCamposPF.style.display = "none";

    // Vincula a máscara APÓS os campos estarem visíveis
    const campoCNPJ = document.getElementById("cnpj");
    campoCNPJ.addEventListener("input", aplicarMascaraCNPJ);
}

function enviarFormulario(e) {
    // Impede a página de recarregar ao clicar em Cadastrar
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
}


function aplicarMascaraCPF(evento) {
    const campo = evento.target;

    let v = campo.value.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    campo.value = v;
}

function aplicarMascaraRG(evento) {
    const campo = evento.target;

    let v = campo.value.replace(/\D/g, "").slice(0, 9);
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1})$/, "$1-$2");

    campo.value = v;
}

function aplicarMascaraCNPJ(evento) {
    const campo = evento.target;

    let v = campo.value.replace(/\D/g, "").slice(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");

    campo.value = v;
}