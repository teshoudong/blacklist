<template>
  <div class="blacklist-menu">
    <ul class="list">
      <li class="item">首页</li>
      <li class="item">我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.blacklist-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  background-color: #363C46;
  color: #FFF;
  font-size: 14px;
  z-index: 9;
  padding-top: 40px;

  .list {
    .item {
      padding: 10px;
      border-bottom: 1px solid #BEBBBF;
      
    }
  }
}
</style>
