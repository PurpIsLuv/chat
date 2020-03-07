import io from 'socket.io-client'

export default {
    state:{
        message: '',
        data: [],
        socket: io('192.168.1.6:8081'),
        whoseLetter: '',
    },
    actions:{
        sendMessageInServer(ctx,data){
           ctx.commit("updateServerData",data)
        },
        listenServerData(ctx){
            ctx.commit("updateClientData")
        },
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
                if (data.user == localStorage.login){
                    state.whoseLetter = true
                }else{
                    state.whoseLetter = false
                }
                state.data.push({
                    message: data.message,
                    user: data.user,
                    whoseLetter: state.whoseLetter
                }) 
            })
        },
    },
    getters:{
        getDataMessage(state){
            return state.data
        }
    },
}