<template>
  <div>
  <!-- <div :style="{'background-image': `url(${require('./assets/images/bg-img.jpg')})`}"> -->
      <Header> </Header>
      <div class="ui container">
        <router-view></router-view>
      </div>
  </div>
  
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header: Header
  }  
}
</script>

<style > 
  

</style>