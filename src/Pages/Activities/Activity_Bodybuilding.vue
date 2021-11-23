<template>
    <main>
        <UserMenu />
        <div id="activity_Block">
            <h3>Musculação</h3>
            <img src="../../assets/bodybuilding_icon.png" alt="bodybuilding icon" title="bodybuilding icon">
            <h4>Descrição</h4>
            <p>
                O treinamento de força, conhecido popularmente como musculação, 
                é uma forma de exercício contra resistência, praticado normalmente 
                em academias, para o treinamento e desenvolvimento dos músculos esqueléticos.
            </p>
            <hr>
            <h4>Tempo necessário</h4>
            <p>6 horas semanais</p>
            <h4>Curso Livre</h4>
            <p>0 participantes atualmente</p>
            <button class="btn btn-success btn-sm">+</button>
        </div>
    </main>
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
#activity_Block h4 {
    font-weight: bold;
    font-size: 22px;
}
#activity_Block img {
    float: right;
    width: 100px;
    margin-right: 10px;
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