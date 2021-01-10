<template>
  <div id="app">
    <div v-if="1" >
    <side-bar/>
    </div>
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
