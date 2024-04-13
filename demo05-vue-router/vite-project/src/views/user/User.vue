<script setup>

</script>

<template>
  <h1>欢迎你: {{$route.params.id}}</h1>
  <router-link to="/user/007/profile">个人信息</router-link>
  <router-link to="/user/007/posts">我的邮件</router-link>
  <div style="border: 5px solid red">
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  margin-left: 10px;
}

</style>
