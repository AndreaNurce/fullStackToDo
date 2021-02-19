<template>

    <div id="logOut">

        <p class="logOutButton" @click="logOut()">Log Out </p>


    </div>
  
</template>

<script>
export default {
    data() {
        return {
            email : localStorage.getItem('email'),
        }
    },methods: {
        logOut : function (){
            localStorage.clear();
            this.$router.push('/logIn');
        }
    },

}
</script>

<style scoped >
div{
    padding: 20px;
}
.logOutButton{
    position: absolute;
    right: 20px;
    background-color: cadetblue;
    width: 100px;
    padding:5px;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
    transition:  0.3s ease-in-out ;
    color: white;
}
.logOutButton:hover{
    background-color: rgb(53, 113, 116);
}

</style>