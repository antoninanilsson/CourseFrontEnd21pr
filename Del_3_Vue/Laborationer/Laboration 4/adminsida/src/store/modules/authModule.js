import router from '@/router'
export default {
    state: {
        adminUser:{
            email:"mail@mail.com",
            password:"BytMig123",
            loggedIn:false
            
          },
      
    },

    getters: {
        
        adminUser:state=>state.adminUser   
    },

    mutations: {
        
        SET_SIGNEDIN: (state,status) =>state.adminUser.loggedIn=status
    },

    actions: {

        signIn: ({commit, getters},user) => {
            
             if (user.email.trim()===getters.adminUser.email.trim() && user.password.trim()===getters.adminUser.password.trim()) {
                 commit('SET_SIGNEDIN',true);
                 router.replace({path:'/users'})
             }else {
                 console.log('user not found')
             }
       
        },

        signOut: ({commit}) => {
                commit('SET_SIGNEDIN',false);
                router.replace({path:'/auth/signin'})
                
            }
            
            
        }
    }



