<template>
    <form id="login" @submit.prevent="efetuateLogin({ email: this.email, password: this.password})">
		<h3>Login</h3>
		<div id="email">
			<span>E-mail:</span>
			<input type="email" name="email" v-model="email" placeholder=" Digite seu email" required>
		</div>
		<div id="senha">
			<span>Senha:</span>
			<input type="password" name="senha" v-model="password" placeholder=" Digite sua senha" required>
		</div>
		<div id="btnLogin">
			<button class="btn btn-dark" type="submit">Entrar</button>
		</div>
		<div id="cadastre-se">
			<router-link to="/Cadastro">Cadastre-se</router-link>	
		</div>
		<!-- <div id="esqueceuS">
			<a href="#">Esqueceu sua senha?</a>
		</div> -->
	</form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: "Form",
	data() {
		return {
			email: "",
			password: ""
		}
	},
	computed: {
		...mapState(['users'])
	},
	methods: {
		...mapMutations(['efetuateLogin']),
	}
}
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
a:link, a:visited {
    color: black;
    font-weight: bold;
	text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
@media screen and (max-width: 580px){
    #login {
        width: 80%;
        margin: 0% 0% 15% 8%;
    }
}
</style>