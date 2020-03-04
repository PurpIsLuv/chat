import axios from 'axios'
import router from '../router'


export default {
    state: {
        login: '',
        email: '',
        password: '',
        secondPassword: '',
    },
    actions: {
        async postRequestSignIn(ctx,{email,password}){           
            const res = await axios.post(`http://localhost:8081/${email}/${password}`)
            if (res.status==200){
                ctx.commit("updateData",res.data)
                router.push("/MainPage/" + res.data.login)
            }else if (res.status==202){
                alert(res.data)
            }else if (res.status==204){
                alert(res.data)
            }  
        },
        async postRequestSignUp(ctx,{login,email,password}){
            const res = await axios.post(`http://localhost:8081/SignUp/${login}/${email}/${password}`)
            if(res.status == 201){
                ctx.commit("updateData",res.data)
                router.push("/MainPage/" + login)
            }else if (res.status==203){
                alert(res.data)
            }
        },
    },
    mutations: {
        updateData(state,res){
            state.login = res.login
            state.password = ''
            state.secondPassword = ''
        }
    },
    getters:{
        getData(state){
            return state
        }
    },
}