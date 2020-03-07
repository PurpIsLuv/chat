<template>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <div class="ChatField d-flex flex-column align-items-center col-lg-6 col-sm-10">
                    <div class="ChatField-input d-flex">
                        <div class="ChatField-input__text">
                            <input type="text" v-model="getData.message" class="form-control">
                        </div>
                        <div class="ChatField-input__submit">
                            <button type="submit" @click.prevent="sendMessage(getData.message)" class="btn btn-success">Отправить</button>
                        </div>
                    </div>             
                    <div class="ChatField-messages messageRight" v-for="(data,index) in getDataMessage" :key="index" :class="{messageLeft : data.whoseLetter}">
                        <div class="ChatField-messages-message d-flex align-items-center justify-content-around">
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
        ...mapActions(['sendMessageInServer','listenServerData','connectToServer']),
        sendMessage(message){            
            this.sendMessageInServer({
                message, 
                login: this.getData.login
            })
            this.getData.message = ''
            console.log(this.getDataMessage)
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
        height: 80vh;
        background-color: $purple;
        border-radius: 10px;
        .ChatField-input{
            box-shadow: 0px 0px 5px 0px rgba($color: #000000, $alpha: 1.0);
            margin: 10px 0px;
        }
        .ChatField-messages{
            padding: 0 20px;
            .ChatField-messages-message{
                margin: 10px 0px;
                .ChatField-messages-message__text{
                    border-radius: 5px;
                    padding: 10px;
                }
                .ChatField-messages-message__user{
                    margin-right: 10px;
                    color: #fff;
                }
            }
        }
    }
    .messageRight{
        margin-right: 30vw;
        .ChatField-messages-message__text{
            background-color: #fff;
        }
    }
    .messageLeft{
        margin-left: 60vw;
        .ChatField-messages-message__text{
            background-color: $indigo;
            color: #fff;
        }
    }
</style>