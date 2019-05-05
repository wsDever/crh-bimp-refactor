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
    <main ref="main">
      <router-transition>
        <router-view></router-view>
      </router-transition>
    </main>

    <!-- 页脚导航 -->
    <footer-nav
      ref="footer"
      v-show="$route.meta.footer"
      :activeKey="$route.name"
      :items="footerNavItems"
    ></footer-nav>
  </div>
</template>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import RouterTransition from "@com/common/router-transition";
  import FooterNav from "@com/common/footer/nav";
  @Component({
    components: {
      RouterTransition,
      FooterNav
    },
    watch: {
      // 因为没办法直接通过 :styles 设置对象数据（react可以？）因此在得到元素通过设置属性的方式实现
      "$route.meta.header": {
        handler(header) {
          this.$nextTick(() => {
            if (!header.styles) return;
            this.$refs.header.styles = header.styles;
            // 为主内容添加 padding
            if (header.styles.height) {
              this.$refs.main.style.paddingTop = `${Number(header.styles.height) / 75}rem`;
            }
          });
        }
      },
      "$route.meta.footer": {
        handler(footer) {
          this.$nextTick(() => {
            if (!footer) return;
            // 添加 padding-bottom
            this.$refs.main.style.paddingBottom = `${this.$refs.footer.$el.clientHeight}px`;
          });
        }
      }
    }
  })
  export default class App extends Vue {
    // 脚底导航的数据
    footerNavItems = [
      {
        key: "home",
        icon: "iconshouyex",
        iconAx: "iconshouyeAx",
        text: "首页"
      },
      {
        key: "client",
        icon: "iconkehux",
        iconAx: "iconkehuAx",
        text: "客户"
      },
      {
        key: "achievement",
        icon: "iconyejix",
        iconAx: "iconyejiAx",
        text: "业绩"
      },
      {
        key: "my",
        icon: "iconwodex",
        iconAx: "iconwodex",
        text: "我的"
      }
    ];

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