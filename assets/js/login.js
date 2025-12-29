var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}

var entrarPainel = document.getElementById("entrarPainel");
var cadastroSite = document.getElementById("cadastroSite");
var indicador = document.getElementById("indicador");

function Cadastrar (){
    cadastroSite.style.transform = "translateX(0px)";
    entrarPainel.style.transform = "translateX(0px)";
    indicador.style.transform = "translateX(100px)";
}

function Entrar (){
    cadastroSite.style.transform = "translateX(300px)";
    entrarPainel.style.transform = "translateX(300px)";
    indicador.style.transform = "translateX(0px)";
}
