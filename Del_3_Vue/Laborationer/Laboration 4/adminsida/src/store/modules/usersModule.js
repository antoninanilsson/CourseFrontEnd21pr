export default {
    state : {
          user:{},
         
          users: [
            {
              id: "1",
              firstName: "Leanne",
              lastName: "Graham",
              username: "Bret",
              email: "Sincere@april.biz",
              password:"",
              phone: "1-770-736-8031 x56442",
              company: "Romaguera-Crona"
            },
            {
              id: "2",
              firstName: "Ervin",
              lastName:"Howell",
              username: "Antonette",
              email: "Shanna@melissa.tv",
              password:"",
              phone: "010-692-6593 x09125",
              company: "Deckow-Crist"        
            },
            {
              id: "3",
              firstName: "Clementine",
              lastName:"Bauch",
              username: "Samantha",
              email: "Nathan@yesenia.net",
              password:"",
              phone: "1-463-123-4447",
              company: "Romaguera-Jacobson"
               
            },
            {
              id: "4",
              firstName: "Patricia" ,
              lastName:"Lebsack",
              username: "Karianne",
              email: "Julianne.OConner@kory.org",
              password:"",
              phone: "493-170-9623 x156",
              company: "Robel-Corkery"
            },  
            {
              id: "5",
              firstName: "Chelsey",
              lastName: "Dietrich",
              username: "Kamren",
              email: "Lucio_Hettinger@annie.ca",      
              password:"",  
              phone: "(254)954-1289",      
              company: "Keebler LLC"          
            },
            {
              id: "6",
              firstName: "Dennis" ,
              lastName:"Schulist",
              username: "Leopoldo_Corkery",
              email: "Karley_Dach@jasper.info",  
              password:"",
              phone: "1-477-935-8478 x6430",        
              company: "Considine-Lockman"
       
            },
            {
              id: "7",
              firstName: "Kurtis",
              lastName:"Weissnat",
              username: "Elwyn.Skiles",
              email: "Telly.Hoeger@billy.biz",  
              password:"",
              phone: "210.067.6132",
              company: "Johns Group"
               
            },
            {
              id: "8",
              firstName: "Nicholas",
              lastName: "Runolfsdottir V",
              username: "Maxime_Nienow",
              email: "Sherwood@rosamond.me",
              password:"",
              phone: "586.493.6943 x140",
              company: "Abernathy Group"
               
            },
            {
              id: "9",
              firstName: "Glenna" ,
              lastName:"Reichert",
              username: "Delphine",
              email: "Chaim_McDermott@dana.io",
              password:"",
              phone: "(775)976-6794 x41206",
              company: "Yost and Sons"
             },
            {
              id: "10",
              firstName: "Clementina" ,
              lastName:"DuBuque",
              username: "Moriah.Stanton",
              email: "Rey.Padberg@karina.biz",
              password:"",
              phone: "024-648-3804",
              company: "Hoeger LLC"
              
            }
          ]

    },
    getters:{
      users: state => state.users,
      user: state=>state.user,
      
      
     
    },
    mutations :{

       SET_USER:   (state, user) => {
         state.user=user;         
            },         

       ADD_USER: (state,user)=>{
          user.id=Date.now().toString();
          state.users.push(user)
       },
       DELETE_USER: (state,id) => {
         const index=state.users.findIndex(x=>x.id===id)
         state.users.splice(index, 1)
       },

       UPDATE_USER:(state,user)=> {
         const index=state.users.findIndex(x=>x.id===user.id)
         state.users.splice(index, 1, user)
       },
       
              
    },
    actions: {
      postUser: ({commit,getters})=> {console.log(`add  user : ${getters.user.username}...`);commit('ADD_USER',getters.user);window.history.go(-1)},
  
      deleteUserById: ({commit},id) =>{console.log(`delete user : ${id}...`); commit('DELETE_USER',id);},

      putUser: ({commit,getters})=>{console.log(`update user :  ${getters.user.id}... `);commit('UPDATE_USER',{...getters.user});window.history.go(-1);},

      getUserById:({commit,getters},id)=>{console.log(`getting user with id: ${id}...`);const index=getters.users.findIndex(x=>x.id===id);commit('SET_USER',{...getters.users[index]})},   

      createEmptyUser:({commit})=>{console.log(`create empty user...`);const user = {id: 0,firstName: "" ,lastName:"",username: "",email: "",password:"",phone: "",company: ""};commit('SET_USER',user)},
 
      clearUser:({commit})=>{console.log('clear user...');commit('SET_USER',{})}
    }    
}