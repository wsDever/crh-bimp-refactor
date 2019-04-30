<template>
  <!-- 设置密码 -->
  <div class="register password">
    <nb-list top-space="80">
      <div
        class="tips"
        slot="space"
      >密码由6~16位数字或字母组成</div>
      <nb-list-item height="88">
        <input
          ref="password"
          type="password"
          placeholder="请输入密码"
        >
      </nb-list-item>
      <nb-list-item height="88">
        <input
          ref="password2"
          type="password"
          placeholder="确认密码"
        >
      </nb-list-item>
    </nb-list>
    <nb-list
      v-show="$route.query.type !== 'find'"
      top-space="80"
    >
      <div
        class="tips"
        slot="space"
      >邀请码(非必填)</div>
      <nb-list-item height="88">
        <input
          type="text"
          placeholder="输入邀请码"
        >
      </nb-list-item>
    </nb-list>
    <div class="btn-space password">
      <nb-button-async
        :width="690"
        :height="88"
        @tap="onSubmit"
      >
        <div class="btn">
          {{ $route.query.type === 'find' ? '确定' : '立即注册' }}
        </div>
      </nb-button-async>
    </div>
  </div>
</template>

<style lang="scss" src="./register" scoped></style>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import Auth from "@model/auth";
  import Utils from '@lib/utils';
  @Component({})
  export default class SetPassword extends Vue {

    /**
     * 提交密码
     */
    async onSubmit({ detail }) {
      if (this.$refs.password.value !== this.$refs.password2.value) {
        detail.done();
        return Utils.nb.toast('确认密码不一致');
      }
      const success = await Auth.setPassword({
        password: this.$refs.password.value
      });
      if (!success) {
        detail.done();
      }
    }

    mounted() {}
  }
</script>