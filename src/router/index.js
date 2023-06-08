// import { createRouter, createWebHistory } from 'vue-router'


// const router = createRouter({
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   // routes: [],
// })

// export default router

import {createRouter,createWebHashHistory} from 'vue-router'
import DefaultPage from '../components/DefaultPage.vue'
import GuestPage from '../components/GuestPage.vue'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealByName from '../views/MealByName.vue'
import MealByLetter from '../views/MealByLetter.vue'
import MealByIngredient from '../views/MealByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
    {
        //DefaultPage 和 其他子項目
        path: '/',
        name: 'DefaultPage',
        component: DefaultPage,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealByLetter
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealByIngredient
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetails
            },
        ]
        
    },
    //GuestPage
    {
        path:"/guest",
        component: GuestPage
    },
    

]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;