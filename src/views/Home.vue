<template>
  <!-- home 的 main -->
   <div class=" h-full bg-[#F0F9F9] ">
    <!-- bg-[#F0F9F9] -->
    <!-- 照片 -->
    <div class=" flex flex-col">
      <img class=" w-full mt-20 md:h-[450px] sm:h-[250px]" src="../img/home-hero.jpeg">
      <p class=" text-slate-500 px-5">Image: Simply Recipes / Katie Smith</p>
    </div>
    <!--主標題 -->
    <div class=" w-full text-center">
      <p class="font-bold text-orange-700">Recipes Talk</p>
      <p class=" text-3xl font-serif">Come On Over <span class="font-mono">即興晚宴的簡單食譜指南</span> </p>
      <p>At Simply Recipes we don't strive for perfection, we are going for togetherness.</p>
      <img class=" inline-block" src="../img/Lauren-Clark.png">
    </div>
    <!---------- info 和 跳轉區塊 ---------->
    <div class=" w-[90%] m-auto mt-10 p-4 grid md:grid-cols-2 sm:grid-cols-1 items-center">
      <!-- info區塊  -->
      <div class="md:w-[600px] sm:w-[400px] m-auto ">
        <img class=" w-[500px]" src="../img/info.jpeg">
        <h1 class="text-4xl font-serif mt-2">Simply Recipes Will Always Be a Resource for Home Cooks </h1>
        <h2 class="text-xl mt-2">❝ 簡單食譜永遠是家庭廚師們最佳的支援 ❞</h2>
        <p class=" text-sm mt-2 mb-4 leading-loose">多年來，您的評論和問題教育了我們，啟發了我們，也讓我們開懷大笑。 
          <br>
          我當時和現在一樣覺得，通過與我們的讀者互動，我們與大眾的經驗和才華聯繫在一起。 
          <br>
          因此，感謝您的才華並繼續加入我們的旅程。
        </p>
      </div>
      <!-- info-2 跳轉區塊  -->
      <div class=" info-2 md:w-[500px] sm:w-[300px] m-auto grid content-center">
        <div class="  text-4xl m-auto w-[25rem] h-60 bg-white bg-opacity-60 border-4 border-[#FFD977] p-3 relative ">
          <h1 class=" font-serif p-4 ">Simply Recipes: <p class=" font-mono m-2">一起來做個簡單又好吃的晚餐吧！</p> </h1>
            <div class=" absolute bottom-5 right-5 ">
              <router-link 
              :to="{ name: 'byName' }" 
              class="text-2xl underline decoration-wavy transition ease delay-50 hover:text-white " >Click out >>> </router-link>
            </div>
        </div>
      </div>
      
    </div>
    
    <!---------- 隨機菜單 ---------->
    <div class=" w-full bg-[#fee0d2] mt-10">
        <!-- Title -->
        <h1 class="font-serif text-5xl text-center tracking-wide p-4">Daily Meal
          <br>
          <p class=" text-3xl mt-2 font-mono">我們的每日推薦</p>
        </h1>  
        <!-- Main -->
        <div class=" grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-5">
          <!-- 每日10筆食譜 -->
          <Meals :meals="meals"/>
          
        </div>
    </div>

      <!-- 新聞組件 -->
      <News/>
      <!-- 蛋糕組件 -->
      <Cake/>      
      <!-- 團隊組件 -->
      <Team/>
      <!-- 團隊組件 -->
      <Footer></Footer>
  </div>

  
</template>

<script setup>

import { computed , onMounted, ref} from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';
import Meals from '../components/Meals.vue';
import News from '../components/News.vue'
import Cake from '../components/Cake.vue';
import Team from '../components/Team.vue';
import Footer from '../components/Footer.vue';

import MealListVue from './MealList.vue';
import NewsVue from '../components/News.vue';

// const meals = computed(() => store.state.meals )
//const meals = computed(() =>store.state.default.meals);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const meals = ref([])

// onMounted( async () => {
//   const res = await axiosClient.get('list.php?i=list')
  
//   ingredients.value = res.data; //不可以少value
// })
onMounted(async() => {
  // axiosClient.get("random.php")
  // .then(({data})=>{
    
  //   meal.value = data.meals
  // })
    for(let i=0;i<10;i++){
      axiosClient(`random.php`)
      .then(({data})=>{
        meals.value.push(data.meals[0]);
      })
    }


})

</script>
<style scope>
  .info-2{
    background-image: url("../img/info-2.jpeg");
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
</style>