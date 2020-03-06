<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center">
            <form @submit.prevent="sendData(getData.email,getData.password)" class="SignInForm d-flex flex-column align-items-center">
                <div class="SignInForm__email">
                    <input type="email" placeholder="email" required v-model="getData.email" class="form-control">
                </div>
                <div class="SignInForm__password">
                    <input type="password" placeholder="password" required v-model="getData.password" class="form-control">
                </div>
                <div class="SignInForm__submit">
                    <button type="submit" class="btn btn-primary">Войти</button>
                </div>
            </form>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="/SignUp"><div class="text-warning">Зарегистрироваться</div></router-link>
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
        ...mapActions(['postRequestSignIn']),
        sendData(email,password){
            this.postRequestSignIn({email,password})
        }
    },
}
</script>

<style lang="scss">
    @import '../assets/scss/main.scss';
    .SignInForm{
        width: 300px;
        height: 200px;
        background-color: $purple;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.4);
        .SignInForm__password,.SignInForm__email{
            width: 250px;
            margin-top: 20px;
        }
        .SignInForm__submit{
            margin-top: 30px;
        }
        margin-bottom: 20px;
    }
</style>