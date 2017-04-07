<template>
  <div class="blacklist-add">
    <div class="header">
      <a class="menu" href="" ></a>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <div class="item name">
        <input type="text" placeholder="房东">
      </div>
      <div class="item address">
        <input type="text" disabled placeholder="地址">
      </div>
      <div class="item num">
        <input type="text" placeholder="门牌号">
      </div>
      <div class="item phone">
        <input type="text" placeholder="电话">
      </div>
      <div class="item">
        <textarea placeholder="描述"></textarea>
      </div>
      <div class="item">
        <div class="submit">添加</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.blacklist-add {
  height: 100%;
  background-color: #2F3846;

  .header {
    border-bottom: 1px solid #545B66;
    background-color: #2F3846;
    height: 40px;
    position: relative;

    .menu::after {
      content: ' ';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(./assets/menu.svg) no-repeat center center;
      background-size: contain;
      position: absolute;
      left: 10px;
      top: 10px;
    }

    .logo {
      text-align: center;
      color: #FFF;
      font-size: 20px;
      line-height: 40px;

      span {
        color: #F15D63;
      }
    }
  }

  .container {
    background-color: #2F3846;
    padding: 8px 0;

    .item {
      padding: 8px 12px;
      position: relative;

      &.address::after {
        content: ' ';
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url(./assets/right.svg) no-repeat center center;
        background-size: contain;
        position: absolute;
        right: 12px;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }

      input {
        border: 0;
        outline: 0;
        height: 40px;
        border-radius: 4px;
        background-color: #FFF;
        width: 100%;
        padding: 0 12px;
        box-sizing: border-box;
        color: #000;
        font-size: 12px;
      }

      textarea {
        color: #000;
        font-size: 12px;
        padding: 12px;
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        border: 0;
        outline: 0;
        border-radius: 4px;
        background-color: #FFF;
        resize: none;
      }
    }
    
    .submit {
      height: 40px;
      background-color: #F15D63;
      line-height: 40px;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      border-radius: 3px;
    }
  }
}
</style>
