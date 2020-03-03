<template>
    <div class="MainPage">
        mainpage
        {{getData}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getData'])
    },
}
</script>

<style lang="scss">
    
</style>