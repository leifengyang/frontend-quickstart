<script setup>
import http from './utils/http'
import { message } from 'ant-design-vue';

function getInfo() {
  http.get("/get").then(resp => {
    console.log(resp.data);
    // config： 请求配置
    // data：服务器的响应数据
    // headers：响应头
    // request：请求对象
    // status：响应状态码
    // statusText：响应描述文本
  })
}

function getInfoParam() {
  http.get("/get", {
    params: {
      id: 1,
      username: 'zhangsan'
    }
  }).then(resp => {
    console.log(resp)
  })
}

function postInfo() {
  http.post("/post").then(resp => {
    console.log(resp)
  })
}

function postInfoParam() {
  // 数据会被自动转为json
  http.post("/post", {
    id: 222,
    username: 'zhangsan',
    age: 18
  }).then(resp => {
    console.log(resp)
  })
}

function delay2(){
  http.get("/delay/2").then(resp=>{
    console.log(resp)
  }).catch(err=>{
    console.log(err)
    // message.error(err.message)
  })
}

</script>

<template>
  <button @click="getInfo">GET 请求</button>
  <button @click="getInfoParam">GET 请求 参数</button>
  <button @click="postInfo">POST 请求</button>
  <button @click="postInfoParam">POST 请求 参数</button>
  <button @click="delay2">delay 2s</button>
</template>

<style scoped>

</style>
