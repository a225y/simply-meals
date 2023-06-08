
<template>
  <div class=" grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-if="!meals.length" 
    class=" flex justify-center text-4xl">
      可搜尋相關食譜    
  </div>
</template>  
<script setup>
import MealItem from './MealItem.vue';


  const { meals } = defineProps({
    meals:Array
  })
</script>
 



