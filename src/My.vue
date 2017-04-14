<template>
  <div class="blacklist-my">
    <div class="header">
      <i class="menu" @click="click('menu')"></i>
      <i class="edit"></i>
      <div class="img">
        <img src="//markpop.github.io/img/author.jpg" alt="">
      </div>
      <h1 class="name">Jason</h1>
      <p class="desc">A Front-end Enginer</p>
    </div>
    <div class="container">
      <ul class="list">
        <li class="item">
          <i class="icon icon-1"></i>
          <p class="desc">我做下测试</p>
        </li>
        <li class="item">
          <i class="icon icon-2"></i>
          <p class="desc">我做下测试</p>
        </li>
        <li class="item">
          <i class="icon icon-3"></i>
          <p class="desc">我做下测试</p>
        </li>
        <li class="item">
          <i class="icon icon-4"></i>
          <p class="desc">我做下测试</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {}
  },
  methods: {
    click(type) {
      if (type === 'menu') {
        this.$store.commit('toggleMenu');
      }
    }
  }
}
</script>

<style lang="scss">
  .blacklist-my {
    background-color: #FFF;

    .header {
      height: 200px;
      background-color: #2F3846;
      padding-top: 40px;
      box-sizing: border-box;
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

      .edit::after {
        content: ' ';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(./assets/edit.svg) no-repeat center center;
        background-size: contain;
        position: absolute;
        right: 10px;
        top: 10px;
      }

      .img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        border: 4px solid #FFF;

        img {
          width: 100%;
        }
      }

      .name {
        font-size: 14px;
        color: #FFF;
        margin-top: 10px;
        text-align: center;
      }

      .desc {
        font-size: 12px;
        color: #FFF;
        text-align: center;
      }
    }

    .container {
      .list {
        .item {
          height: 50px;
          display: flex;

          &:last-child {
            .desc {
              border-bottom: 0;
            }
          }
          
          .desc {
            border-bottom: 1px solid #F0F4F8;
            flex-grow: 1;
            flex-shrink: 1;
            text-align: left;
            line-height: 50px;
            font-size: 12px;
          }

          .icon {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            &.icon-1::before {
              background: url(./assets/password.svg) no-repeat center center;
              background-size: contain;
            }

            &.icon-2::before {
              background: url(./assets/menu.svg) no-repeat center center;
              background-size: contain;
            }

            &.icon-3::before {
              background: url(./assets/edit.svg) no-repeat center center;
              background-size: contain;
            }

            &.icon-4::before {
              background: url(./assets/user.svg) no-repeat center center;
              background-size: contain;
            }
            
            &::before {
              content: ' ';
              display: block;
              width: 15px;
              height: 15px;
            }            
          }
        }
      }
    }
  }
</style>
