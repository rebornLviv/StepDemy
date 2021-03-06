import * as fb from 'firebase'
import courses from './courses'


class User {
    constructor(id){

        this.id=id
    }
}

export default{

state:{

    user:null
},
mutations:{
setUser(state,payload){
    state.user=payload
}


},
actions:{
async registerUser({commit},{email,password}){
    commit('clearError')
    commit('setLoading',true)
try{
const user = await fb.auth().createUserWithEmailAndPassword(email,password)
commit('setUser', new User (user.uid))
commit('setLoading',false)
}catch(error){
    commit('setLoading',false)
    commit('setError',error.message)
    throw error

}

},
async loginUser({commit},{email,password}){
    commit('clearError')
    commit('setLoading',true)
try{
const user = await fb.auth().signInWithEmailAndPassword(email,password)
commit('setUser', new User (user.uid))
commit('setLoading',false)
}catch(error){
    commit('setLoading',false)
    commit('setError',error.message)
    throw error

}

},
autoLoginUser({commit},payload){
commit('setUser',new User(payload.uid))
},
logoutUser({commit}){
    fb.auth().signOut()
    commit('setUser',null)
},
recoverUser({commit},email){
    console.log('wwww')
    commit('clearError')
    commit('setLoading',true)

fb.auth().sendPasswordResetEmail(email)
.then(()=>{

    commit('setLoading',false)
})
.catch((error)=>{
    commit('setLoading',false)
    commit('setError',error.message)
})
    
    
},
addCourse(payload){
let id=null;

    fb.firestore().collection('User').where('email','==',fb.auth().currentUser.email).get()
    .then(
       doc=>{
        
           doc.forEach(
               el=>{

                 id=el.id
                   console.log("this users data",el.data())
                   console.log(id)
                
                   el.data().courses.forEach(
                       e=>{
                           
                            console.log("this users eeee",e)

                       }
                   )
               }
           )

           fb.firestore().collection('User').doc(id).update({
            
            courses: fb.firestore.FieldValue.arrayUnion({
    cname:payload.getters.getTitle,
    cprogress:0,
    currentlesson:1,
    lprogress:0          
    
            })
    
           })
        
            }
    )
       .catch(
           e=>{
               console.log("errrrror",e)
           }
       )

       
/*fb.firestore().collection('User').doc(id).update({

courses:courses.push(course)

})*/

},
saveProgress(){




},




},
getters:{

    user(state){
return state.user
    },
    isUserLoggedIn(state){

        return state.user!=null
    }
}


}