<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view/> 
    </transition>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.fade-enter{
   opacity: 0;
  }
    .fade-enter-active {
      transition  : opacity .3s ;
    }
    .fade-leave-active {
      opacity: 0 ;
      transition : opacity .3s;
    }
</style>
