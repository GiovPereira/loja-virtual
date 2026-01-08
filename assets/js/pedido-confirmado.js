const pedido = JSON.parse(localStorage.getItem("pedido"));

if (pedido && pedido.seguranca) {
  document.getElementById("mensagem-seguranca").innerText =
    " " + pedido.seguranca;
} else {
  document.getElementById("mensagem-seguranca").innerText =
    " Pedido confirmado em ambiente seguro.";
}
