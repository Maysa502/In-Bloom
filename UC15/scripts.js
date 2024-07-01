

// Produto dados simulados (substitua com dados reais)
const produtos = {
    "produto1": {
        titulo: "Disco - In Utero",
        preco: "R$ 175,00",
        descricao: "Este disco é uma edição especial com faixas exclusivas e qualidade de áudio superior. Perfeito para fãs colecionadores.",
        imagem: "produto1.png"
    },
    "produto2": {
        titulo: "Poster - NeverMind 1",
        preco: "R$ 40,00",
        descricao: "Este poster é uma representação icônica do álbum NeverMind. Ideal para decoração de ambientes.",
        imagem: "produto2.png"
    },
    "produto3": {
        titulo: "Boneco Kunk Kurt Cobain 1",
        preco: "R$ 478,99",
        descricao: "Boneco colecionável do Kurt Cobain. Detalhes precisos e acabamento de alta qualidade.",
        imagem: "produto3.png"
    }
};

// Função para carregar os detalhes do produto
function carregarProduto() {
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get('produto');
    
    if(produtos[produtoId]) {
        document.getElementById('produto-titulo').textContent = produtos[produtoId].titulo;
        document.getElementById('produto-preco').textContent = produtos[produtoId].preco;
        document.getElementById('produto-descricao').textContent = produtos[produtoId].descricao;
        document.getElementById('produto-imagem').src = produtos[produtoId].imagem;
        document.getElementById('produto-imagem').alt = produtos[produtoId].titulo;
    } else {
        document.getElementById('produto-titulo').textContent = "Produto não encontrado";
    }
}

// Função para adicionar o produto ao carrinho e exibir mensagem
function adicionarAoCarrinho() {
    const mensagemCarrinho = document.getElementById('mensagem-carrinho');
    mensagemCarrinho.textContent = "Produto adicionado ao carrinho!";
    mensagemCarrinho.style.color = "white";
}

// Função para exibir mensagem de compra
function comprarProduto() {
    const mensagemCompra = document.getElementById('mensagem-compra');
    mensagemCompra.textContent = "Produto no carrinho aguardando pagamento.";
    mensagemCompra.style.color = "green";
}

// Chama a função ao carregar a página
window.onload = carregarProduto;
