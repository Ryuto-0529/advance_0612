<template>
  <div id="app">
    <div class="flex header">
      <commonHeader />
      <div class="flex header-right">
        <p @click="transitionLogin()" class="header-login">ログイン</p>
        <p  @click="transitionRegister()" class="header-register">新規登録</p>
      </div>
    </div>
    <div class="card">
      <div class="card-top">
        <p class="login">Registration</p>
      </div>
      <div class="form">
        <input type="text" placeholder="Username" v-model="userName">
        <input type="email" placeholder="Email" v-model="userEmail">
        <input type="password" placeholder="Password" v-model="userPassword">
        <button @click="auth">登録</button>
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
      userName: '',
      userEmail: '',
      userPassword: ''
    };
  },
  components: {
    commonHeader,
  },
  methods: {
    transitionLogin() {
      this.$router.push({name: 'login'});
    },
    transitionRegister() {
      this.$router.push({name: 'registration'});
    },
    auth() {
      axios
        .post('http://localhost:8000/api/v1/users/registration', {
          user_name: this.userName,
          email: this.userEmail,
          password: this.userPassword
        })
        .then(response => {
          console.log(response);
          this.$router.replace('/registrationthanks');
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}
.card {
  width: 500px;
  margin: 0 auto;
  margin-top: 150px;
  background-color: #ffffff;
  border-radius: 4px;
}
.card-top {
  height: 20%;
  background-color: #4169e1;
  line-height: 16px;
  border-radius: 4px 4px 0 0;
}
.login {
  font-size: 16px;
  padding: 10px 15px;
  color: #ffffff;
}
.form {
  padding: 20px;
  box-shadow: 1px 1px 4px #333333;
}
input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 15px;
}
button {
  margin-left: 87%;
  padding: 5px 15px;
  background-color: #4169e1;
  border: none;
  border-radius: 4px;
  color: #ffffff;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  margin-right: 100px;
}
.header-login,
.header-register {
  cursor: pointer;
}
.header-register {
  margin-left: 20px;
}
</style>