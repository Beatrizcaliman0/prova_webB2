function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para obter a classificação do IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Excesso de peso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        return 'Obesidade Classe I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        return 'Obesidade Classe II';
    } else {
        return 'Obesidade Classe III';
    }
}

// Coleta de dados
let quantidadeUsuarios = prompt('Digite a quantidade de usuários que serão avaliados:');
let usuarioMaiorIMC;
let maiorIMC = -1;
let somaIMC = 0;

for (let i = 1; i <= quantidadeUsuarios; i++) {
    let nome = prompt('Digite o nome do usuário ' + i + ':');
    let peso = parseFloat(prompt('Digite o peso do usuário ' + i + ' (em kg):'));
    let altura = parseFloat(prompt('Digite a altura do usuário ' + i + ' (em metros):'));

    // Calcula o IMC
    let imc = calcularIMC(peso, altura);

    // Atualiza a soma dos IMCs
    somaIMC += imc;

    // Verifica se é o maior IMC até agora
    if (imc > maiorIMC) {
        maiorIMC = imc;
        usuarioMaiorIMC = nome;
    }

    // Exibe a classificação do IMC
    let classificacao = classificarIMC(imc);
    alert(nome + ' tem IMC de ' + imc.toFixed(2) + ' - ' + classificacao);
}

// Calcula a média dos IMCs
let mediaIMC = somaIMC / quantidadeUsuarios;

// Exibe os resultados finais
alert('Quantidade de usuários coletados: ' + quantidadeUsuarios);
alert('Usuário com maior IMC: ' + usuarioMaiorIMC + ' com IMC de ' + maiorIMC.toFixed(2));
alert('Média dos IMCs dos usuários: ' + mediaIMC.toFixed(2));