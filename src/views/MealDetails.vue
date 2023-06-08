<template>
    <div class=" max-w-3xl mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5 mt-20">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" w-[100%]">

        <div class="my-3 p-2">
             {{ meal.strInstructions }}
        </div>

        <div class=" grid grid-cols-1 sm:grid-cols-3 py-2 ">
            <div>
               <strong class=" font-bold">葷 / 素：</strong> {{ meal.strCategory }}
            </div>
            <div>
               <strong class=" font-bold">菜 系：</strong>  {{ meal.strArea }}
            </div>
            <div>
               <strong class=" font-bold">種 類：</strong>  {{ meal.strTags }}
            </div>

        </div>
        
        <div class=" grid grid-cols-2 sm:grid-cols-2 bg-yellow-300 rounded-md">
            <div>
                <h2 class=" p-2 text-2xl font-semibold mb-3">所需食材：</h2>
                <ul class=" p-2">
                    <template v-for="(el, index) in new Array(20)">
                        <li v-if="meal[`strIngredient${index+1}`]" :key="index">
                        {{ index+1 }}.    {{ meal[`strIngredient${index+1}`] }}
                        </li>
                    </template>
                </ul>

                
            </div>
            
            <div>
                <h2 class=" p-2 text-2xl font-semibold mb-3">比例</h2>
                <ul class=" p-2">
                    <template v-for="(el, index) in new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]" :key="index">
                        {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>

        <div class=" mt-5">
            <YouTubeButton :href="meal.strYoutube"/>
        </div>

    </div>

</template>

<script setup>
import { ref , onMounted } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';


const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data})=>{
        meal.value = data.meals[0] || {} 
    })
})


</script>