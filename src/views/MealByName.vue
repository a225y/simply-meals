<template>
    <div class=" flex flex-col p-8">
        <input type="text" class=" mt-20 px-3 rounded border-2 h-10 w-full " 
        placeholder="搜尋關鍵字(英文) ex: apple"
        v-model= "keyword"
        @change="searchMeals"
        >
    </div>

     <Meals :meals="meals"/>
    <div class="mt-20 bottom-0">
     <Footer/>    
    </div>
    
    <!--  <div class=" grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       
       <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/> -->


        <!-- <div v-for="meal in meals" :key="meal.idMeal" class=" bg-white shadow rounded-xl" >
            
            <router-link :to="{name: 'mealDetails' , params:{id:meal.idMeal} }">
                <img :src="meal.strMealThumb" 
                class=" rounded-t-xl h-48 w-full object-cover ">
            </router-link>
    
            <div class=" p-3">
                <h2 class=" font-bold ">{{ meal.strMeal }}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni animi et incidunt, doloremque rem vel 
                    obcaecati dignissimos inventore blanditiis eum. 
                    Vel eaque itaque obcaecati quisquam ullam corrupti sequi odio?
                </p>
                <div class=" mt-3 mb-3 ">
                    <YouTubeButton :href="meal.strYoutube"/>
                </div>    
            </div>
           
        </div> 
    </div> -->
    
    
    
</template>
<script setup>
    import { ref, computed } from 'vue'
    import store from '../store';
    import Meals from '../components/Meals.vue';
    import Footer from '../components/Footer.vue';
    // import MealItem from '../components/MealItem.vue';
    import YouTubeButton from '../components/YouTubeButton.vue';
    //import MealItemVue from '../components/MealItem.vue';

    const keyword = ref('');

    //const meals = computed(()=>{ store.state.searchedMeals });
    const meals = computed({
        get(){
            return store.state.searchedMeals 
        }
    })    

    function searchMeals(){
        //store.dispatch('searchMeals', keyword.value);
        store.dispatch('searchMeals',keyword)
    }
    


</script>