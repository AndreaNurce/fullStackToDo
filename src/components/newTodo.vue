<template>

    <div class="addToDo">
            <div class="newItem"><span> Add new item </span><img style="height:24px;padding: 5px;" src="../assets/add.png" alt=" " ></div>
            <br>
            <div class="addNewItem">
                <input type="text" name="toDO">
                <div class="important"> Important <img style="height:16px;padding:0 0 0 15px;" src="../assets/star.png" alt=" " > </div>
                <div class="save">Save</div>
            </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style scouped>
.addToDo{
    margin-top:  3vh;
    clear: both;
    
}
.addNewItem{
    display: flex;
    width : 200px;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    transform: translateX(-50%);

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
}
.newItem  {
    display: flex;
    width: 168px;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    padding: 8px 16px;
    margin: 0 auto;
}

</style>