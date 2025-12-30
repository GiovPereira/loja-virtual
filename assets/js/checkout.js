let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function carregarCheckout() {
  const tabela = document.getElementById("tabela-carrinho");
  let subtotal = 0;

  carrinho.forEach(item => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.quantidade}</td>
      <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
    `;

    tabela.appendChild(linha);
    subtotal += item.preco * item.quantidade;
  });

  document.getElementById("subtotal").innerText = `R$ ${subtotal.toFixed(2)}`;
  document.getElementById("total").innerText = `R$ ${(subtotal + 25.90).toFixed(2)}`;
}

function finalizarCompra() {
  localStorage.removeItem("carrinho");
  alert("Compra realizada com sucesso!");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", carregarCheckout);
