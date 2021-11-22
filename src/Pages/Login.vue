<template>
    <form class="login">
					<span class="loginTitulo">
						Login
					</span>

					<div class="email">
						<span>E-mail:</span>
						<input type="e-mail" name="e-mail" placeholder=" Digite o e-mail">
						
					</div>

					<div class="Senha">
						<span>Senha:</span>
						<input type="password" name="senha" placeholder=" Digite sua senha">
					</div>
					
					<div class="esqueceuS">
						<a href="#">
							Esqueceu sua senha?
						</a>
					</div>
					
					<div class="botaoLogin">
						<div>
							<button class="botao">
								Login
							</button>
						</div>
					</div>
					
					<div class="cadastre">
						<span>
							Ou
						</span>

						<a href="#">
							Cadastre-se
						</a>
					</div>
				</form>
</template>
<script>
export default {
    name: "Form",
}
</script>
<style scoped>
.login{
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin: auto;
}
.loginTitulo{
    margin-left: 45%;
    text-align: center;
    font: bold;
    font-size: 20px;
}
.email,.Senha,.botaoLogin,.cadastre,.esqueceuS{
    text-align: center;
}
.email span{
    padding-right: 10px;
}
.Senha span{
    padding: 20px;
}
</style>