<template>
  <div class="h-full">
    <navbar/>
  </div>
  <main>
      <router-view></router-view>    
  </main>
</template> 

<script setup>
  import Navbar from '../components/Navbar.vue';
 
</script>


