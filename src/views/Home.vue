<template>
  <div class="home">
    <div class="flex">
      <div class="header left">
        <commonHeader />
      </div>
      <div class="search-container right">
        <div class="flex">
          <select name="shopsArea" id="" v-model="searchArea">
            <option value="">エリアで検索</option>
            <option value="東京">東京</option>
            <option value="大阪">大阪</option>
            <option value="福岡">福岡</option>
          </select>
          <select name="shopsGenre" id="" v-model="searchGenre">
            <option value="">ジャンルで検索</option>
            <option value="寿司">寿司</option>
            <option value="焼肉">焼肉</option>
            <option value="居酒屋">居酒屋</option>
            <option value="イタリアン">イタリアン</option>
            <option value="ラーメン">ラーメン</option>
          </select>
          <input type="text" v-model="searchWords" placeholder="店名で検索">
        </div>
      </div>
    </div>
    <div class="shops" id="shop-flex">
      <div class="shop" v-for="shop in shops" :key="shop.id">
        <img :src="shop.image_url">
        <div class="shop-info">
          <p class="shop-name">{{ shop.shop_name }}</p>
          <div class="area-genre">
            <span class="shop-area">#{{ shop.area.area }}</span>
            <span class="shop-genre">#{{ shop.genre.genre }}</span>
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
</template>

<script>
import commonHeader from '../components/commonHeader';
import axios from 'axios';
export default {
  data() {
    return {
      searchArea: '',
      searchGenre: '',
      searchWords: '',
      isActive: false,
      shops: [],
    };
  },
  components: {
    commonHeader
  },
  methods: {
    toggleHeart(sel_id) {
      if (sel_id) {
        if (!this.isActive) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    },
    shopDetail(shop_id) {
      this.$router.push({path: '/shopdetail/'+ shop_id, params:{shop_id:shop_id}});
    }
  },
  // computed: {
  //   filteredShops() {
  //     const shopsArray = [];
  //     for (const i in this.shops) {
  //       const shop = this.shops[i];
  //       if (shop.area.indexOf(this.searchArea) !== -1 &&
  //       shop.genre.indexOf(this.searchGenre) !== -1 &&
  //       shop.name.indexOf(this.searchWords) !== -1) {
  //         shopsArray.push(shop);
  //       }
  //     }
  //     return shopsArray;
  //   }
  // },
  async created() {
    const responseShops = await axios.get(
      "http://localhost:8000/api/v1/shops"
    );
    console.log(responseShops);
    this.shops = responseShops.data.data;
  }
};
</script>

<style scoped>
.home {
  padding: 0 100px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#shop-flex {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
}
.right {
  width: 50%;
}
.search-container {
  width: 50%;
  padding: 10px 5px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px #bbbbbb;
}
input, select {
  border: none;
  color: #878787;
  font-size: 12px;
}
input {
  width: 50%;
}
select {
  width: 23%;
}
.shop {
  width: 24%;
  box-shadow: 1px 1px 4px #bbbbbb;
  border-radius: 6px;
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-right: 1%;
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
</style>