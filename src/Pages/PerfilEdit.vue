<template>
    <div>
        <main>
            <div id="personal_data_block">
                <h3>Nome</h3><br>
                <h3>Sobrenome</h3><br>
                <h3>Email</h3><br>
                <h3>Data de Nascimento</h3><br>
                <h3>Gênero</h3><br>
                <h3>Celular</h3><br>
                </div>
            <UserMenu />
            <div id="activity_Block">
                <h3>Minhas Atividades</h3>
                <p v-if="activities < 1">Nenhuma atividade no momento.</p>
                <div v-else v-for="activity in activities" :key="activity.id">
                    <div class="activity_card">
                        <h3>{{activity.name}}</h3>
                        <p>Tempo decorrido: {{activity.currentTime}}</p>
                    </div>
                </div>
                <router-link to="/Categorias"><button class="btn btn-success btn-sm">+</button></router-link>
                <router-link to="/edicaodeperfil"><button class="btn btn-success btn-sm">+</button></router-link>
            </div>
        </main>
    </div>
</template>
<script>
import UserMenu from '../components/UserMenu.vue'
export default {
    components: {
        UserMenu
    }
}
</script>
<style scoped>
/* Css para o Main */
#personal_data_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
    padding-bottom: 43px;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#personal_data_Block h3 {
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    background-color: rgb(16, 150, 16);
    padding: 4px;
}
#activity_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
    padding-bottom: 43px;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#activity_Block h3 {
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    background-color: rgb(16, 150, 16);
    padding: 4px;
}
#activity_Block p {
    font-weight: bold;
    margin-left: 4px;
}
.activity_card {
    padding: 5px;
    background-color: whitesmoke;
    border-radius: 15px;
}
.btn {
    float: right;
    font-size: 24px;
    padding: 0px 12px;
    border-radius: 100%;
}
@media screen and (max-width: 580px){
    #activity_Block {
        width: 80%;
        margin: 0% 0% 15% 8%;
    }
}
</style>