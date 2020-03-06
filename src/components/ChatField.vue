<template>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <div class="ChatField d-flex flex-column align-items-center">
                    <div class="ChatField-input d-flex">
                        <div class="ChatField-input__text">
                            <input type="text" v-model="getData.message" class="form-control">
                        </div>
                        <div class="ChatField-input__submit">
                            <button type="submit" @click.prevent="sendMessage(getData.message)" class="btn btn-success">Отправить</button>
                        </div>
                    </div>
                    <div class="ChatField-messages">
                        <div class="ChatField-messages-message" v-for="(data,index) in getDataMessage" :key="index">
                            <div class="ChatField-messages-message__user">
                                {{data.user}}
                            </div>
                            <div class="ChatField-messages-message__text">
                                {{data.message}}
                            </div>                        
                        </div>
                    </div>
                </div>
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
    },
    beforeCreate(){
        if (localStorage.login){
            this.$store.state.Sign.login = localStorage.login
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

    .ChatField{
        width: 700px;
        height: 200px;
        background-color: $purple;
        border-radius: 10px;
        .ChatField-input{
            box-shadow: 0px 0px 5px 0px rgba($color: #000000, $alpha: 1.0);
            width: 500px;
            margin: 10px 0px;
            .ChatField-input__text{
                width: 400px;
            }
        }
        .ChatField-messages{
            .ChatField-messages-message{
                margin: 10px 0px;
                .ChatField-messages-message__text{
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 10px;
                }
                .ChatField-messages-message__user{
                    color: #fff;
                }
            }
        }
    }
</style>