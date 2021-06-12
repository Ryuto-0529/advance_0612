<template>
  <div class="registration-thanks">
    <commonHeader />
    <div class="card">
      <p>会員登録ありがとうございます</p>
      <button @click="firstLogin()">ログインする</button>
    </div>
  </div>
</template>

<script>
import commonHeader from '../components/commonHeader';
export default {
  methods: {
    firstLogin() {
      this.$router.push({name: 'home'});
    }
  },
  components: {
    commonHeader,
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #ffffff;
  padding: 70px 0 100px;
  box-shadow: 1px 1px 4px #333333;
}
p {
  font-size: 24px;
  text-align: center;
  padding-bottom: 40px;
}
button {
  display: block;
  width: 100px;
  margin: 0 auto;
  color: #ffffff;
  background-color: #4169e1;
  border: none;
  border-radius: 4px;
  padding: 5px;
}
</style>