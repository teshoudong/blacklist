<template>
  <div class="blacklist-detail">
    <div class="header">
      <a class="menu" href="" ></a>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <gmap-map class="map" :center="mapCenter" :zoom="15" :zoomControl="false"></gmap-map>
      <div class="list">
        <div class="item name">Jason</div>
        <div class="item address">FuTian, ShenZhen, GuangDong, Stadium 101</div>
        <div class="item info">Hello world</div>
      </div>
    </div>
    <div class="footer">
      <div class="comment">
        <div class="add">
          <input type="text">
          <div class="button">评论</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="//markpop.github.io/img/author.jpg" alt="">
          </div>
          <div class="content">Hello world</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="//markpop.github.io/img/author.jpg" alt="">
          </div>
          <div class="content">Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world</div>
        </div>
        <div class="item">
          <div class="img">
            <img src="//markpop.github.io/img/author.jpg" alt="">
          </div>
          <div class="content">Hello world</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCWRYvTR01zqJ5C4d3LhEIfRhCx-UYs2Y'
  }
});

export default {
  name: 'detail',
  data () {
    return {
      mapCenter: {lat: 0, lng: 0}
    }
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.mapCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      }, () => {

      });
    } else {

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
        border-radius: 5px;
        overflow: hidden;
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
