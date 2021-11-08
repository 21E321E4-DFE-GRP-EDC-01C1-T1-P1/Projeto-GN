<template>
    <div>
        <header>
            <ul class="mainMenu">
                <li class="itemL"><a href="#">Home</a></li>
                <li class="itemL"><a href="#">Página de usuário</a></li>
                <li class="itemR"><a href="#">Sair</a></li>
            </ul>
        </header>
        <main>
            <ul id="userMenu">
                <li>Nome: {{user.username}}</li>
                <li>Email: {{user.email}}</li>
                <li>telefone: {{user.celNumber}}</li>
            </ul>
            <div id="activity_Block">
                <h2>Minhas Atividades</h2>
                <p v-if="activities < 1">Nenhuma atividade no momento.</p>
                <div v-else v-for="activity in activities" :key="activity.id">
                    <div class="activity_card">
                        <h3>{{activity.name}}</h3>
                        <p>Tempo decorrido: {{activity.currentTime}}</p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <p>Copyrights</p>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {username: "Usuário 1", email: "user@gmail.com", celNumber: "99999-9999"},
            activities: [{name: "Inglês", currentTime: "X min"}]
        }
    }
}
</script>
<style scoped>
/* Css para o Header */
.mainMenu {
    background-color: rgb(16, 92, 16);
    padding: 5px;
}
.mainMenu li {
    display: inline;
    margin: 5px 10px;
}
.itemL {
    float: left;
}
.itemR {
    float: right;
}
a:link, a:visited {
    color: black;
    font-weight: bold;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
/* Css para o Main */
#userMenu {
    float: left;
    width: 15%;
    font-weight: bold;
    background-color: rgb(190, 179, 179);
    border-radius: 10px;
    list-style: none;
}
#activity_Block {
    float: right;
    width: 60%;
    background-color: grey;
    padding: 10px;
    border-radius: 10px;
}
#activity_Block h2 {
    background-color: rgb(3, 136, 43);
}
.activity_card {
    padding: 5px;
    background-color: whitesmoke;
    border-radius: 15px;
}
</style>