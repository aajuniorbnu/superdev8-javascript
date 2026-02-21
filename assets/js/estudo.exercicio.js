function exercicio01() {
    let itens = [];

    for (let i = 0; i < 5; i = i + 1) {
        let item = prompt(`Digite o ${i + 1}º item:`);
        itens.push(item);
    }

    let mensagem = "LISTA DE COMPRAS\n\n";
    for (let i = 0; i < itens.length; i = i + 1) {
        mensagem = mensagem + `${i + 1}. ${itens[i]}\n`;
    }

    alert(mensagem);
}

function exercicio02() {
    let numeros = [];
    let soma = 0;

    for (let i = 0; i < 6; i = i + 1) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i = i + 1) {
        soma = soma + numeros[i];
    }

    alert(`A soma de todos os números é: ${soma}`);
}

function exercicio03() {
    let numeros = [];

    for (let i = 0; i < 5; i = i + 1) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i = i + 1) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    alert(`Maior número: ${maior}\nMenor número: ${menor}`);
}
function exercicio04() {
    let alunos = [];
    let notas = [];
    let somaNotas = 0;

    for (let i = 0; i < 4; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
        let nota = parseFloat(prompt(`Digite a nota de ${nome}:`));
        
        alunos.push(nome);
        notas.push(nota);
        somaNotas = somaNotas + nota;
    }

    let media = somaNotas / alunos.length;

    let mensagem = "NOTAS DOS ALUNOS\n\n";
    for (let i = 0; i < alunos.length; i = i + 1) {
        mensagem = mensagem + `${alunos[i]}: ${notas[i].toFixed(2)}\n`;
    }
    mensagem = mensagem + `\nMédia da turma: ${media.toFixed(2)}`;

    alert(mensagem);
}

function exercicio05() {
    let produtos = [];
    let precos = [];
    let total = 0;

    for (let i = 0; i < 3; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º produto:`);
        let preco = parseFloat(prompt(`Digite o preço de ${nome}:`));
        
        produtos.push(nome);
        precos.push(preco);
        total = total + preco;
    }

    let indiceMaisCaro = 0;
    let maiorPreco = precos[0];

    for (let i = 1; i < precos.length; i = i + 1) {
        if (precos[i] > maiorPreco) {
            maiorPreco = precos[i];
            indiceMaisCaro = i;
        }
    }

    let mensagem = "RELATÓRIO DE PRODUTOS\n";
    for (let i = 0; i < produtos.length; i = i + 1) {
        mensagem = mensagem + `${i + 1}. ${produtos[i]} - R$ ${precos[i].toFixed(2)}\n`;
    }
    mensagem = mensagem + `\nPreço total: R$ ${total.toFixed(2)}`;
    mensagem = mensagem + `\nProduto mais caro: ${produtos[indiceMaisCaro]} (R$ ${maiorPreco.toFixed(2)})`;

    alert(mensagem);
}
//Contagem de Aprovados
function exercicio06() {
    let alunos = [];
    let notas = [];
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < 5; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
        let nota = parseFloat(prompt(`Digite a nota de ${nome}:`));
        
        alunos.push(nome);
        notas.push(nota);

        if (nota >= 7) {
            aprovados.push(nome);
        } else {
            reprovados.push(nome);
        }
    }

    let mensagem = "RESULTADO FINAL\n\n";
    mensagem = mensagem + `APROVADOS (${aprovados.length}):\n`;
    for (let i = 0; i < aprovados.length; i = i + 1) {
        mensagem = mensagem + `- ${aprovados[i]}\n`;
    }

    mensagem = mensagem + `\nREPROVADOS (${reprovados.length}):\n`;
    for (let i = 0; i < reprovados.length; i = i + 1) {
        mensagem = mensagem + `- ${reprovados[i]}\n`;
    }

    alert(mensagem);
}


//Exercício 7: Sistema de Votação
function exercicio07() {
    let candidatos = [];
    let votos = [];

    // Cadastro dos candidatos
    for (let i = 0; i < 4; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º candidato:`);
        candidatos.push(nome);
        votos.push(0);
    }

    // Simulação de 10 votos
    for (let i = 0; i < 10; i = i + 1) {
        let opcoes = "ESCOLHA UM CANDIDATO:\n\n";
        for (let j = 0; j < candidatos.length; j = j + 1) {
            opcoes = opcoes + `${j + 1}. ${candidatos[j]}\n`;
        }
        
        let voto = parseInt(prompt(opcoes + `\nDigite o número do candidato (${i + 1}º voto):`));
        
        if (voto >= 1 && voto <= candidatos.length) {
            votos[voto - 1] = votos[voto - 1] + 1;
        }
    }

    // Encontrar vencedor
    let indiceVencedor = 0;
    let maisVotos = votos[0];

    for (let i = 1; i < votos.length; i = i + 1) {
        if (votos[i] > maisVotos) {
            maisVotos = votos[i];
            indiceVencedor = i;
        }
    }

    // Exibir resultado
    let mensagem = "RESULTADO DA VOTAÇÃO\n\n";
    for (let i = 0; i < candidatos.length; i = i + 1) {
        mensagem = mensagem + `${candidatos[i]}: ${votos[i]} votos\n`;
    }
    mensagem = mensagem + `\nVENCEDOR: ${candidatos[indiceVencedor]} com ${maisVotos} votos!`;

    alert(mensagem);
}

//Exercício 8: Controle de Estoque Completo
function exercicio08() {
    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotal = [];

    // Cadastro
    for (let i = 0; i < 5; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º produto:`);
        let quantidade = parseInt(prompt(`Digite a quantidade de ${nome}:`));
        let preco = parseFloat(prompt(`Digite o preço unitário de ${nome}:`));
        
        produtos.push(nome);
        quantidades.push(quantidade);
        precos.push(preco);
        valoresTotal.push(quantidade * preco);
    }

    // Produto com maior valor em estoque
    let indiceMaiorValor = 0;
    let maiorValor = valoresTotal[0];

    for (let i = 1; i < valoresTotal.length; i = i + 1) {
        if (valoresTotal[i] > maiorValor) {
            maiorValor = valoresTotal[i];
            indiceMaiorValor = i;
        }
    }

    // Produto com menor quantidade
    let indiceMenorQtd = 0;
    let menorQtd = quantidades[0];

    for (let i = 1; i < quantidades.length; i = i + 1) {
        if (quantidades[i] < menorQtd) {
            menorQtd = quantidades[i];
            indiceMenorQtd = i;
        }
    }

    // Valor total do estoque
    let valorTotalEstoque = 0;
    for (let i = 0; i < valoresTotal.length; i = i + 1) {
        valorTotalEstoque = valorTotalEstoque + valoresTotal[i];
    }

    // Relatório
    let mensagem = "RELATÓRIO DE ESTOQUE\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    for (let i = 0; i < produtos.length; i = i + 1) {
        mensagem = mensagem + `${i + 1}. ${produtos[i]}\n`;
        mensagem = mensagem + `   Quantidade: ${quantidades[i]} un.\n`;
        mensagem = mensagem + `   Preço unitário: R$ ${precos[i].toFixed(2)}\n`;
        mensagem = mensagem + `   Valor total: R$ ${valoresTotal[i].toFixed(2)}\n\n`;
    }

    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    mensagem = mensagem + "ESTATÍSTICAS\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    mensagem = mensagem + `Maior valor em estoque:\n   ${produtos[indiceMaiorValor]} (R$ ${maiorValor.toFixed(2)})\n\n`;
    mensagem = mensagem + `Menor quantidade:\n   ${produtos[indiceMenorQtd]} (${menorQtd} un.)\n\n`;
    mensagem = mensagem + `Valor total do estoque:\n   R$ ${valorTotalEstoque.toFixed(2)}`;

    alert(mensagem);
}

//Exercício 9: Análise de Vendas Semanais
function exercicio09() {
    let diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    let vendas = [];
    let somaVendas = 0;

    // Cadastro das vendas
    for (let i = 0; i < 7; i = i + 1) {
        let valor = parseFloat(prompt(`Digite o valor vendido na ${diasSemana[i]}:`));
        vendas.push(valor);
        somaVendas = somaVendas + valor;
    }

    // Calcular média
    let media = somaVendas / 7;

    // Melhor e pior dia
    let indiceMelhorDia = 0;
    let maiorVenda = vendas[0];
    let indicePiorDia = 0;
    let menorVenda = vendas[0];

    for (let i = 1; i < vendas.length; i = i + 1) {
        if (vendas[i] > maiorVenda) {
            maiorVenda = vendas[i];
            indiceMelhorDia = i;
        }
        if (vendas[i] < menorVenda) {
            menorVenda = vendas[i];
            indicePiorDia = i;
        }
    }

    // Contar dias acima da média
    let diasAcimaMedia = 0;
    for (let i = 0; i < vendas.length; i = i + 1) {
        if (vendas[i] > media) {
            diasAcimaMedia = diasAcimaMedia + 1;
        }
    }

    // Relatório
    let mensagem = "ANÁLISE DE VENDAS SEMANAL\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    for (let i = 0; i < diasSemana.length; i = i + 1) {
        mensagem = mensagem + `${diasSemana[i]}: R$ ${vendas[i].toFixed(2)}\n`;
    }

    mensagem = mensagem + "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    mensagem = mensagem + "ESTATÍSTICAS\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    mensagem = mensagem + `Média de vendas: R$ ${media.toFixed(2)}\n\n`;
    mensagem = mensagem + `Melhor dia: ${diasSemana[indiceMelhorDia]}\n   (R$ ${maiorVenda.toFixed(2)})\n\n`;
    mensagem = mensagem + `Pior dia: ${diasSemana[indicePiorDia]}\n   (R$ ${menorVenda.toFixed(2)})\n\n`;
    mensagem = mensagem + `Dias acima da média: ${diasAcimaMedia}`;

    alert(mensagem);
}

//Exercício 10: Cadastro de Funcionários
function exercicio10() {
    let funcionarios = [];
    let cargos = [];
    let salarios = [];
    let totalFolha = 0;

    // Cadastro
    for (let i = 0; i < 5; i = i + 1) {
        let nome = prompt(`Digite o nome do ${i + 1}º funcionário:`);
        let cargo = prompt(`Digite o cargo de ${nome}:`);
        let salario = parseFloat(prompt(`Digite o salário de ${nome}:`));
        
        funcionarios.push(nome);
        cargos.push(cargo);
        salarios.push(salario);
        totalFolha = totalFolha + salario;
    }

    // Maior salário
    let indiceMaiorSalario = 0;
    let maiorSalario = salarios[0];

    for (let i = 1; i < salarios.length; i = i + 1) {
        if (salarios[i] > maiorSalario) {
            maiorSalario = salarios[i];
            indiceMaiorSalario = i;
        }
    }

    // Salário médio
    let salarioMedio = totalFolha / funcionarios.length;

    // Funcionários acima da média
    let acimaMedia = [];
    for (let i = 0; i < funcionarios.length; i = i + 1) {
        if (salarios[i] > salarioMedio) {
            acimaMedia.push(funcionarios[i]);
        }
    }

    // Relatório
    let mensagem = "RELATÓRIO DE FUNCIONÁRIOS\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    for (let i = 0; i < funcionarios.length; i = i + 1) {
        mensagem = mensagem + `${i + 1}. ${funcionarios[i]}\n`;
        mensagem = mensagem + `   Cargo: ${cargos[i]}\n`;
        mensagem = mensagem + `   Salário: R$ ${salarios[i].toFixed(2)}\n\n`;
    }

    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    mensagem = mensagem + "ESTATÍSTICAS\n";
    mensagem = mensagem + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    mensagem = mensagem + `Folha de pagamento total:\n   R$ ${totalFolha.toFixed(2)}\n\n`;
    mensagem = mensagem + `Maior salário:\n   ${funcionarios[indiceMaiorSalario]} (R$ ${maiorSalario.toFixed(2)})\n\n`;
    mensagem = mensagem + `Salário médio: R$ ${salarioMedio.toFixed(2)}\n\n`;
    mensagem = mensagem + `Funcionários acima da média (${acimaMedia.length}):\n`;
    
    for (let i = 0; i < acimaMedia.length; i = i + 1) {
        mensagem = mensagem + `   - ${acimaMedia[i]}\n`;
    }

    alert(mensagem);
}

//Exercício 11: Inverter Vetor
function exercicio11() {
    let numeros = [];
    let invertido = [];

    for (let i = 0; i < 5; i = i + 1) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    for (let i = numeros.length - 1; i >= 0; i = i - 1) {
        invertido.push(numeros[i]);
    }

    let mensagem = "VETOR ORIGINAL:\n";
    mensagem = mensagem + numeros.join(", ");
    mensagem = mensagem + "\n\nVETOR INVERTIDO:\n";
    mensagem = mensagem + invertido.join(", ");

    alert(mensagem);
}

//Exercício 12: Busca de Produto

function exercicio12() {
    let produtos = [];

    for (let i = 0; i < 5; i = i + 1) {
        let produto = prompt(`Digite o nome do ${i + 1}º produto:`);
        produtos.push(produto);
    }

    let busca = prompt("Digite o nome do produto que deseja buscar:");
    let encontrado = false;
    let posicao = -1;

    for (let i = 0; i < produtos.length; i = i + 1) {
        if (produtos[i].toLowerCase() === busca.toLowerCase()) {
            encontrado = true;
            posicao = i;
        }
    }

    if (encontrado) {
        alert(`Produto encontrado!\nPosição: ${posicao}\nNome: ${produtos[posicao]}`);
    } else {
        alert("Produto não encontrado no cadastro.");
    }
}

//Exercício 13: Ordenação Simples
function exercicio13() {
    let numeros = [];

    for (let i = 0; i < 5; i = i + 1) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    let maiores = [];

    // Encontrar os 3 maiores
    for (let vez = 0; vez < 3; vez = vez + 1) {
        let maior = numeros[0];
        let indiceMaior = 0;

        for (let i = 1; i < numeros.length; i = i + 1) {
            if (numeros[i] > maior) {
                maior = numeros[i];
                indiceMaior = i;
            }
        }

        maiores.push(maior);
        numeros[indiceMaior] = -Infinity; // Marca como já usado
    }

    let mensagem = "OS 3 MAIORES NÚMEROS:\n\n";
    mensagem = mensagem + `1º: ${maiores[0]}\n`;
    mensagem = mensagem + `2º: ${maiores[1]}\n`;
    mensagem = mensagem + `3º: ${maiores[2]}`;

    alert(mensagem);
}