<template>
<div class="mypage">
  <commonHeader />
  <div class="flex">
    <div class="left">
      <p class="booking-status">予約状況</p>
      <div v-for="booking in bookings" :key="booking.id">
        <div class="booking-info-container">
          <div class="flex booking-top">
            <p class="booking-number">予約{{ booking.id }}</p>
            <div class="css-cancel"></div>
          </div>
          <div class="booking-info">
            <div class="flex">
              <p class="name-item">Shop</p>
              <p class="shop-name content">{{ booking.name }}</p>
            </div>
            <div class="flex">
              <p class="name-item">Date</p>
              <p class="booking-date content">{{ booking.date }}</p>
            </div>
            <div class="flex">
              <p class="name-item">Time</p>
              <p class="booking-time content">{{ booking.time }}</p>
            </div>
            <div class="flex">
              <p class="name-item">Number</p>
              <p class="number content">{{ booking.number }}人</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <p class="user-name">{{ userName }}さん</p>
      <p class="like-shop">お気に入り店舗</p>
      <div class="shops shop-flex">
        <div class="shop" v-for="shop in shops" :key="shop.id">
          <img :src="shop.url">
          <div class="shop-info">
            <p class="shop-name">{{ shop.name }}</p>
            <div class="area-genre">
              <span class="shop-area">#{{ shop.area }}</span>
              <span class="shop-genre">#{{ shop.genre }}</span>
            </div>
            <div class="flex">
              <button @click="shopDetail(shop.id)">詳しく見る</button>
              <div class="LikesIcon" @click="toggleHeart(shop.id)">
                <i class="fa-heart LikesIcon-fa-heart" :class="{ heart: isActive , fas: isActive ,far: !isActive }"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import commonHeader from '../components/commonHeader.vue';
export default {
  data() {
    return {
      userName: 'test',
      bookings: [
        {
          id: 1,
          name: '仙人',
          date: '2021-05-30',
          time: '17:00',
          number: 1,
        },
      ],
      shops: [
        {
          id: 1,
          name: '仙人',
          area: '東京',
          genre: '寿司',
          url: 'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg'
        },
        {
          id: 2,
          name: '仙人',
          area: '大阪',
          genre: '焼肉',
          url: 'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg'
        },
        {
          id: 3,
          name: '仙人',
          area: '福岡',
          genre: 'イタリアン',
          url: 'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg'
        },
        {
          id: 4,
          name: '仙人',
          area: '東京',
          genre: '寿司',
          url: 'https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg'
        },
      ],
    };
  },
  components: {
    commonHeader
  },
  methods: {
    shopDetail(shop_id) {
      this.$router.push({path: '/shopdetail/'+ shop_id, params:{shop_id:shop_id}});
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 40%;
  padding: 30px 100px 30px;
  margin: 0 auto;
}
.booking-status {
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0;
}
.booking-info-container {
  width: 80%;
  padding: 30px;
  background-color: #4169e1;
  border-radius: 6px;
  margin-bottom: 20px;
}
.booking-info-container p {
  color: #ffffff;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 15px;
  width: 20%;
}
.booking-top {
  margin-bottom: 30px;
}
.name-item {
  width: 30%;
}
.booking-info-container .content {
  width: 70%;
}
.right {
  width: 60%;
  padding: 0 100px 30px 0;
  margin: 0 auto;
}
.shop-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.shop {
  width: 48%;
  box-shadow: 1px 1px 4px #bbbbbb;
  border-radius: 6px;
  background-color: #ffffff;
  margin-bottom: 20px;
}
.shop-info {
  padding: 20px;
}
.shop-name {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}
span {
  display: inline-block;
  font-size: 13px;
}
.shop-genre {
  margin-left: 3px;
}
.area-genre {
  margin-bottom: 20px;
}
button {
  border: none;
  background-color: #4169e1;
  color: #ffffff;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 6px;
}
img {
  width: 100%;
  border-radius: 6px 6px 0 0;
}
.like-shop {
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0;
}
.user-name {
  font-size: 24px;
  font-weight: bold;
}
.LikesIcon-fa-heart{
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
  color: #878787;
}
.LikesIcon-fa-heart.heart{
  /* heartAnimationアニメーションを200ミリ秒かけて実行する */
  animation: heartAnimation .2s;
  /* アイコン色を黒から赤へ変更する */
  color: #e2264d;
}

.css-cancel{
  display: inline-block;
  position: relative;
  margin: 0 20px 0 7px;
  padding: 0;
  width: 4px;
  height: 20px;
  background: #ffffff;
  transform: rotate(45deg);
}
.css-cancel:before{
  display: block;
  content: "";
  position: absolute;
  top: 50%;
  left: -8px;
  width: 20px;
  height: 4px;
  margin-top: -2px;
  background: #ffffff;
}
</style>