<template>
  <div id="app">
    <side-bar/>
    <new-todo/>
    <todos/>

  </div>
</template>

<script>


import SideBar  from './weeks.vue'
import newTodo  from './newTodo.vue'
import todos  from './todos.vue'



export default {
  name: 'App',
  components :{
    SideBar,
    newTodo,
    todos
  }
}
</script>

<style>
</style>
