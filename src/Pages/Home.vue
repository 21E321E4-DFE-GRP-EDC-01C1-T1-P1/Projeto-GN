<template>
  <div>
    <img id="logo" src="../assets/logo_checklist.png" title="Site logo" alt="Site logo"/>
    <div id="categories_Block">
      <section>
        <h1>Apresentação</h1>
        <p>
          Somos uma aplicação voltada para ajudar as pessoas que possuem
          dificuldades em organização de tempo, a introduzir uma nova atividade em
          sua rotina.
        </p>
      </section>
      <hr>
      <section>
        <h1>Atividades</h1>
        <p>O site dispõe de 3 tipos de Atividades atualmente:<br> Musica - Atividade Física - Idiomas</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#logo {
  display: block;
  background: radial-gradient(whitesmoke,rgb(245, 245, 245, 0.5),rgb(245, 245, 245, 0.2));
  border-radius: 50%;
  margin: 10px auto;
  width: 200px;
}
#categories_Block {
  background-color: whitesmoke;
  padding: 5px;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 10px;
  margin-left: 10%;
  box-shadow: 2px 1px rgb(59, 155, 59);
}
#categories_Block h1{
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  background-color: rgb(16, 150, 16);
  padding: 4px;
}
#categories_Block p{
    font-weight: bold;
    margin-left: 4px;
}
@media screen and (max-width: 580px){
    #categories_Block {
        width: 80%;
        margin: 0% 0% 15% 8%;
    }
}
</style>
