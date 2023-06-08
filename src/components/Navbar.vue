<template>
  <header class=" h-20 w-full bg-white flex justify-between items-stretch fixed z-10">
    <router-link :to="{ name: 'home' }" class=" inline-flex items-center px-5" >
      <div class="p-3">
        <img class=" w-40" src="../img/logo.png"> 
      </div>
    </router-link>
    <div class=" flex items-center gap-1 mr-8">
        <router-link :to="{ name: 'byName' }" class=" inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"> 找點子 </router-link>
        <router-link :to="{ name: 'byLetter' }" class=" inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"> 字母搜索 </router-link>
        <router-link :to="{ name: 'ingredients' }" class=" inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"> 食譜分類 </router-link> 
    </div>
            
  </header>
</template> 

<script setup>

</script>
 
<style scope>
  header{
    border-bottom: 1px solid #FFD977;
  }
</style>

 



