<template>
    <div>
        <main>
            <UserMenu />
            <div id="subcategory_Block">
                <h3>Subcategoria</h3>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_english">
                    <hr>
                        <h4>Inglês</h4>
                        <p>Tempo estimado: 12 horas semanais</p>
                    <hr>
                    </div>
                </router-link>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_spanish">
                        <hr>
                        <h4>Espanhol</h4>
                        <p>Tempo estimado: 8 horas semanais</p>
                        <hr>
                    </div>
                </router-link>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_french">
                    <hr>
                        <h4>Francês</h4>
                        <p>Tempo estimado: 15 horas semanais</p>
                    <hr>
                    </div>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue'

export default {
    components: {
        UserMenu
    }
}
</script>

<style scoped>
/* Css para o Main */
#subcategory_Block {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 50%;
    margin-left: 40%;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#subcategory_Block h3 {
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    background-color: rgb(16, 150, 16);
    padding: 4px;
}
a h4, a p {
    padding-left: 5px;
}
a:link, a:visited {
    color: #2c3e50;
    text-decoration: none;
}
#subcategory_english {
    background: url('../../assets/english_flag.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_spanish {
    background: url('../../assets/spanish_flag.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_french {
    background: url('../../assets/french_flag.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_Block div:hover {
    filter: none;
}
</style>