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
           console.log(menuItem)
           state.menuList.push(menuItem)
        },

        DELETE_MENU_MEAL :(state,id)=> {
            const index=state.menuList.findIndex(x=>x.id===id)
            state.menuList.splice(index, 1)
        },

        CLEAR_MENU:(state,meal)=>state.menuList=[]
    },
    actions:{
        // lägga till en meal i meny
 
        addMealToMenu: ({commit},meal)=> {console.log(`add meal to menu : ${meal.recipe.label}...`);commit('ADD_MENU_MEAL',meal);},
        // radera en meal från meny by id

        deleteMealFromMenu: ({commit},meal) =>{console.log(`delete meal from menu : ${id}...`); commit('DELETE_MENU_MEAL',id);},    

         //rensa hela meny
        clearMenu: ({commit})=>{ console.log('cleaning menu'); commit('CLEAR_MENU', {})}

    }  

}    

