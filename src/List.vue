<template>
  <div class="blacklist-list">
    <div class="header">
      <i class="menu" @click="click('menu')"></i>
      <i class="add" @click="click('add')"></i>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <div class="search">
        <router-link class="button" to="/search">搜索</router-link>
      </div>
      <div class="content">
        <div class="item" v-for="item in list" @click="click('item', item)">
          <h1 class="title">{{item.title}}</h1>
          <p class="subtitle">{{item.subtitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list: [
        {
          id: '12',
          title: 'title',
          subtitle: 'subtitle'
        }
      ]
    }
  },
  methods: {
    click(type, obj) {
      if (type === 'menu') {
        this.$store.commit('toggleMenu');
      } else if(type === 'add') {
        location.hash = 'add';
      } else {
        location.hash = `detail/${obj.id}`;
      }
    }
  }
}
</script>

<style lang="scss">
.blacklist-list {
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

    .add::after {
      content: ' ';
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(./assets/add.svg) no-repeat center center;
      background-size: contain;
      position: absolute;
      right: 10px;
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

    .search {
      background-color: #2F3846;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      .button {
        display: block;
        width: 95%;
        height: 25px;
        background-color: rgba(255, 255, 255, .15);
        text-decoration: none;
        color: #BEBBBF;
        line-height: 25px;
        font-size: 12px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
          content: ' ';
          display: inline-block;
          width: 10px;
          height: 10px;
          background: url(./assets/search.svg) no-repeat center center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }

    .content {
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
}
</style>
