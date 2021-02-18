<template>
  <div id="app">

   <a href="/"> <img src="../assets/icon.png" alt=""></a>

    <logOut/>
    <side-bar/>
    <new-todo/>
    <todos/>

  </div>
</template>

<script>


import SideBar  from './weeks.vue'
import newTodo  from './newTodo.vue'
import todos  from './todos.vue'
import logOut  from './logOut.vue'



export default {
  name: 'App',
  components :{
    SideBar,
    newTodo,
    todos,
    logOut
  }
}
</script>

<style scoped >
img{
  position: absolute;
  height: 50px;
  padding: 15px;
}
</style>
