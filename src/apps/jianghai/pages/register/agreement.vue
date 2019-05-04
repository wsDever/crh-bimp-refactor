<template>
  <!-- 注册协议 -->
  <div class="register agreement">
    <div v-for="(item, i) in agreementList" :key="i" class="item">
      <img :src="`data:image/jpg;base64,${item}`">
    </div>
    <div v-show="agreementList.length > 0" class="btn-space">
      <nb-button-async
        :width="690"
        :height="88"
        countdown-id="agreement"
        countdown="10"
        countdown-html="(%n)秒"
        @tap="onAgree"
        @count="onCountdown"
        ref="agreeBtn"
      >
        <div class="btn">
          我已阅读并同意
          <span class="countdown"></span>
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

  @Component({})
  export default class RegisterAgreement extends Vue {

    agreementList = [];

    // 当倒计时结束
    async onCountdown({ detail }) {
      if (detail.status === 'finish') {
        this.$refs.agreeBtn.countdown = 0;
      }
    }

    // 点击同意
    async onAgree({ detail }) {
      if (this.$refs.agreeBtn.countdown > 0) return;
      const signed = await Auth.signAgreement();
      signed && this.$router.push({ name: 'register.password' });
      detail.done();
    }

    // 获取协议列表 base64
    async fetchAgreementList() {
      this.agreementList = await Auth.agreement();
      this.$refs.agreeBtn.handleClick();
    }

    mounted() {
      this.fetchAgreementList();
    }

  }

</script>
