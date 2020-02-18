<template>
<!-- ui secondary pointing menu  -->
    <div class="ui secondary pointing menu">

        <router-link to="/" class="item active">
            <strong> Imagify </strong>
        </router-link>

        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">
                    Gallery
                </router-link>
                <router-link to="/upload"  class="ui item">
                    Upload
                </router-link>
                <a class="ui item" @click="logout">
                    Logout
                </a>
            </div>
            <a v-else class="ui item" @click="login">
                Login
            </a>
        </div>      

    </div>    
</template> 

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Header',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])    
};

</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>