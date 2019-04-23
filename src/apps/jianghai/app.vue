<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import RouterTransition from '@com/common/router-transition';
  @Component({
    components: {
      RouterTransition
    }
  })
  export default class App extends Vue {
    
  }
</script>