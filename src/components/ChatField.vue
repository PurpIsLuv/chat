<template>
    <div class="ChatField">

        ChatField
        
    </div>
</template>

<script>
/*import io from 'socket.io-client'
export default {
    data(){
        return{
            message: '',
            socket: io('localhost:8081'),
            messages: [],
        }
    },
    computed: {
        
    },
    methods:{
        sendMessage(message){
            this.socket.emit('SEND_MESSAGE',{
                user: this.user,
                message: message
            })
            message = ''
        }
    },
    mounted(){
        this.socket.on('MESSAGE',data=>{
            this.messages = [...this.messages,data]
        })
    }
}




<div class="messages" v-for="(msg,index) in messages" :key="index">
            <p><span>{{msg.user}}:{{msg.message}}</span></p>
        </div>

        <input type="text" v-model="message">
        <button type="submit" @click.prevent="sendMessage(message)">Отправить</button>







*/
</script>