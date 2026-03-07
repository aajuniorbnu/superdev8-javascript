const campoStrike = document.getElementById("campo-strike");
const campoNome = document.getElementById("campo-nome");
const botaoVerificar = document.getElementById("botao-verificar");
const resultado = document.getElementById("resultado");


botaoVerificar.addEventListener("click", contadorStrike);

function contadorStrike() {


    const strikes = Number(campoStrike.value);
    const nome = campoNome.value.trim();

    if (!nome) {
        resultado.textContent = "Por favor, digite o nome do jogador.";
        return;
    }

    if (strikes <= 0 || campoStrike.value === "") {
        resultado.innerHTML = `<strong>${nome}</strong> tem ${strikes} strikes!`;
        return;
    }


    if (strikes >= 3) {
        resultado.innerHTML = `<strong>${nome}</strong> está banido! (${strikes} strikes)`;
    } else {
        const restantes = 3 - strikes;
        resultado.innerHTML = `<strong>${nome}</strong> tem ${strikes} strikes. Ainda restam ${restantes} chance(s).`;
    }
}
