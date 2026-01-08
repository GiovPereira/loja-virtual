const form = document.getElementById("form-checkout");
const cartaoArea = document.getElementById("cartao-area");
const btnFrete = document.getElementById("btn-calcular-frete");
const resultadoFrete = document.getElementById("frete-resultado");

/* =====================
   PAGAMENTO (PIX / CARTÃO / BOLETO)
===================== */
document.querySelectorAll('input[name="pagamento"]').forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "cartao" && radio.checked) {
      cartaoArea.style.display = "block";
    } else {
      cartaoArea.style.display = "none";
    }
  });
});

/* =====================
   CÁLCULO DE FRETE (SIMULADO)
===================== */
btnFrete.addEventListener("click", () => {
  const cep = document.getElementById("cep").value.trim();

  if (cep.length < 8) {
    resultadoFrete.innerHTML = "Informe um CEP válido.";
    return;
  }

  let valorFrete = 0;

  if (cep.startsWith("1") || cep.startsWith("2")) {
    valorFrete = 15.90;
  } else if (cep.startsWith("3") || cep.startsWith("4")) {
    valorFrete = 19.90;
  } else {
    valorFrete = 29.90;
  }

  resultadoFrete.innerHTML = `
    Frete para o CEP <strong>${cep}</strong>:
    <strong>R$ ${valorFrete.toFixed(2)}</strong>
  `;

  localStorage.setItem("frete", valorFrete);
});

/* =====================
   FINALIZAÇÃO DO PEDIDO
===================== */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const frete = parseFloat(localStorage.getItem("frete"));

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  if (!frete) {
    alert("Por favor, calcule o frete antes de finalizar o pedido.");
    return;
  }

  /* DADOS DO CLIENTE */
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const cep = document.getElementById("cep").value;

  /* FORMA DE PAGAMENTO */
  const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

  let mensagemPagamento = "";

  if (pagamento === "pix") {
    mensagemPagamento = "Pagamento via PIX processado com sucesso.";
  }

  if (pagamento === "boleto") {
    mensagemPagamento = "Boleto gerado com sucesso. Vencimento em 3 dias úteis.";
  }

  if (pagamento === "cartao") {
    const parcelas = document.getElementById("parcelas").value;
    mensagemPagamento = `Pagamento no cartão aprovado em ${parcelas}x.`;
  }

  alert(mensagemPagamento);

  /* TOTAL DO PEDIDO */
  const totalProdutos = carrinho.reduce((soma, item) => {
    return soma + (item.preco * item.quantidade);
  }, 0);

  const totalPedido = totalProdutos + frete;

  /* CRIAÇÃO DO PEDIDO */
  const pedido = {
    id: "PED-" + Date.now(),
    cliente: { nome, email },
    endereco: { endereco, cidade, cep },
    pagamento,
    itens: carrinho,
    frete,
    total: totalPedido,
    status: "Pagamento aprovado",
    seguranca: "Pedido confirmado em ambiente seguro com criptografia de dados.",
    data: new Date().toLocaleDateString("pt-BR")
  };

  /* SALVA PEDIDO */
  localStorage.setItem("pedido", JSON.stringify(pedido));

  /* LIMPA CARRINHO */
  localStorage.removeItem("carrinho");
  localStorage.removeItem("frete");

  /* REDIRECIONA */
  window.location.href = "pedido-confirmado.html";
});
