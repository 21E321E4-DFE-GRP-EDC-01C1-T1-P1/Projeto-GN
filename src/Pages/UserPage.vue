<template>
    <div>
        <main>
            <UserMenu />
            <div id="activity_Block">
                <h3>Minhas Atividades</h3>
                <p v-if="$store.state.user.activities < 1">Nenhuma atividade no momento.</p>
                <div id="activity_panel" v-else v-for="activity in $store.state.user.activities" :key="activity.name">
                    <div class="activity_card">
                        <h4>{{activity.name}}</h4><hr>
                        <p>Data de início: {{activity.currentTime}}</p>
                    </div>
                </div>
                <router-link to="/Categorias"><button class="btn btn-success btn-sm">+</button></router-link>
            </div>
        </main>
    </div>
</template>
<script>
import UserMenu from '../components/UserMenu.vue'
import { mapState } from 'vuex'

export default {
    components: {
        UserMenu
    },
    methods: {
        ...mapState(['user'])
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
#activity_panel {
    display: inline-block;
}
.activity_card {
    width: 95%;
    margin: 10px;
    padding: 5px;
    border: 1px black solid;
    border-radius: 15px;
    box-shadow: 1px 1px rgb(184, 182, 182);
    background-color: rgb(238, 234, 234);
}
.activity_card h4 {
    font-weight: bold;
}
.activity_card hr {
    margin-bottom: 5px;
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
    .activity_card {
        width: 90%;
    }
}
</style>