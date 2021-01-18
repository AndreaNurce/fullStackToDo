<template>

    <div id="toDoList" >
        <ul>
            <li>To do item <img src="" alt=""></li>
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
    width: 70vw;
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
list-style-type: none;
padding: 15px;

}
li:nth-child(even) {
background-color: darkgrey;

}
</style>