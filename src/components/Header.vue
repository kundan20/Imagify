<template>
<!-- ui secondary pointing menu  -->
    <div class="ui tabular menu">
        <a href = "/" class="item active">
            <strong> Imagify </strong>
        </a>  
        <div class="right menu">
            <a class="ui item" @click="login">
                Login
            </a>
        </div>      
    </div>    
</template> 

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Header',
    methods: mapActions(['login'])    
};

</script>

<style scoped>

</style>