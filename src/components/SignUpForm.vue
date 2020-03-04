<template>
    <div class="SignUpForm">
        <form @submit.prevent="sendData(getData.login,getData.email,getData.password,getData.secondPassword)">
            <input type="text" placeholder="login" required v-model="getData.login">
            <input type="email" placeholder="email" required v-model="getData.email">
            <input type="password" placeholder="password" required v-model="getData.password">
            <input type="password" placeholder="repeat password" required v-model="getData.secondPassword">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters(['getData']),
    },
    methods:{
        ...mapActions(['postRequestSignUp']),
        sendData(login,email,password,secondPassword){
            if (password != secondPassword){
                alert('Пароли не совпадают')
            }else if (password == secondPassword){
                this.postRequestSignUp({login,email,password})       
            }
        }
    },
}
</script>