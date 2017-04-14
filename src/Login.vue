<template>
  <div class="blacklist-login">
    <div class="container">
      <div class="logo">Black<span>List</span></div>
      <div class="user">
        <input type="text">
      </div>
      <div class="password">
        <input type="password">
      </div>
      <div class="button" @click="click">登陆</div>
      <router-link class="forget" to="/signup">忘记密码？</router-link>
    </div>
    <div class="footer">
      <router-link class="signup" to="/signup">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    click() {
      location.hash = '/';
    }
  }
}
</script>

<style lang="scss">
  .blacklist-login {
    height: 100%;
    background-color: #2F3846;
    display: flex;
    align-items: center;
    position: relative;

    .container {
      width: 100%;
      height: 350px;
      padding: 0 40px;

      .logo {
        text-align: center;
        color: #FFF;
        font-size: 50px;
        margin-bottom: 30px;

        span {
          color: #F15D63;
        }
      }

      .password,
      .user {
        height: 40px;
        border-bottom: 1px solid #BEBBBF;
        position: relative;

        input {
          border: 0;
          outline: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          color: #FFF;
          font-size: 12px;
          text-align: center;
        }
      }

      .password::before {
        content: ' ';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(./assets/password.svg) no-repeat center center;
        background-size: contain;
        position: absolute;
        left: 10px;
        top: 10px;
      }

      .user::before {
        content: ' ';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(./assets/user.svg) no-repeat center center;
        background-size: contain;
        position: absolute;
        left: 10px;
        top: 10px;
      }

      .button {
        height: 40px;
        background-color: #F15D63;
        line-height: 40px;
        color: #FFF;
        text-align: center;
        font-size: 14px;
        border-radius: 3px;
        margin-top: 30px;
      }

      .forget {
        display: inline-block;
        color: #BEBBBF;
        font-size: 12px;
        text-align: center;
        margin-top: 30px;
      }
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      width: 100%;
      padding-bottom: 30px;

      .signup {
        display: inline-block;
        color: #BEBBBF;
        font-size: 12px;
      }
    }
  }
</style>
