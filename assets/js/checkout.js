const form = document.getElementById("form-checkout");
const cartaoArea = document.getElementById("cartao-area");

document.querySelectorAll('input[name="pagamento"]').forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "cartao" && radio.checked) {
      cartaoArea.style.display = "block";
    } else {
      cartaoArea.style.display = "none";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Pagamento realizado com sucesso! 🎉");

  localStorage.removeItem("carrinho");

  window.location.href = "index.html";
});
