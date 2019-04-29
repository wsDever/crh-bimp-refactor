<template>
  <!-- 登录 -->
  <div class="login">
    login
  </div>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Auth from '@model/auth';
  @Component({})
  export default class Login extends Vue {

    mounted() {
      Auth.login({
        account_content: '81500013',
        password: '123qwe'
      });
    }
    
  }
</script>