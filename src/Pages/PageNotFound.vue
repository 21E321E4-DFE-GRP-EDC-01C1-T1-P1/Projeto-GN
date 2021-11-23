<template>
    <div id="error_msg">
        <h3>Página não encontrada <span class="material-icons">error_outline</span></h3>
        <p>A página requisitada não foi encontrada...</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#error_msg {
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 10px;
    width: 40%;
    margin-left: 33%;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#error_msg h3 {
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    color: white;
    background-color: rgb(16, 150, 16);
    padding: 4px;
}
@media screen and (max-width: 580px){
    #error_msg {
        width: 80%;
        margin: 0% 0% 15% 8%;
    }
}
</style>