<template>

    <div class="addToDo">

            <div v-show="show" v-on:click="save" class="newItem">
                <span> Add new item </span>
                <img style="height:20px;padding: 5px;" src="../assets/add.png" alt=" " >
            </div>

            <div class="addNewItem"  v-show="!show">
                <input type="text" v-model="payload" @keyup="printeee(payload)"  style="width:200px" id="toDO">
                <div class="important" @click="stare"> 
                    <span>Important</span>
                     <img v-if="!important" style="height:16px;padding:0 0 0 15px;" src="../assets/star.png" alt=" " > 
                     <img v-if="important" style="height:16px;padding:0 0 0 15px;" src="../assets/stared.png" alt=" " > 

                </div>
            
                <div class="save" v-on:click="save" >
                    <span>Save</span>
                    <img style="height:16px;padding:0 0 0 15px;" src="../assets/down-arrow.png" alt=" " >
                 </div>
            </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            payload :''
        }
    },
    computed:{
        ...mapState(['show','important','toDoText']),

    },methods: {
        ...mapMutations(['stare','save','setState']),
        printeee :function(value){
            this.setState(value);
        }
    }
}

</script>

<style scoped>
#toDO:focus{
    outline: none;
}
.addToDo{
        display: flex;
    align-items: center;
    justify-items: center;
    height: 200px;
}
.addNewItem{
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    width: 525px;
}
.addNewItem > * {
    padding : 5px;
    margin-right: 5px;
}
.addNewItem > input {
    padding: 7px 14px  ;
}
.important ,.save{
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 6px 24px 6px 24px ;
    background-color: cadetblue;
    z-index: 100;
}
.newItem  {
    display: flex;
    width: 168px;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    padding: 3px 16px;
    margin: 0 auto;
}
.newItem{
    cursor: pointer;
}
.newItem,.important ,.save:hover{
     cursor: pointer;
}

</style>