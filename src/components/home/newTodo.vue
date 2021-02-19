<template>

    <div class="addToDo">
        <br><br>
            <div v-show="show" v-on:click="newItem(); payload=''"    class="newItem">
                <span> Add new item </span>
                <img style="height:20px;padding: 5px;" src="../../assets/add.png" alt=" " >
            </div>

            <div class="addNewItem"  v-show="!show">
                <input id="toDO" type="text"  v-model="payload" @keyup="bindValue(payload)"  style="width:200px"  value="The text">
                <div class="important" @click="stare"> 
                    <span>Important</span>
                     <img v-if="!important" style="height:16px;padding:0 0 0 15px;" src="../../assets/star.png" alt=" " > 
                     <img v-if="important" style="height:16px;padding:0 0 0 15px;" src="../../assets/stared.png" alt=" " > 

                </div>
            
                <div class="save" v-on:click="save()" >
                    <img style="height:16px;padding:5px 0;" src="../../assets/down-arrow.png" alt=" " >
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
        ...mapMutations(['stare','save','setState','newItem']),
        bindValue :function(value){
            this.setState(value);
        }
    }
}

</script>

<style scoped>
#toDO:focus{
    outline: none;
    transition:  0.3s ease-in-out ;
    
}
#toDO{
    border-radius: 10px;
    transition:  0.3s ease-in-out ;
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
    border-radius: 10px;
    transition:  0.3s ease-in-out ;


}
.addNewItem > * {
    padding : 5px;
    margin-right: 5px;
}
.addNewItem > input {
    padding: 7px 14px  ;
}
.important ,.save{
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 6px 24px 6px 24px ;
    background-color: cadetblue;
    z-index: 100;
    transition:  0.3s ease-in-out ;
    border-radius: 10px;

}
.newItem  {
    display: flex;
    width: 168px;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    padding: 3px 16px;
    margin: 0    auto;
    border-radius: 10px;
    color: white;

}
.newItem{
    cursor: pointer;
    transition:  0.3s ease-in-out ;

}
.newItem:hover, .important:hover,.save:hover{
    background-color: rgb(53, 113, 116); 
}

</style>