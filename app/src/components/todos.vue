<template>

    <div id="toDoList" >
        <ul>
            <li>To do item
                <div>
                <img
                    style="height:20px;padding:0 15px;"
                    src="../assets/stared.png" 
                    alt=" " > 
                <img
                    style="height:20px;padding:0 15px;"
                    src="../assets/delete.png" 
                    alt=" " > 
                </div>
            </li>
            <li>To do item
                <div>
                <img
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
export default {

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
li:nth-child(even) {
background-color: darkgrey;

}
</style>