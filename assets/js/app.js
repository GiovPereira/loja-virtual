const entrarPainel = document.getElementById("entrarPainel");
const cadastroSite = document.getElementById("cadastroSite");
const indicador = document.getElementById("indicador");

function Cadastrar() {
  cadastroSite.style.transform = "translateX(0px)";
  entrarPainel.style.transform = "translateX(0px)";
  indicador.style.transform = "translateX(120px)";
}

function Entrar() {
  cadastroSite.style.transform = "translateX(300px)";
  entrarPainel.style.transform = "translateX(300px)";
  indicador.style.transform = "translateX(0px)";
}

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

document.querySelectorAll(".btn-add-carrinho").forEach(botao => {
  botao.addEventListener("click", function () {

    const produto = {
      id: botao.dataset.id,
      nome: botao.dataset.nome,
      preco: parseFloat(botao.dataset.preco),
      quantidade: 1,
      imagem: botao.dataset.imagem
    };

    const existente = carrinho.find(p => p.id === produto.id);

    if (existente) {
      existente.quantidade++;
    } else {
      carrinho.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    window.location.href = "carrinho.html";
  });
});
