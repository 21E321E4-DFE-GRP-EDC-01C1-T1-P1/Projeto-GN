<template>
    <div>
        <main>
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
            </div>
        </main>
    </div>
</template>
<script>
import UserMenu from '../components/UserMenu.vue'

export default {
    data() {
        return {
             activities: [/*{name: "Inglês", currentTime: "X min"}*/]
        }
    },
    components: {
        UserMenu
    }
}
</script>
<style scoped>
/* Css para o Main */
#activity_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
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
    font-size: 24px;
    padding: 0px 12px;
    margin-left: 94%;
    border-radius: 100%;
}
</style>