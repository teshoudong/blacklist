<template>
  <div class="blacklist-menu" :class="{'active': menuStatus}">
    <ul class="list">
      <li class="item" @click="click('/')">首页</li>
      <li class="item" @click="click('my')">我的</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {}
  },
  computed: {
    menuStatus() {
      return this.$store.state.menuStatus;
    }
  },
  methods: {
    click(hash) {
      location.hash = hash;
      this.$store.commit('hideMenu');
    }
  }
}
</script>

<style lang="scss">
#app {
  transition: .2s all ease-in-out;
}

.blacklist-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  background-color: #26292F;
  color: #BEBBBF;
  font-size: 14px;
  z-index: 9;
  padding-top: 40px;
  margin-left: -150px;
  transition: .2s all ease-in-out;

  &.active + #app {
    transform: translate3d(150px, 0, 0);
  }

  &.active {
    transform: translate3d(150px, 0, 0);
  }

  .list {
    .item {
      padding: 10px;
      border-bottom: 1px solid #1E2025;

      a {
        display: block;
        color: #FFF;
      }
    }
  }
}
</style>
