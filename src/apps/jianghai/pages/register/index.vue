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
          ref="code"
          maxlength="4"
          placeholder="请输入验证码"
        >
        <div class="verify">
          <nb-button-async
            countdown-id="verifycode"
            :countdown="60"
            countdown-html="%ns重新获取"
            width="200"
            bg="#ffffff"
            color="#3E86F7"
            no-border
            @count="onCountdown"
            ref="verifyBtn"
          >
            <div class="btn">
              <span class="origin">
                获取验证码
              </span>
              <span class="countdown"></span>
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
  import Utils from "@lib/utils";
  @Component({})
  export default class Register extends Vue {

    // 是否已经发送过验证码
    isVerifyCodeSended = false;

    // 下一步
    async onNext({ detail }) {
      const mobile_tel = this.$refs.mobile.value;
      const cmd = this.$route.query.type || 'register';
      const isExist = await Auth.isMobileExist({ mobile_tel });
      // 先检查手机号是否已经注册过
      if (cmd === 'register') {
        if (isExist == 1) {
          detail.done();
          return Utils.nb.modal("alert", {
            title: '提示',
            content: "此号码已被使用",
          });
        }
        if (isExist === false) {
          return detail.done();
        }
      }
      // 判断是否点击过验证获取
      if (!this.isVerifyCodeSended) {
        detail.done();
        return Utils.nb.modal("alert", {
          title: '提示',
          content: "请先获取验证码",
        });
      }
      // 先校验验证码
      try {
        const success = await Auth.checkVerifyCode({
          mobile_tel,
          sms_code: this.$refs.code.value
        });
        if (success) {
          cmd === 'register' && this.$router.push({
            name: "register.agreement",
            query: this.$route.query
          });
        }
      } finally {
        detail.done();
      }
    }

    // 处理倒计时开关
    async onCountdown({ detail }) {
      if (detail.status === "start") {
        // 发验证码请求
        const success = await Auth.sendVerifyCode({
          mobile_tel: this.$refs.mobile.value
        });
        if (!success) {
          // 发送失败重置按钮
          this.$refs.verifyBtn.done();
        } else {
          this.isVerifyCodeSended = true;
        }
      }
    }

    mounted() {}
  }
</script>