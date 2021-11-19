<template>
  <header>
        <ul id="mainMenu">
            <router-link to="/">Home</router-link>
            <router-link to="/usuario">Página de usuário</router-link>
            <li class="itemR"><a href="#">Sair</a></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "MainMenu"
}
</script>

<style>
/* Css para o Header */
#mainMenu {
    background-color: rgb(16, 150, 16);
    padding: 5px;
}
#mainMenu li {
    display: inline;
}
.itemR {
    float: right;
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
</style>