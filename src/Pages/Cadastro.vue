<template>
  <form class="login">
    <span class="loginTitulo"> Cadastro </span>

    <div class="email">
      <span>Nome:</span>
      <input type="text" name="nome">
    </div>

    <div class="email">
      <span>Sobrenome:</span>
      <input type="text" name="sobrenome">
    </div>

    <div class="email">
      <span>E-mail:</span>
      <input type="e-mail" name="e-mail">
    </div>

    <div class="Senha">
      <span>Senha:</span>
      <input type="password" name="senha">
    </div>

    <div class="email">
      <span>Data de Nascimento:</span>
      <input type="number" name="nascimento">
    </div>

    <div class="email">
      <span>Gênero:</span>
      <input type="text" name="genero">
    </div>

    <div class="email">
      <span>Celular:</span>
      <input type="number" name="celular">
    </div>

    <div class="botaoLogin">
      <div>
        <button class="botao">Cadastrar</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "Form",
};
</script>
<style scoped>
.login {
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 10px;
  width: 50%;
  margin: auto;
}
.loginTitulo {
  margin-left: 45%;
  text-align: center;
  font: bold;
  font-size: 20px;
}
.email,
.Senha,
.botaoLogin,
.cadastre,
.esqueceuS {
  text-align: center;
}
.email span {
  padding-right: 10px;
}
.Senha span {
  padding: 20px;
}
</style>