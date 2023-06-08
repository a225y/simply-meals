// export function setSearchedMeals(state , meals) {
//     state.searchedMeals = meals
// }
export function SEARCHMEALS(state, keyword) {
    //state.searchedMeals = keyword;
    state.default.sum = keyword;
    
    console.log("mutations被調用了", state, keyword);
}