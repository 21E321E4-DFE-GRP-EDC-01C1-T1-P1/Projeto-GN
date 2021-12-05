<template>
  <form id="login" @submit.prevent="registrarUsuario">
    <h3>Cadastro</h3>
    <div id="nome">
      <span>Nome</span><br>
      <input type="text" name="nome" v-model="newUser.name" placeholder="" required>
    </div>
    <div id="email">
      <span>E-mail</span><br>
      <input type="email" name="email" v-model="newUser.email" placeholder="usuario@gmail.com" required>
    </div>
    <div id="senha">
      <span>Senha</span><br>
      <input type="password" name="senha" v-model="newUser.password" placeholder="**********" required>
    </div>
    <div id="telefone">
      <span>Telefone</span><br>
      <input type="tel" name="telefone" v-model="newUser.cellNumber" placeholder="99999-9999" pattern="9{1}[0-9]{4}-[0-9]{4}" required>
    </div>
    <div id="nascimento">
      <span>Data de Nascimento</span><br>
      <input type="date" name="nascimento" v-model="newUser.birthday" placeholder="00/00/00" required>
    </div>
    <div id="genero">
      <span>Gênero</span><br>
      <input type="radio" name="gender" id="male" v-model="newUser.genre" value="male">
      <label for="male">M</label>
      <input type="radio" name="gender" id="female" v-model="newUser.genre" value="female">
      <label for="female">F</label>
      <input type="radio" name="gender" id="other" v-model="newUser.genre" value="other">
      <label for="other">Outro</label>
    </div>
    <div class="btnLogin">
      <button class="btn btn-dark">Cadastrar</button>
    </div>
  </form>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: "Form",
  data() {
    return {
      newUser: {
          name: "",
          email: "",
          password: "",
          Birthday: "",
          cellNumber: "",
          genre: "",
          activities: []
      }
    }
  },
  methods: {
    ...mapMutations(['addUser']),
    registrarUsuario() {
      this.addUser(this.newUser)
    }
  }
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
#nascimento input {
  width: 202.5px;
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