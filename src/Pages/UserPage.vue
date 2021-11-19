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
            </div>
        </main>
        <footer>
            <p>&copy; Copyright</p>
        </footer>
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
<style>
/* Css para o Main */
#activity_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
}
#activity_Block h3 {
    background-color: rgb(16, 150, 16);
    font-size: larger;
    color: white;
    padding: 4px;
}
.activity_card {
    padding: 5px;
    background-color: whitesmoke;
    border-radius: 15px;
}
</style>