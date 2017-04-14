<template>
  <div class="blacklist-detail">
    <div class="header">
      <i class="menu" @click="click('menu')"></i>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <el-amap class="map" :zoom="15" mapStyle="blue_night" :center="mapCenter">
        <el-amap-marker :position="markerPosition" :icon="markerIcon" :offset="markOffset"></el-amap-marker>
      </el-amap>
      <div class="list" v-if="item">
        <div class="item name">{{item.name}}</div>
        <div class="item address">{{item.address}}</div>
        <div class="item info">{{item.info}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="comment">
        <div class="add">
          <input type="text" v-model="commentInput">
          <div class="button" @click="pubComment">评论</div>
        </div>
        <div class="item" v-for="item in comments">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import markerIcon from './assets/address.svg';
export default {
  name: 'detail',
  data () {
    return {
      commentInput: '',
      mapCenter: [116.397428, 39.90923],
      markerPosition: [116.397428, 39.90923],
      markOffset: [-13, -13],
      markerIcon,
      item: {
        name: 'name',
        address: 'FuTian, ShenZhen, GuangDong, Stadium 101',
        info: 'Hello world'
      },
      comments: [
        {
          img: '//markpop.github.io/img/author.jpg',
          content: 'Hello world'
        }
      ]
    }
  },
  created() {
    console.log(this.$route.params.id);
  },
  methods: {
    click(type) {
      if (type === 'menu') {
        this.$store.commit('toggleMenu');
      }
    },
    pubComment() {
      if (this.commentInput) {
        this.comments.unshift({
          img: '//markpop.github.io/img/author.jpg',
          content: this.commentInput
        });
      }
    }
  }
}
</script>

<style lang="scss">
  .blacklist-detail {
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
      padding: 12px;
      background-color: #2F3846;
      

      .map {
        width: 100%;
        height: 150px;
        // border-radius: 5px;
        // overflow: hidden;

        .amap-marker img {
          width: 26px;
          height: 26px;
        }
      }
      
      .list {
        border-bottom: 1px dash #FFF;
        background-color: rgba(255, 255, 255, .15);
        margin: 12px 0;
        border-radius: 4px;

        .item {
          font-size: 12px;
          color: #FFF;
          padding: 15px 0 15px 10px;
          border-bottom: 1px solid rgba(255, 255, 255, .15);
          display: flex;
          line-height: 15px;

          &:last-child {
            border-bottom: 0;
          }

          &.name::before {
            flex-grow: 0;
            flex-shrink: 0;
            content: ' ';
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url(./assets/user.svg) no-repeat center center;
            background-size: contain;
            margin-right: 10px;
          }

          &.address::before {
            flex-grow: 0;
            flex-shrink: 0;
            content: ' ';
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url(./assets/house.svg) no-repeat center center;
            background-size: contain;
            margin-right: 10px;
          }

          &.info::before {
            flex-grow: 0;
            flex-shrink: 0;
            content: ' ';
            display: inline-block;
            width: 15px;
            height: 15px;
            background: url(./assets/info.svg) no-repeat center center;
            background-size: contain;
            margin-right: 10px;
          }
        }
      }
    }

    .footer {
      padding: 0 12px;
      background-color: #2F3846;

      .comment {
        padding: 12px 0;

        .add {
          height: 40px;
          display: flex;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 12px;

          input {
            border: 0;
            outline: 0;
            flex-grow: 1;
            flex-shrink: 1;
            box-sizing: border-box;
            padding: 0 12px;
            border-radius: 0;
          }

          .button {
            width: 50px;
            height: 40px;
            background-color: #F15D63;
            font-size: 12px;
            line-height: 40px;
            text-align: center;
            color: #FFF;
          }
        }

        .item {
          display: flex;
          flex-direction: row; 
          margin-bottom: 10px;

          .img {
            flex-shrink: 0;
            flex-grow: 0;
            width: 25px;
            height: 25px;
            overflow: hidden;
            border: 2px solid #FFF;
            border-radius: 50%;

            img {
              width: 100%;
            }
          }

          .content {
            background-color: #FFF;
            padding: 5px;
            font-size: 12px;
            color: #545B66;
            margin-left: 10px;
            border-radius: 5px;
            position: relative;

            &::before {
              content: ' ';
              display: block;
              border-right: 5px solid #FFF;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              position: absolute;
              top: 10px;
              left: -5px;
            }
          }
        }
      }
    }
  }
</style>
