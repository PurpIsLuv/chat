<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center">
            <form @submit.prevent="sendData(getData.login,getData.email,getData.password,getData.secondPassword)" class="SignUpForm d-flex flex-column align-items-center">
                <div class="SignUpForm__login">
                    <input type="text" placeholder="login" required v-model="getData.login" class="form-control">
                </div>
                <div class="SignUpForm__email">
                    <input type="email" placeholder="email" required v-model="getData.email" class="form-control">
                </div>
                <div class="SignUpForm__password">
                    <input type="password" placeholder="password" required v-model="getData.password" class="form-control">
                </div>
                <div class="SignUpForm__repeatpassword">
                    <input type="password" placeholder="repeat password" required v-model="getData.secondPassword" class="form-control">
                </div>
                <div class="SignUpForm__submit">
                    <button type="submit" class="btn btn-success">Send</button>
                </div>
            </form>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="/"><div class="text-warning">Войти</div></router-link>
        </div>
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

<style lang="scss">
@import '../assets/scss/main.scss';
    .SignUpForm{
        width: 300px;
        height: 300px;
        border-radius: 10px;
        background-color: $purple;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
        .SignUpForm__login,.SignUpForm__email,.SignUpForm__password,.SignUpForm__repeatpassword{
            margin-top: 20px;
            width: 250px;
        }
        .SignUpForm__submit{
            margin-top: 15px;
        }
        margin-bottom: 20px;
    }
</style>