<template>
    <div class=" p-8">   
        <!-- <input type="text" class=" mt-20 px-3 rounded border-2 h-10 w-full " 
            placeholder="搜尋關鍵字(英文)"
            v-model= "keyword"   
        > -->
        <div class=" mt-20 grid grid-cols-1 md:grid-cols-3 gap-3">
            
            <a href="#" 
                v-for="ingredient in ingredients"
                        :key="ingredient.idIngredient"
                @click.prevent="openIngredient(ingredient)"
                class=" block bg-white rounded p-3 mb-3 shadow"
            > 
               <h1 class=" text-2xl font-bold">{{ ingredient.strIngredient }}</h1>
            </a>   
        </div>
        

       
        <!-- <router-link 
        :to="{name:'byIngredient',
        params: { ingredient: item.strIngredient }}"
        v-for="item in ingredients" :key="item.strIngredient"

        class=" block mb-3 p-4 bg-red-300 rounded shadow">
            <h1 class=" text-2xl font-bold">{{ item.strIngredient }}</h1>
            <p> {{ item.strDescription }}</p>
        </router-link> -->
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
import store from '../store';


const router = useRouter();
const keyword = ref(" ");
const ingredients = ref([]);

const computedIngredients = computed(()=>{
    if (!computedIngredients) return ingredients
    return ingredients.value.filter((i)=>{
       i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    })
    
})


function openIngredient(ingredient){
    store.commit('TOINGREDIENT', ingredient)
    router.push({
            name: "byIngredient",
            params: { ingredient: ingredient.strIngredient },
        });
    
}

onMounted(() => {
    axiosClient.get("list.php?i=list")
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})


</script>
