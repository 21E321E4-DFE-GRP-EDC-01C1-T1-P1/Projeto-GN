<template>
  <form id="login">
    <h3>Cadastro</h3>
    <div id="nome">
      <span>Nome</span><br>
      <input type="text" name="nome" placeholder="Primeiro Nome" required>
    </div>
    <div id="sobrenome">
      <span>Sobrenome</span><br>
      <input type="text" name="sobrenome" placeholder="Último Nome" required>
    </div>
    <div id="email">
      <span>E-mail</span><br>
      <input type="email" name="email" placeholder="usuario@gmail.com" required>
    </div>
    <div id="senha">
      <span>Senha</span><br>
      <input type="password" name="senha" placeholder="**********" required>
    </div>
    <div id="nascimento">
      <span>Data de Nascimento</span><br>
      <input type="number" name="nascimento" placeholder="00/00/00" required>
    </div>
    <div id="telefone">
      <span>Telefone</span><br>
      <input type="number" name="telefone" placeholder="99999-9999" required>
    </div>
    <div id="genero">
      <span>Gênero</span><br>
      <input type="radio" name="gender" id="male" value="male">
      <label for="male">H</label>
      <input type="radio" name="gender" id="female" value="female">
      <label for="female">M</label>
      <input type="radio" name="gender" id="other" value="other">
      <label for="other">Outro</label>
    </div>
    <div class="btnLogin">
      <button class="btn btn-dark">Cadastrar</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Form"
};
</script>
<style scoped>
#login{
  text-align: center;
	font-weight: bold;
  background-color: whitesmoke;
  padding: 5px;
	border: 1px grey solid;
  border-radius: 10px;
  width: 50%;
  margin: auto;
	box-shadow: 2px 1px rgb(59, 155, 59);
}
#login h3 {
  font-weight: bold;
  font-size: 20px;
	text-align: center;
}
#login div, #login span {
	padding: 5px;
}
#login input {
	border-radius: 5px;
}
#login label {
	padding: 0px 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media screen and (max-width: 580px){
    #login {
        width: 80%;
        margin: 0% 0% 15% 8%;
    }
}
</style>