
function calcularFrete() {
    let valorInput = document.getElementById("valorCompra").value;
    let valor = Number(valorInput);
    let regiao = document.getElementById("regiao").value;
    let resultadoP = document.getElementById("resultadoFrete");

    if (!valorInput || valor <= 0) {
        resultadoP.innerText = "Por favor, informe um valor de compra válido.";
        return;
    }

    if (regiao === "") {
        resultadoP.innerText = "Por favor, selecione uma região.";
        return;
    }

    let frete = 0;
    let limiteGratis = 0;

    if (regiao === "sudeste") {
        frete = 19.90;
        limiteGratis = 299.00;
    } else if (regiao === "sul") {
        frete = 24.90;
        limiteGratis = 299.00;
    } else if (regiao === "nordeste") {
        frete = 29.90;
        limiteGratis = 349.00;
    }

    if (valor >= limiteGratis) {
        resultadoP.innerText = "Frete grátis!";
    } else {
        resultadoP.innerText = "Frete: R$ " + frete.toFixed(2).replace(".", ",");
    }
    console.log("frete:", frete);
    console.log("limiteGratis:", limiteGratis);
}


function comprar(nomeProduto, preco) {
    alert("Você selecionou: " + nomeProduto + "\nPreço: R$ " + preco.toFixed(2).replace('.', ','));
}

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let numeracao = document.getElementById("numeracao").value;
    let cor = document.getElementById("cor").value;
    let mensagem = document.getElementById("mensagem").value;

    let estiloInput = document.querySelector('input[name="estilo"]:checked');
    let estilo = estiloInput ? estiloInput.value : "";

    let cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        idade: idade,
        numeracao: numeracao,
        cor: cor,
        estilo: estilo,
        mensagem: mensagem
    };

    console.log("Cliente Cadastrado:", cliente);

    let msgDiv = document.getElementById("mensagemSucesso");
    if (msgDiv) {
        msgDiv.innerHTML = "<p style='color: green; font-weight: bold;'>Cadastro realizado com sucesso!</p>";
    }

    alert("Cadastro realizado com sucesso!");
}