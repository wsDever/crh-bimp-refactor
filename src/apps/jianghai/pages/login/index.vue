<template>
  <!-- 登录 -->
  <div class="login">
    <h1>欢迎使用</h1>
    <p>用手机号或员工号登录江海经济圈</p>
    <form action="">
      <input
        type="text"
        placeholder="请输入手机号码/员工号"
      >
      <input
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
        <a href="#">忘记密码</a>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./login" scoped></style>


<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import Auth from "@model/auth";
  @Component({})
  export default class Login extends Vue {

    onLogin({ detail }) {
      setTimeout(() => {
        detail.done();
      }, 1000);
    }

    mounted() {
      Auth.login({
        account_content: "81500013",
        password: "123qwe"
      });
    }
  }
</script>