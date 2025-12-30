function carregarCarrinho() {
  const tbody = document.getElementById("itens-carrinho");
  if (!tbody) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  tbody.innerHTML = "";

  carrinho.forEach((item, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <div class="info-carrinho">
          <img src="${item.imagem}" class="imagem-carrinho">
          <div>
            <p>${item.nome}</p>
            <small>Valor: R$ ${item.preco.toFixed(2)}</small>
            <br>
            <a href="#" onclick="removerItem(${index})">Remover</a>
          </div>
        </div>
      </td>
      <td>
        <input type="number" min="1" value="${item.quantidade}"
          onchange="atualizarQuantidade(${index}, this.value)">
      </td>
      <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
    `;

    tbody.appendChild(tr);
  });
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function atualizarQuantidade(index, qtd) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade = parseInt(qtd);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

document.addEventListener("DOMContentLoaded", carregarCarrinho);
