<template>
    <div class="MainPage">
        mainpage
        <ChatField/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ChatField from '../components/ChatField'
export default {
    computed:{
        ...mapGetters(['getData'])
    },
    components:{
        ChatField
    },
}
</script>

<style lang="scss">
    
</style>