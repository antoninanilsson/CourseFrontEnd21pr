import axios from 'axios'

export default {
    state :{
        mealList:[
               {recipe : {
                uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_bbfc1a248bd6fe277e35fe01027de91f",
                label: "Naomi Duguid's Fried Noodles",
                image: "https://www.edamam.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg",
                source: "Serious Eats",
                url: "http://www.seriouseats.com/recipes/2012/10/naomi-duguids-fried-noodles.html",
                yield: 2,
                totalTime: 20,
                calories: 196.30800000000002,
                ingredientLines: [
                    "1 cup dried egg noodles",
                    "Peanut oil, for frying"
                  ],
                mealType: [
                    "lunch/dinner"
                  ]
               
                }
            },
            {
                recipe: {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3d45f44e2e398b038c1113b0fd9a484c",
                    label: "Seven-Yolk Pasta Dough",
                    image: "https://www.edamam.com/web-img/470/470026e882df183a9634545759d4a8ba.jpg",
                    source: "Smitten Kitchen",
                    url: "http://smittenkitchen.com/2008/02/seven-yolk-pasta-dough/",
                    yield: 6,
                    calories: 1294.2981134000004,
                    totalTime: 0,
                    ingredientLines: [
                        "1 3/4 cups (8 ounces) all-purpose flour",
                        "6 large egg yolks",
                        "1 large egg",
                        "1 1/2 teaspoons olive oil",
                        "1 tablespoon milk"
                      ],
                      mealType: [
                        "lunch/dinner"
                      ]
                    }
            },
            {
                recipe: {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3d45f44e2e398b038c1113b0fd9a484d",
                    label: "Seven-Yolk Pasta Dough 2",
                    image: "https://www.edamam.com/web-img/470/470026e882df183a9634545759d4a8ba.jpg",
                    source: "Smitten Kitchen",
                    url: "http://smittenkitchen.com/2008/02/seven-yolk-pasta-dough/",
                    yield: 6,
                    calories: 1294.2981134000004,
                    totalTime: 0,
                    ingredientLines: [
                        "1 3/4 cups (8 ounces) all-purpose flour",
                        "6 large egg yolks",
                        "1 large egg",
                        "1 1/2 teaspoons olive oil",
                        "1 tablespoon milk"
                      ],
                      mealType: [
                        "lunch/dinner"
                      ]
                    }
            }


        ],
        errorMeals:undefined,
        loadingMeals:false

        
    },
    getters:{
        meals:state=>state.mealList,
        errorMeals: state => state.errorMeals,
        loadingMeals: state => state.loadingMeals
        

    },
    mutations:{
        GET_MEALS:(state)=>{
          state.loadingMeals=true
        },       

        CLEAR_MEALS:(state)=>{
          state.mealList=[]
        },

        GET_MEALS_SUCCESS : (state,meals)=> {
          state.mealList=meals,
          state.loadingMeals=false
          state.errorMeals=''

        },

        GET_MEALS_FAILURE : (state, error)=>{
          state.loadingMeals=false,
          state.errorMeals=error
        },
        

        DELETE_MEAL: (state,meal) => {
            const index=state.mealList.findIndex(x=>x.recipe.uri===meal.recipe.uri)
            state.mealList.splice(index, 1)
          }
        
    },

    actions:{
        // få en eller några maträtter från db to array (listan)

        // query:'',
        // mealType:'',
        // health:[],
        // number:10
        getMeals: async ({getters},searchParams)=>{

            console.log(searchParams)


            const options = {
                method: 'GET',
                url : getters.apiUrl,
                params: {
                  q: searchParams.query,
                  app_id:getters.appId ,
                  app_key:getters.appKey,
                  from:0,
                  to:searchParams.number,
                  mealType:searchParams.mealType,
                 
                                   
                  
                },
              
              };


              console.log(options)
            //  try {
            //     const result= await axios.request(options)
            //     if (result.status===200) {
            //         console.log(result.data);
                    
            //     }
            //  } 
            //  catch (error) {
            //      console.log(error)
            //  }
          
            },
            // radera Maträtt från arrayen (listan)
           deleteMealFromList: ({commit},meal) =>{
             console.log(`delete meal : ${meal.recipe.label}...`);
             commit('DELETE_MEAL',meal);},

          //rensa Maträtt objekt
          clearMealList:  ({commit})=>{ console.log('cleaning meals'); commit('CLEAR_MEAL')}

        }

        
    }


