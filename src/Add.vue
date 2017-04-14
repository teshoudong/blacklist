<template>
  <div class="blacklist-add">
    <div class="header">
      <i class="menu" @click="click('menu')"></i>
      <div class="logo">Black<span>List</span></div>
    </div>
    <div class="container">
      <form class="form" @submit="submit">
        <div class="item name">
          <input name="name" type="text" placeholder="房东">
        </div>
        <div class="item address" @click="click('address')">
          <input ref="addressName" name="addressName" type="text" readonly placeholder="地址">
          <input ref="addressId" name="addressId" type="hidden">
          <input ref="addressProvince" name="addressProvince" type="hidden">
          <input ref="addressCity" name="addressCity" type="hidden">
          <input ref="addressArea" name="addressArea" type="hidden">
          <input ref="addressAddress" name="addressAddress" type="hidden">
          <input ref="addressLocation" name="addressLocation" type="hidden">
        </div>
        <div class="item num">
          <input name="num" type="text" placeholder="门牌号">
        </div>
        <div class="item phone">
          <input name="phone" type="text" placeholder="电话">
        </div>
        <div class="item desc">
          <textarea name="desc" placeholder="描述"></textarea>
        </div>
        <div class="item img" ref="img">
          <div class="upload">
            <input type="file" multiple accept="image/*" size="2" @change="uploadChange">
          </div>
          <div class="imgContainer" v-for="item in imgs">
            <div class="del" @click="click('del', item)"></div>
            <img :src="item.img" alt="">
          </div>
        </div>
        <div class="item">
          <button class="submit" type="submit">添加</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'add',
  data () {
    return {
      imgs: []
    }
  },
  mounted() {
    if (this.$store.state.address) {
      this.$refs.addressName.value = this.$store.state.address.name;
      this.$refs.addressId.value = this.$store.state.address.id;
      this.$refs.addressProvince.value = this.$store.state.address.pname;
      this.$refs.addressCity.value = this.$store.state.address.cityname;
      this.$refs.addressArea.value = this.$store.state.address.adname;
      this.$refs.addressAddress.value = this.$store.state.address.address;
      this.$refs.addressLocation.value = this.$store.state.address.location;
    }
  },
  methods: {
    click(type, obj) {
      if (type === 'menu') {
        this.$store.commit('toggleMenu');
      } else if(type === 'address') {
        location.hash = 'address';
      } else {
        this.imgs.splice(obj.index, 1);
      }
    },
    uploadChange(e) {
      let files = e.target.files;
      let arr = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        arr.push(new Promise((resolve, reject) => {
          reader.onloadend = () => {
            resolve({
              index: i,
              img: reader.result
            });
          };
        }));
      }
      Promise.all(arr).then(arr => {
        this.imgs = arr;
      });
    },
    submit(e) {
      e.preventDefault();

      let form = e.target;
      let formData = new FormData(form);

      this.imgs.forEach(item => {
        formData.append('img[]', item.img);
      });

      let url = '//localhost';
      axios.post(url, formData).then(data => {

      });
    }
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
      
      &.img {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .imgContainer {
          width: 82px;
          height: 82px;
          margin-right: 5px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          .del {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #F15D63;
            display: flex;
            justify-content: center;
            align-items: center;

            &::after {
              content: ' ';
              display: block;
              width: 8px;
              height: 8px;
              background: url(./assets/del.svg) no-repeat center center;
              background-size: contain;
            }
          }

          img {
            width: 82px;
          }
        }        
      }

      &.address {
        input:disabled {
          background-color: #FFF;
        }

        &::after {
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
      }
      

      .upload {
        width: 80px;
        height: 80px;
        border: 1px dashed #BEBBBF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-right: 5px;

        input {
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }

        &::after {
          content: ' ';
          background: url(./assets/add.svg) no-repeat center center;
          background-size: contain;
          width: 20px;
          height: 20px;
        }
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
      outline: 0;
      border: 0;
      display: block;
      width: 100%;
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
