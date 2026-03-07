document.getElementById("converter").addEventListener("click", converter)
    
    
    function converter () {
        debugger;
        let valor = Number(document.getElementById("valor").value);
        let moeda = document.getElementById("moeda").value;
        let resultado = document.getElementById("resultado");
    
        let taxa = 0;
        let simbolo = "";
    
        if (moeda === "dólar") {
            taxa = 0.1907;
            simbolo = "US$";
        }else if (moeda === "euro"){
            taxa = 0.1641;
            simbolo = "€";
        }else if(moeda ==="libra"){
            taxa = 0.1422;
            simbolo = "£";
        }else if(moeda==="iene"){
            taxa = 30.08;
            simbolo = "¥";
        }else if(moeda==="yuan"){
            taxa = 1.37;
            simbolo = "¥";
        }else if(moeda==="dolar-canadense"){
            taxa = 0.2589;
            simbolo = "C$";
        }else if(moeda==="peso-argentino"){
            taxa = 270.75;
            simbolo = "AR$";
        }else if(moeda==="franco-suíço"){
            taxa = 0.1481;
            simbolo = "CHF";
        }
        resultadoConversao(valor,taxa,simbolo);
    }

    function resultadoConversao(valor,taxa,simbolo){
        let valorConvertido = valor * taxa;
        resultado.innerHTML = `O valor convertido é ${simbolo} ${valorConvertido.toFixed(2)}`;
        if (valor <= 0 || moeda === "") {
    resultado.innerHTML = "Digite um valor e selecione uma moeda.";
    return;
}
    }
            













    

    