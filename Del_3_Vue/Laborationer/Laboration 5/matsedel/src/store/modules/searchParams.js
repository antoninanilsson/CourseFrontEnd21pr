export default {
    state :{
        searchParams: null,
        // dishType, mealType, cuisineType sen kan hämtas från API (vid uppgradering av användarplan)
        mealType:["Breakfast","Lunch","Dinner","Snack","Teatime"],
        dishType:["Biscuits and cookies","Bread",
                  "Cereals","Condiments and sauces",
                  "Drinks","Desserts",
                  "Egg",
                  "Main course",
                  "Omelet",
                  "Pancake","Preps", "Preserve",
                  "Salad", "Sandwiches","Soup","Starter"
        ],

    
        cuisineType:[
            "American", "Asian",
            "British",
            "Caribbean","Central Europe","Chinese",
            "Eastern Europe","French",
            "Indian","Italian","Japanese",
            "Kosher","Mediterranean","Mexican","Middle Eastern",
            "Nordic","Nordic","South East Asian"
        ]
        
    },
    getters:{
        searchParams:state=>state.searchParams,
        dishType:state=>state.dishType,
        cuisineType:state=>state.cuisineType,
        mealType:state=>state.mealType


    },
    mutations : {
        INIT_SEARCH_PARAMS:(state)=>state.searchParams={
            query:'',
            mealType:'',
            dishType:'',
            cuisineType:'',
            health:[]
            
            },
        SAVE_SEARCH_PARAMS :(state,params)=>state.searchParams ={...params}  

    },
    
    actions :{
        initSearchParams: ({commit})=>{ commit('INIT_SEARCH_PARAMS')},

        // spara till lokal storage
        saveSearchParams:({commit},params)=>{commit('SAVE_SEARCH_PARAMS',params)},

        // init eller läsa från lokal storage
        getSearchParams:({commit,getters})=>{           
            if (getters.searchParams==null)
               commit('INIT_SEARCH_PARAMS');        
        }
        
    }


}
