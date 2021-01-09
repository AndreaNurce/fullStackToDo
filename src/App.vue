<template>
  <div id="app">
    <side-bar/>
    <new-todo/>
  </div>
</template>

<script>


import SideBar  from './components/weeks.vue'
import newTodo  from './components/newTodo.vue'


export default {
  name: 'App',
  components :{
    SideBar,
    newTodo
  }
}
</script>

<style>
</style>
