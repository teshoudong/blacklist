<template>
  <div class="blacklist-address">
    <div class="header">
      <i class="menu" @click="click('menu')"></i>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <el-amap class="map" :zoom="15" mapStyle="blue_night" :map-manager="amapManager" :center="defaultCenter" :events="events"></el-amap>
      <div class="search">
        <input type="text" placeholder="搜索地址" @input="searchKeyword">
      </div>
      <ul class="list">
        <li class="item" v-for="item in list" @click="click('item', item)">
          <h1 class="title">{{item.name}}</h1>
          <p class="subtitle">{{item.pname}}{{item.cityname}}{{item.adname}}{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap';
import axios from 'axios';

let amapManager = new AMapManager();

export default {
  name: 'blacklist-address',
  data () {
    return {
      list: [],
      defaultCenter: [116.397428, 39.90923],
      mapCenter: [116.397428, 39.90923],
      events: {
        'moveend': () => {
          let mapCenter = this.amapManager.getMap().getCenter();
          this.mapCenter = [mapCenter.getLng(), mapCenter.getLat()];
          this.searchAround(this.mapCenter);
        }
      },
      amapManager
    }
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.defaultCenter = this.mapCenter = [
          position.coords.longitude,
          position.coords.latitude
        ];
      }, () => {
        this.searchAround(this.mapCenter);
      });
    } else {
      this.searchAround(this.mapCenter);
    }
  },
  methods: {
    click(type, obj) {
      if (type === 'menu') {
        this.$store.commit('toggleMenu');
      } else {
        this.$store.commit('updateAddress', obj);
        history.back();
      }
    },
    searchAround(center) {
      let url = '//restapi.amap.com/v3/place/around';
      let params = {
        key: '918944119fe4c1014ccccdf509de81da',
        location: center.join(','),
        offset: 8
      };
      axios.get(url, {
        params
      }).then(data => {
        if (data && data.data && data.data.pois) {
          this.list = data.data.pois;
        }
      });
    },
    searchKeyword(e) {
      let keywords = e.currentTarget.value;
      let url = '//restapi.amap.com/v3/place/text';
      let params = {
        key: '918944119fe4c1014ccccdf509de81da',
        keywords,
        offset: 8
      };
      if (keywords) {
        axios.get(url, {
          params
        }).then(data => {
          if (data && data.data && data.data.pois) {
            this.list = data.data.pois;
          }
        });
      } else {
        this.searchAround(this.mapCenter);
      }
    }
  }
}
</script>

<style lang="scss">
.blacklist-address {
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
      padding: 12px;
      background-color: #2F3846;

      .map {
        width: 100%;
        height: 150px;
        position: relative;

        &::after {
          content: ' ';
          display: block;
          width: 26px;
          height: 26px;
          background: url(./assets/address.svg) no-repeat center center;
          background-size: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -26px 0 0 -13px;
        }
      }

      .search {
        height: 40px;
        margin: 10px 0;
        position: relative;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 20px;

        &::after {
          content: ' ';
          display: block;
          background: url(./assets/search.svg) no-repeat center center;
          background-size: contain;
          width: 15px;
          height: 15px;
          position: absolute;
          top: 13px;
          left: 13px;
        }

        input {
          display: block;
          outline: 0;
          border: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          color: #FFF;
          font-size: 14px;
          box-sizing: border-box;
          padding-left: 40px;

          &::placeholder {
            color: #BEBBBF;
          }
        }
      }

      .list {
        .item {
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          .title {
            font-size: 14px;
            color: #FFF;
          }

          .subtitle {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
  }
}
</style>
