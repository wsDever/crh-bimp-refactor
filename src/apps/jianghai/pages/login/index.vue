<template>
  <!-- 登录 -->
  <div class="login">
    <h1>欢迎使用</h1>
    <p>用手机号或员工号登录江海经济圈</p>
    <form action="">
      <input
        ref="account"
        type="text"
        placeholder="请输入手机号码/员工号"
        :value="Auth.rememberAccount()"
      >
      <input
        ref="password"
        type="password"
        placeholder="请输入密码"
      >
      <nb-button-async
        :width="690"
        :height="88"
        @tap="onLogin"
      >
        <div class="btn">
          登录
        </div>
      </nb-button-async>
      <div class="links">
        <router-link :to="{ name: 'register' }">注册</router-link>
        <router-link :to="{ name: 'register', query: { type: 'find' } }">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./login" scoped></style>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import Auth from "@model/auth";
  import Utils from "@lib/utils";
  @Component({})
  export default class Login extends Vue {

    Auth = Auth;

    // 登录操作
    async onLogin({ detail }) {
      const account_content = this.$refs.account.value;
      const password = this.$refs.password.value;
      if (account_content.length === 0 || password.length === 0) {
        detail.done();
        return Utils.nb.toast("账号密码必填");
      }
      try {
        await Auth.loginJianghai({
          account_content,
          password
        });
        Utils.nb.toast("登录成功");
        this.$router.push({ name: "home" });
      } catch (e) {
      } finally {
        detail.done();
      }
    }

    mounted() {}
  }
</script>