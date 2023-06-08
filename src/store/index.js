import { createStore } from "vuex";

// import * as state from "./state";
// import * as actions from "./actions";
// import * as mutations from "./mutations";
// import * as getters from "./getters";

import axiosClient from "../axiosClient";
// import { data } from "autoprefixer";
const actions = {
    searchMeals({ commit },keyword){
            axiosClient.get(`search.php?s=${keyword.value}`)
                .then(({ data }) => {
                commit('SEARCHMEALS', data.meals)      
            })
    },
    searchMealsByLetter({ commit }, letter) {
        axiosClient.get(`search.php?f=${letter}`)
            .then(({ data }) => {
                commit('SETLETTER', data.meals)
            })
    },
    searchMealsByIngredients({ commit }, ingredient){
       
        axiosClient.get(`filter.php?i=${ingredient}`)
            .then(({data}) =>{
                commit('SETINGREDIENT',data.meals)
            })
    }

}
const mutations = {
    SEARCHMEALS(state,keyword){
        state.searchedMeals = keyword || []
        //console.log("mutations被調用了", state, keyword );
    },
    SETLETTER(state, meals) {
        state.mealsByLetter = meals || []
        
    },
    SETINGREDIENT(state, meals) {
        state.mealsByIngredients = meals || []
        //console.log("mutations被調用了", state, meals );
    },
    TOINGREDIENT(state, ingredient){
        state.ingredient = ingredient
    }

}
const state = {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    ingredient:{}
}


const store = createStore({
    state,
    actions,
    mutations,
    //getters
})

export default store;