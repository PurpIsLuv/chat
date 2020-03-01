export default {
    state: {
        login: '',
        email: '',
        password: '',
        secondPassword: ''
    },
    actions: {
        postRequestSignIn(ctx,{email,password}){
            console.log("updateData"+ email + password)
            ctx.commit("updateData",{email,password})
        },
        postRequestSignUp(ctx,{login,email,password}){
            console.log("updateData"+ login + email + password)
            ctx.commit("updateData",{login,email,password})
        },
    },
    mutations: {
        updateData(state,{email,password}){
            state.email = email
            state.password = password
        }
    },
    getters:{
        getData(state){
            return state
        }
    },
}