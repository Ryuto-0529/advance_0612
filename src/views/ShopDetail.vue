<template>
  <div class="detail">
    <commonHeader />
    <div class="flex">
      <div class="left">
        <div class="flex left-top">
          <div class="return-container">
            <div @click="returnHome()" class="return-triangle"></div>
          </div>
          <p class="top-name">{{shop[0].shop_name}}</p>
        </div>
        <div class="shop-info">
          <img :src="shop[0].image_url">
          <div class="flex">
            <p class="area">#{{shop[0].area.area}}</p>
            <p class="genre">#{{shop[0].genre.genre}}</p>
          </div>
          <p class="overview">{{shop[0].overview}}</p>
        </div>
      </div>
      <div class="right">
        <div class="booking-container">
          <p class="booking-title">予約</p>
          <form>
            <input type="date" v-model="date">
            <select name="time" v-model="time">
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </select>
            <select name="user_number" v-model="user_number">
              <option value="1" disabled>1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
              <option value="5">5人</option>
              <option value="6">6人</option>
              <option value="7">7人</option>
              <option value="8">8人</option>
              <option value="9">9人</option>
              <option value="10">10人</option>
            </select>
          </form>
          <div class="booking-info">
            <div class="flex">
              <p class="name-item">Shop</p>
              <p class="shop-name">{{shop[0].shop_name}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Date</p>
              <p class="booking-date">{{date}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Time</p>
              <p class="booking-time">{{time}}</p>
            </div>
            <div class="flex">
              <p class="name-item">Number</p>
              <p class="number">{{user_number}}人</p>
            </div>
          </div>
          <button @click="booking()">予約する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from '../components/commonHeader';
import axios from 'axios';
export default {
  props: ['shop_id'],
  data() {
    return {
      shop: [],
      date: '2021/06/01',
      time: '17:00',
      user_number: 1,
    }
  },
  methods: {
    returnHome() {
      this.$router.push({name: 'home'});
    },
    booking() {
      this.$router.push({name: 'bookingthanks'});
    }
  },
  components: {
    commonHeader
  },
  async created() {
    const responseShop = await axios.get(
      'http://localhost:8000/api/v1/shops/' + this.shop_id
    );
    console.log(responseShop);
    this.shop = responseShop.data.data;
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.left {
  width: 50%;
  padding: 0 50px 0 100px;
}
.left-top {
  margin-top: 20px;
}
.return-container {
  display: inline-block;
  padding: 6px 12px 6px 10px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 2px 2px 6px #333333;
  
}
.return-triangle{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid black;
  border-bottom: 10px solid transparent;
}
.top-name {
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
}
.shop-info {
  width: 90%;
}
img {
  width: 100%;
  margin: 30px 0;
}
.genre {
  margin-left: 10px;
}
.overview {
  margin-top: 30px;
  line-height: 22px;
}
.right {
  width: 50%;
  margin: 0 100px 0 50px;
}
.booking-container {
  background-color: #4169e1;
  height: 70vh;
  width: 90%;
  margin: 0 auto;
  padding: 30px 20px 0 20px;
  position: relative;
  box-shadow: 1px 1px 4px #bbbbbb;
  border-radius: 4px;
}
.booking-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}
input, select {
  display: block;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  padding: 4px;
}
input {
  width: 35%;
}
select {
  width: 90%;
}
.booking-info {
  width: 80%;
  background-color: rgba(135, 206, 250, .5);
  padding: 20px;
  border-radius: 4px;
}
.booking-info p {
  padding: 5px;
  width: 25%;
  color: #ffffff;
}
button {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  border: none;
  border-radius: 0 0 4px 4px;
  background-color: #0000ff;
  color: #ffffff;
}
.flex .shop-name,
.flex .booking-date,
.flex .booking-time,
.flex .number {
  width: 50%;
}
</style>