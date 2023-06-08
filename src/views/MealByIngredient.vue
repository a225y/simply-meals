<template>
    
     <Meals :meals="meals"/> 
    
    <!-- <div class=" grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals" 
    class=" flex justify-center text-4xl">
        搜尋不到相關食譜！！    
    </div>  -->
   
</template>

<script setup>
import { ref, onMounted , computed } from 'vue'
import { useRoute } from 'vue-router';
import store from "../store";
//import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue'

const route = useRoute()

const meals = computed({
    get() {
        return store.state.mealsByIngredients
    }
})

onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})



</script>
