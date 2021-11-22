<template>
  <div class="home">
    <img id="logo" src="../assets/logo_checklist.png" title="Site logo" alt="Site logo"/>
    <section class="categories_Block">
      <h1>Apresentação</h1>
      <p>
        Somos uma aplicação voltada para ajudar as pessoas que possuem
        dificuldades em organização de tempo a introduzir uma nova atividade em
        sua rotina
      </p>
    </section>
    <section class="categories_Block">
      <h1>Atividades</h1>
      <p>
        Existem 3 tipos de Atividades a serem trabalhadas.
        <br>Musica: Violão,Teclado e Baixo 
        <br>Atividade Física: Musculação, Crossfit e Esportes
        <br>Idiomas: Inglês, Espanhol e Francês
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#logo {
  margin: auto;
  width: 200px;
}
.categories_Block {
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 10px;
  margin-left: 10%;
  box-shadow: 2px 1px rgb(59, 155, 59);
}
.categories_Block h1{
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  background-color: rgb(16, 150, 16);
  padding: 4px;
}
.categories_Block p{
    font-weight: bold;
    margin-left: 4px;
}
</style>
