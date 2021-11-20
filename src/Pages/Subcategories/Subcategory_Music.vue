<template>
    <div>
        <main>
            <UserMenu />
            <div id="subcategory_Block">
                <h3>Subcategoria</h3>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_guitar">
                    <hr>
                        <h4>Violão</h4>
                        <p>Tempo estimado: 8 horas semanais</p>
                    <hr>
                    </div>
                </router-link>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_keyboard">
                        <hr>
                        <h4>Teclado</h4>
                        <p>Tempo estimado: 9 horas semanais</p>
                        <hr>
                    </div>
                </router-link>
                <router-link to="/Categorias/Subcategoria">
                    <div id="subcategory_drums">
                    <hr>
                        <h4>Bateria</h4>
                        <p>Tempo estimado: 10 horas semanais</p>
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
#subcategory_guitar {
    background: url('../../assets/guitar.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_keyboard {
    background: url('../../assets/keyboard.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_drums {
    background: url('../../assets/drums.png') no-repeat 100% 50%;
    filter: grayscale(0.8);
}
#subcategory_Block div:hover {
    filter: none;
}
</style>