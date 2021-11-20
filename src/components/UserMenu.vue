<template>
    <div id="userMenu">
        <div><img src="../assets/generic_profile_photo.jpg" alt="profile" title="profile"/></div>
        <hr>
        <p><b>Nome:</b> {{user.username}}</p>
        <p><b>Email:</b> {{user.email}}</p>
        <p><b>telefone:</b> {{user.celNumber}}</p>
        <hr>
        <div>
            <span class="material-icons">add_task</span>
            <span class="material-icons">done_all</span>
            <span class="material-icons">alarm_on</span>
            <span class="material-icons">edit_calendar</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserMenu",
    data() {
        return {
            user: {username: "Usuário 1", email: "user@gmail.com", celNumber: "99999-9999"}
        }
    }
}
</script>

<style scoped>
#userMenu {
    float: left;
    background-color: whitesmoke;
    padding: 5px;
    border: 2px grey solid;
    border-radius: 10px;
    width: 20%;
    margin-left: 8%;
    box-shadow: 2px 1px rgb(59, 155, 59);
}
#userMenu img {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
}
#userMenu span {
    font-size: 40px;
    padding: 5%;
}
</style>