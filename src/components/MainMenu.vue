<template>
  <header>
        <ul id="mainMenu">
            <li class="material-icons menu_icon">explore</li>
            <router-link to="/">Home</router-link>
            <router-link to="/Usuário" v-if="$store.state.activeUser">Página de usuário</router-link>
            <router-link to="/Categorias" v-if="$store.state.activeUser">Categorias</router-link>
            <li class="itemR" v-if="$store.state.activeUser" @click="$store.state.activeUser = false"><router-link to="/">Sair</router-link></li>
            <li class="itemR" v-else>
                <router-link to="/Login">Login</router-link>
                <router-link to="/Cadastro">Cadastro</router-link>
            </li>
        </ul>
        <button @click="$router.go(-1)" class="btn btn-success btn-sm">
            <span class="material-icons">arrow_back</span>
        </button>
    </header>
</template>

<script>
export default {
    name: "MainMenu",
}
</script>

<style scoped>
/* Css para o Header */
#mainMenu {
    background: linear-gradient(to right, rgb(24, 158, 24),rgb(17, 163, 17),rgb(6, 139, 6));
    padding: 4px;
}
#mainMenu li {
    display: inline;
}
.menu_icon {
    background-color: green;
    border: 1px green solid;
    border-radius: 0px 0px 25px 0px;
    padding: 3px 4px;
    margin: -5px 5px -5px -5px;
}
a:link, a:visited {
    color: whitesmoke !important;
    font-weight: bold;
    padding: 5px;
    text-decoration: none;
}
a:hover {
    background-color: rgb(9, 105, 9);
}
.btn {
    /* float: right; */
    font-size: 0px;
    padding: 5px 6px;
    margin-left: 90%;
    border-radius: 100%;
}
.itemR {
    float: right;
    background-color: green;
    border: 1px darkgreen solid;
    border-radius: 8px;
}
.itemR a:hover {
    background-color: darkgreen;
    border-radius: 8px;
}
@media screen and (max-width: 472px) {
    .itemR {
        margin: 10px;
    }
}
</style>