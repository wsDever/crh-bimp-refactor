<template>
  <div id="app">
    <router-transition>
      <router-view></router-view>
    </router-transition>
  </div>
</template>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import RouterTransition from "@com/common/router-transition";
  @Component({
    components: {
      RouterTransition
    }
  })
  export default class App extends Vue {
    beforeMount() {
      // 针对特殊的错误 code 做 vue层面的响应
      this.$App.APIObserver.on("response.error", ({ code }) => {
        // TODO: 登录超时重登
      });
    }
  }
</script>