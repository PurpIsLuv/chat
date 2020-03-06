import io from 'socket.io-client'

export default {
    state:{
        socket: io('localhost:8081'),
        message: '',
        data: []
    },
    actions:{
        sendMessageInServer(ctx,data){
           ctx.commit("updateServerData",data)
        },
        listenServerData(ctx){
            ctx.commit("updateClientData")
        }
    },
    mutations:{
        updateServerData(state,data){
            state.socket.emit('SEND_MESSAGE',{
                user: data.login,
                message: data.message
            })     
        }, 
        updateClientData(state){
            state.socket.on('MESSAGE',data=>{
                state.data.push({
                    message: data.message,
                    user: data.user
                })     
            })
        }
    },
    getters:{
        getDataMessage(state){
            return state.data
        }
    },
}