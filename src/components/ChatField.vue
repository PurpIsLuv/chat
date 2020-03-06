<template>
    <div class="ChatField">

        ChatField
        {{getData}}
        <input type="text" v-model="getData.message">
        <button type="submit" @click.prevent="sendMessage(getData.message)">Отправить</button>

        <div class="messages" v-for="(data,index) in getDataMessage" :key="index">
            <p>{{data.message}}</p>
        </div>

    </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters(['getData','getDataMessage']),
    },
    methods:{
        ...mapActions(['sendMessageInServer','listenServerData']),
        sendMessage(message){            
            this.sendMessageInServer({
                message, 
                login: this.getData.login
            })
            this.getData.message = ''
        }
    },
    created(){
        this.listenServerData()
    }
}
</script>