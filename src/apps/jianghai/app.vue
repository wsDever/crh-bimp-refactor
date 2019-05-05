<template>
  <div
    id="app"
    :class="{
    [$route.meta.bg||'']: true
  }"
  >
    <!-- 全局头部，通过路由 meta 来控制内容跟显示 -->
    <nb-header-nav
      v-if="$route.meta.header"
      :title-position="$route.meta.header.position"
      ref="header"
      @tap="onHeadNavTap"
    >
      <div
        class="left"
        slot="left"
        v-if="$route.meta.header.left === 'backward'"
      >
        <i class="iconfont iconhoutui"></i>
      </div>
      <div
        class="title"
        :class="{ [$route.meta.header.position||'center']: true }"
        slot="title"
      >{{ $route.meta.header.title }}</div>
      <div
        class="right"
        slot="right"
      ></div>
    </nb-header-nav>
    <!-- 页面主体内容 -->
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
    },
    watch: {
      // 因为没办法直接通过 :styles 设置对象数据（react可以？）因此在得到元素通过设置属性的方式实现
      "$route.meta.header": {
        handler(header) {
          this.$nextTick(() => {
            this.$refs.header.styles = header.styles || {};
          });
        }
      }
    }
  })
  export default class App extends Vue {
    /**
     * 头部导航点击处理
     */
    onHeadNavTap({ detail }) {
      // 点击位置
      const { position } = detail;
      const cmd = this.$route.meta.header[position];
      if (cmd === "backward") {
        // 回退
        this.$router.back();
      }
    }

    beforeMount() {
      // 针对特殊的错误 code 做 vue层面的响应
      this.$App.APIObserver.on("response.error", ({ code, hash }) => {
        // 登录超时重登
        if (code === "-2222") {
          this.$router.replace({ name: "login", query: { from: hash } });
        }
      });
    }

    mounted() {}
  }
</script>