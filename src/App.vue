<template>
  <div id="app">
    <side-bar/>
    <new-todo/>
    <todos/>

  </div>
</template>

<script>


import SideBar  from './components/weeks.vue'
import newTodo  from './components/newTodo.vue'
import todos  from './components/todos.vue'



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
