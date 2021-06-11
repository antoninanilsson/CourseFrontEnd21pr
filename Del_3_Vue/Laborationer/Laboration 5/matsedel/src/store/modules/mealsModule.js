import axios from 'axios'

export default {
    state :{
        mealList_test:[
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
                  ],
                  "ingredients": [
                    {
                        "text": "1 cup dried egg noodles",
                        "weight": 38.0,
                        "foodCategory": "grains",
                        "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
                        "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
                    },
                    {
                        "text": "Peanut oil, for frying",
                        "weight": 0.5167999999999999,
                        "foodCategory": "Oils",
                        "foodId": "food_ackj525b2vo905bisrwjabfanm5t",
                        "image": "https://www.edamam.com/food-img/827/82725f6b015e75a059ba2569c768eb68.jpg"
                    }
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
                      ],
                      "ingredients": [
                        {
                            "text": "1 3/4 cups (8 ounces) all-purpose flour",
                            "weight": 226.796185,
                            "foodCategory":null,
                            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                        },
                        {
                            "text": "6 large egg yolks",
                            "weight": 102.0,
                             "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                            "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                        },
                        {
                            "text": "1 large egg",
                            "weight": 50.0,
                            "foodCategory": "Eggs",
                            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                        },
                        {
                            "text": "1 1/2 teaspoons olive oil",
                            "weight": 6.75,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": null
                        },
                        {
                            "text": "1 tablespoon milk",
                            "weight": 15.0,
                            "foodCategory": "Milk",
                            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                        }
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
                      ],
                      "ingredients": [
                        {
                            "text": "few handfuls thin-skinned new potatoes (I like to mix up the colors a bit - red, purple Peruvians, yellow Finns)",
                            "weight": 18.75,
                            "foodCategory": "vegetables",
                            "foodId": "food_b5m473aabh39qbbre3ypaa4uwd7j",
                            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                        },
                        {
                            "text": "3 cups kosher salt",
                            "weight": 699.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                        },
                        {
                            "text": "6 x whole plump cloves of garlic (peeled)",
                            "weight": 18.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                        },
                        {
                            "text": "3 x organic egg whites",
                            "weight": 79.19999999999999,
                            "foodCategory": "Eggs",
                            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
                            "image": null
                        }
                    ]
                    }
            }


        ],
        mealList:[] ,
        errorMeals:'',
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
        GET_MEALS_TEST : (state)=>  state.mealList=state.mealList_test    , 

    

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
        // få  några maträtter från db to array (listan)
              
        getMeals: async ({getters,commit})=>{
            // den här kommenterat bort för att det är att köra på test data
            //*********************************** */
            // commit('GET_MEALS_TEST')
            // return
            //*********************************** */
            commit('CLEAR_MEALS')
            commit('GET_MEALS')
            // query:'',
            // mealType:'',
            // dishType:'',
            // cuisineType:'',
            // health:[]
            
            
            let url=`${getters.apiUrl}?type=public&app_id=${getters.apiId}&app_key=${getters.apiKey}&field=uri&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=ingredients&field=calories&field=totalTime`
            
            
           
            if (getters.searchParams.query!=='')
               url=url+`&q=${encodeURIComponent(getters.searchParams.query.trim())}`

            if (getters.searchParams.mealType!=='')
               url=url+`&mealType=${encodeURIComponent(getters.searchParams.mealType)}`

            if (getters.searchParams.dishType!=='')
               url=url+`&dishType=${encodeURIComponent(getters.searchParams.dishType)}` 
               
            if (getters.searchParams.cuisineType!=='')
              url=url+`&cuisineType=${encodeURIComponent(getters.searchParams.cuisineType)}` 

            if (getters.searchParams.health.length>0)
               getters.searchParams.health.map(item=>{url=url+`&health=${encodeURIComponent(item)}`})

            const options = {
                method: 'GET',
                url
                            
            };

            try {
                 const result= await axios.request(options)
                 if (result.status===200) {
                     //console.log(result.data);
                     commit('GET_MEALS_SUCCESS',result.data.hits)
                    
                 } else {
                  commit('GET_MEALS_FAILURE',error.message)
                 }
            } 
            catch (error) {
                 commit('GET_MEALS_FAILURE',error.message)

            }
          

            },

            // radera Maträtt från arrayen (listan)
           deleteMealFromList: ({commit},meal) =>{
             console.log(`delete meal : ${meal.recipe.label}...`);
             commit('DELETE_MEAL',meal);},

          //rensa Maträtt objekt
          clearMealList:  ({commit})=>{ console.log('cleaning meals'); commit('CLEAR_MEAL')}

         

        }

        
    }


