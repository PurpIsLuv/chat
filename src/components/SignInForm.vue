<template>
    <div class="SignInForm">
        <form @submit.prevent="sendData(getData.email,getData.password)">
            <input type="email" placeholder="email" required v-model="getData.email">
            <input type="password" placeholder="password" required v-model="getData.password">
            <button type="submit">send</button>
        </form>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters(['getData'])
    },
    methods:{
        ...mapActions(['postRequestSignIn']),
        sendData(email,password){
            this.postRequestSignIn({email,password})
        }
    },
}
</script>