<template>
    <div>
        <main>
            <UserMenu />
            <div id="categories_Block">
                <h3>Categorias</h3>
                <hr>
                <div id="music">
                    <h4>Música  <span class="material-icons">music_note</span></h4>
                    <p>Violão, Teclado e Baixo</p>
                </div>
                <hr>
                <div id="sports">
                    <h4>Atividade Física <span class="material-icons">sports_tennis</span></h4>
                    <p>Musculação, Crossfit e Esportes</p>
                </div>
                <hr>
                <div id="language">
                    <h4>Idiomas  <span class="material-icons">auto_stories</span></h4>
                    <p>Inglês, Espanhol e Francês</p>
                </div>
                <hr>
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

<style>
/* Css para o Main */
#categories_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#categories_Block h3 {
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    background-color: rgb(16, 150, 16);
    padding: 4px;
}
</style>