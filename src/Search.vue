<template>
  <div class="blacklist-search">
    <div class="search">
      <input type="text" placeholder="搜索">
      <router-link class="cancel" to="/">取消</router-link>
    </div>
    <div class="content">
      <div class="item">
        <h1 class="title">asdadasd</h1>
        <p class="subtitle">asdadsads</p>
      </div>
      <div class="item">
        <h1 class="title">asdadasd</h1>
        <p class="subtitle">asdadsads</p>
      </div>
      <div class="item">
        <h1 class="title">asdadasd</h1>
        <p class="subtitle">asdadsads</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.blacklist-search {
  height: 100%;
  background-color: #2F3846;

  .search {
    background-color: #2F3846;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    position: relative;
    border-bottom: 1px solid #545B66;

    &::before {
      content: ' ';
      display: inline-block;
      width: 10px;
      height: 10px;
      background: url(./assets/search.svg) no-repeat center center;
      background-size: contain;
      position: absolute;
      left: 17px;
      top: 16px;
    }

    .cancel {
      color: #F15D63;
      font-size: 12px;
      padding: 0 10px;
      white-space: nowrap;
    }

    input {
      border: 0;
      outline: 0;
      background-color: rgba(255, 255, 255, 0.15);
      height: 25px;
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
      color: #FFF;
      font-size: 12px;
      padding-left: 25px;

      &::placeholder {
        color: #BEBBBF;
      }
    }
  }

  .content {
    background-color: #2F3846;

    .item {
      padding: 12px 12px 12px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, .15);
      position: relative;

      &:last-child {
        border-bottom: 0;
      }

      &.active::before {
        content: ' ';
        display: block;
        width: 3px;
        background-color: #F15D63;
        position:absolute;
        top: 0;
        left: 0;
        height: 100%;
      }

      .title {
        font-size: 14px;
        color: #FFF;
      }

      .subtitle {
        font-size: 12px;
        color: rgba(255, 255, 255, .5);
      }
    }
  }
}
</style>
