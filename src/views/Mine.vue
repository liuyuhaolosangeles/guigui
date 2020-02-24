<template>
    <div> 
       <div id="content"><router-view  /></div>
    </div>
</template>

<script>
import Login from '../components/Login/Login'
export default {
    
    name:'Mine',
    components:{
        Login
     
    }
}
</script>

<style lang="stylus" scoped>

</style>