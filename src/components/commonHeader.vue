<template>
  <div class="header">
    <h1 class="logo" @click="transitionHome()">Rese</h1>
  </div>
</template>

<script>
export default {
  methods: {
    transitionHome() {
      this.$router.push({name: 'home'});
    },
  },
};
</script>

<style scoped> 
.header {
  width: 50%;
}
.logo {
  font-size: 30px;
  padding: 40px 0;
  color: #4169e1;
  font-weight: bold;
  width: 100%;
  display: inline-block;
  cursor: pointer;
}
</style>
<style scoped>
.header {
  margin-left: 100px;
}
</style>