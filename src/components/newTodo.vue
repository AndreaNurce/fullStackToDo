<template>

    <div class="addToDo">
                <br><br>    
            <div v-if="show" v-on:click="show = !show" class="newItem">
                <span> Add new item </span>
                <img style="height:20px;padding: 5px;" src="../assets/add.png" alt=" " >
            </div>

            <div class="addNewItem"  v-if="!show">
                <input type="text" style="width:200px" name="toDO">
                <div class="important"> 
                    <span>Important</span>
                     <img style="height:16px;padding:0 0 0 15px;" src="../assets/star.png" alt=" " > 
                </div>
            
                <div class="save" v-on:click="show = !show;" >
                    <span>Save</span>
                    <img style="height:16px;padding:0 0 0 15px;" src="../assets/down-arrow.png" alt=" " >
                 </div>
            </div>
    </div>
  
</template>

<script>
export default {
    data : () => {
    return  {
        show : 0,
    }
}

}
</script>

<style scoped>
.addToDo{
    height: 200px;
    display: flex;
    align-items: center;
    justify-items: center;
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

</style>