export default {
    state :{
        menuList:[],
        
    },
    getters:{
        menu:state=>state.menuList,

    },
    mutations:{
        ADD_MENU_MEAL:(state,meal)=>{
           //const menuItem =  ...meal.recipe,{id : Date.now().toString()}}
           const menuItem={...meal}
           menuItem.id=Date.now().toString()
           state.menuList.push(menuItem)
        },

        DELETE_MENU_MEAL :(state,meal)=> {
            const index=state.menuList.findIndex(x=>x.id===meal.id)
            state.menuList.splice(index, 1)
        },

        CLEAR_MENU:(state)=>state.menuList=[]
    },
    actions:{
        // lägga till en meal i meny
 
        addMealToMenu: ({commit},meal)=> {console.log(`add meal to menu : ${meal.recipe.label}...`);commit('ADD_MENU_MEAL',meal);},
        // radera en meal från meny by id

        deleteMealFromMenu: ({commit},meal) =>{console.log(`delete meal from menu : ${meal.id}...`); commit('DELETE_MENU_MEAL',meal);},    

         //rensa hela meny
        clearMenu: ({commit})=>{ console.log('cleaning menu'); commit('CLEAR_MENU')},

         // lägga till random meal to menu
        addRandomMeal:({commit,getters})=>{
             const numberMeals=getters.meals.length;
             if (numberMeals>0) {
                 const randomIndex=Math.floor(Math.random() * numberMeals);
                 commit('ADD_MENU_MEAL',getters.meals[randomIndex])
             }
         }

    }  

}    

