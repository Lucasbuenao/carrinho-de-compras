// Split: serve para que você identifique um caracter que queira delimitar e retorna o array (que depende de quantas vezes o caracter aparece).

let totalGeral;
limpar();


function adicionar(){
    // Recuperar valores - nome do produto quantidade e valor:
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorPorUnidade = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Calcular o preço/subtotal:
    let preco = quantidade * valorPorUnidade;
    //alert (`${nomeProduto}, qtde: ${quantidade.value} no valor de ${preco}R$.`);

    // Adicionar produtos no  carinho:
    let carrinho = document.getElementById('lista-produtos');  

    if (produto == "Selecione um produto") {
        alert("Selecione um produto válido.");
        return;
    }
    
    if (quantidade == 0) {
        alert ('Adicione uma quantidade ao produto!'); 
        return;
    }

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
  </section>`;

    // Atualizar valor total:
    totalGeral = totalGeral + preco;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
    
}

function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

 document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

