<template>

    <div class="addToDo">

        <div class="container">

            <div class="newItem">Add new item</div>

            <div class="addNewItem">

                <input type="text" name="toDO">
                <div class="important">Important <img src="" alt=""></div>
                <div class="save">Save</div>

            </div>
            
        </div>

        
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

.addNewItem{
    display: flex;
    align-items: center;
    justify-items: center;
}.addNewItem > * {
    padding : 5px;
    margin-right: 10px;
}

</style>