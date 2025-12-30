// Recupera o carrinho existente
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Evento dos botões "Adicionar ao Carrinho"
document.querySelectorAll(".btn-add-carrinho").forEach(botao => {
  botao.addEventListener("click", function () {

    const produto = {
      id: botao.dataset.id,
      nome: botao.dataset.nome,
      preco: parseFloat(botao.dataset.preco),
      quantidade: 1,
      imagem: botao.dataset.imagem
    };

    // Verifica se o produto já existe
    const existente = carrinho.find(p => p.id === produto.id);

    if (existente) {
      existente.quantidade++;
    } else {
      carrinho.push(produto);
    }

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Redireciona para o carrinho
    window.location.href = "carrinho.html";
  });
});
