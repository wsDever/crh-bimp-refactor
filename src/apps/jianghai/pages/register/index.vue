<template>
  <!-- 注册 | 忘记密码 -->
  <div class="register">
    <nb-list top-space="30">
      <nb-list-item height="88">
        <input
          type="tel"
          placeholder="请输入手机号"
          maxlength="11"
          ref="mobile"
        >
      </nb-list-item>
      <nb-list-item height="88">
        <input
          type="text"
          placeholder="请输入验证码"
        >
        <div class="verify">
          <nb-button-async
            :countdown="20"
            width="200"
            bg="#ffffff"
            color="#3E86F7"
            no-border
            @count="onCountdown"
            ref="verifyBtn"
          >
            <div class="btn">
              <span v-show="countdowning">
                <span class="countdown"></span>
                重新获取
              </span>
              <span v-show="!countdowning">
                获取验证码
              </span>
            </div>
          </nb-button-async>
        </div>
      </nb-list-item>
    </nb-list>
    <p class="help">
      若收不到验证码请联系客服：<a href="tel://400-6662288">400-6662288</a>
    </p>
    <div class="btn-space">
      <nb-button-async
        :width="690"
        :height="88"
        @tap="onNext"
      >
        <div class="btn">
          下一步
        </div>
      </nb-button-async>
    </div>
    <p
      v-show="$route.query.type !== 'find'"
      class="link"
    >
      <router-link :to="{ name: 'login' }">
        已有账号，请登录
      </router-link>
    </p>
  </div>
</template>

<style lang="scss" src="./register" scoped></style>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import Auth from "@model/auth";
  @Component({})
  export default class Register extends Vue {
    // 倒计时中
    countdowning = false;

    // 下一步
    onNext({ detail }) {
      this.$router.push({ name: "register.password", query: this.$route.query });
    }

    // 处理倒计时开关
    async onCountdown({ detail }) {
      const mobile_tel = this.$refs.mobile.value;
      if (detail.status === "start") {
        // 发验证码请求
        const result = await Auth.sendVerifyCode({
          mobile_tel
        });
        if (!result) {
          return this.$refs.verifyBtn.done();
        }
      }
      this.countdowning = detail.status === "start";
    }

    mounted() {}
  }
</script>