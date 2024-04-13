<script setup>
import {useRoute,useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();
function getInfo(){
  console.log(route.params);//参数
  console.log(route.name);//组件名
  console.log(route.path); //路径
  //....
}

function goHome(){
  router.push('/')
}

function back(){
  // router.go(1);
  router.go(-1);
}
</script>

<template>
  <h3>个人详情</h3>
  <button @click="getInfo">页面信息</button>


  <button @click="goHome">跳到首页</button>
  <button @click="back">回退</button>
</template>

<style scoped>

</style>
