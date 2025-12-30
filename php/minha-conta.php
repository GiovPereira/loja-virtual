<?php require_once('header.php')?>

<div class="minha-conta">

    <div class="container">

        <div class="linha">

            <div class="col-2">
                <img src="assets/img/banner-1.png" width="100%" alt="" class="banner-cad">
            </div>

            <div class="col-2">
                <div class="formulario">

                    <div class="btn-form">
                        <span onclick="Entrar()">Entrar</span>
                        <span onclick="Cadastrar()">Cadastro</span>
                        <hr id="indicador">
                    </div>

                    <form action="" method="post" id="entrarPainel">
                        <input type="text" name="email" id="" placeholder="E-mail de acesso">
                        <input type="password" name="senha" id="" placeholder="Senha de acesso">
                        <button type="submit" name="entrar" class="btn">Entrar</button>
                        <a href="" title="">Esqueceu sua senha?</a>
                    </form>

                    <form action="" method="post" id="cadastroSite">
                        <input type="text" name="nome" id="" placeholder="Nome Completo">
                        <input type="text" name="email" id="" placeholder="E-mail de acesso">
                        <input type="password" name="senha" id="" placeholder="Senha de acesso">
                        <button type="submit" name="cadastrar" class="btn">Cadastre-se</button>
                    </form>

                </div>
            </div>

        </div>

    </div>

   </div>


<?php require_once('footer.php')?>