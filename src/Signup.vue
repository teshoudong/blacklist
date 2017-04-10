<template>
  <div class="blacklist-signup">
    <div class="container">
      <div class="logo">Black<span>List</span></div>
      <div class="user">
        <input type="text">
      </div>
      <div class="password">
        <input type="password">
      </div>
      <div class="confirm">
        <input type="password">
      </div>
      <div class="button">注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .blacklist-signup {
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

      .confirm,
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

      .confirm::before {
        content: ' ';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(./assets/confirm.svg) no-repeat center center;
        background-size: contain;
        position: absolute;
        left: 10px;
        top: 10px;
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
    }
  }
</style>
