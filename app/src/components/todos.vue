<template>

    <div id="toDoList" >
        <ul>
            <li :class="{checked: res.checked == true }" :key='index' v-for="(res, index) in response" :id="res._id"   @click="checked([res.checked, res._id ])">{{res.data}}
                <div>
                <img v-if="res.important"
                    style="height:20px;padding:0 15px;" 
                    src="../assets/stared.png" 
                    alt=" " > 
                <img
                    style="height:20px;padding:0 15px;"
                    src="../assets/delete.png" 
                    alt=" " > 
                </div>
            </li>
            
        </ul>

    </div>
  
</template>

<script>
    import { mapMutations } from 'vuex'
  import {mapState} from 'vuex'
export default {
        computed :{
        ...mapState(['response'])
    },methods: {
        ...mapMutations(['checked'])
    },

}
</script>

<style scoped>
#toDoList{
    overflow: scroll;
    overflow-x: hidden;
    width: 60vw;
    height: 550px;
    margin: 0 auto ;
    padding: 15px;
    scrollbar-width: none;
    -ms-overflow-style: none;

}
#toDoList::-webkit-scrollbar {
    display: none;
}

ul{
width : 90%;
margin : 0 auto;
padding: 15px;

}
li{
font-size: 20px;
display: flex;
justify-content: space-between;
align-items: center;
list-style-type: none;
padding: 15px;
}
.checked{
    opacity: 0.5;
    text-decoration: line-through;

}
li:nth-child(even) {
background-color: darkgrey;

}
</style>