<template>
  <!-- 底部导航 -->
  <ul class="nav-tab-bottom">
    <li
      v-for="item in items"
      :key="item.key"
      :class="{ active: item.key === activeKey }"
      @click="navTo(item)"
    >
      <i
        class="iconfont"
        :class="item.key === activeKey ? item.iconAx : item.icon"
      />
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  @Component({
    props: {
      // 当前选中的卡片
      activeKey: {
        type: String,
        default: "homepage"
      },
      // 展示的选项卡集
      items: {
        type: Array,
        default: () => [
          {
            key: "homepage",
            icon: "icon-shouyex",
            iconAx: "icon-shouyeAx",
            text: "首页"
          },
          {
            key: "org",
            icon: "icon-jigoux",
            iconAx: "icon-jigouAx",
            text: "协同"
          },
          {
            key: "client",
            icon: "icon-kehux",
            iconAx: "icon-kehuAx",
            text: "客户"
          },
          {
            key: "my",
            icon: "icon-wodex",
            iconAx: "icon-wodeAx",
            text: "我的"
          }
        ]
      }
    }
  })
  export default class NavTabBottom extends Vue {
    /**
     * 导航跳转
     */
    navTo(item) {
      if (item.key === this.activeKey) return;
      this.router.push({ name: item.key });
    }
  }
</script>

<style lang="scss" scoped>
  .nav-tab-bottom {
    height: 98px;
    width: 750px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    position: fixed;
    z-index: 3;
    bottom: 0;
    padding: 0;
    margin: 0;
    li {
      flex-direction: row;
      height: 98px - 14px;
      // padding-top: 14px;
      display: block;
      text-align: center;
      color: $font-light-grey;
      line-height: 1.2;
      i {
        font-size: 48px;
      }
      span {
        display: block;
        font-size: 20px;
      }
      &.active {
        color: $brand-primary-color;
      }
    }
  }
</style>
