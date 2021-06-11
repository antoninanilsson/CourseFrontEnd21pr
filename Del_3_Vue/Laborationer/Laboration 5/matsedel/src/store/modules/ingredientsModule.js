export default {
    state :{
        ingredientsList:[],
        
    },
    getters:{
        ingredientsDetails:state=>state.ingredientsList,
        ingredientsByCategory:state=>{
            if(state.ingredientsList!==undefined && state.ingredientsList.length>0)
               return state.ingredientsList.sort((a,b)=> a.foodCategory.localeCompare(b.foodCategory))
            else
                return []   
            }

    },

    mutations:{
        ADD_INGREDIENT:(state,ingredients)=>{
            ingredients.map(ingredient=>{
                if(ingredient.foodCategory === undefined || ingredient.foodCategory===null)
                  ingredient.foodCategory =''
            })
            state.ingredientsList=[...state.ingredientsList, ...ingredients]
        },

        CLEAR_INGREDIENTS:state=>{
            state.ingredientsList=[]
        }
        
    },
    actions :{
        getIngredients:({commit,getters})=>{
            commit('CLEAR_INGREDIENTS');
            getters.menu.map((meal)=>{
                
              commit('ADD_INGREDIENT',meal.recipe.ingredients)
            });
  
        },
        clearIngredients:({commit})=> {
            commit('CLEAR_INGREDIENTS');
        }

    }
}  