<template>
  <a class=" w:[300px] p-3 border-spacing-3 tracking-wider  
    text-white bg-[#EE3E3E] hover:bg-[#ff5151]  
    transition ease-linear delay-100 rounded-xl" 
    :href="href" 
    target="_blank">
    Youtube
  </a>
</template>  

<script setup>
  const props = defineProps({
    href: String
  })
</script>
 



