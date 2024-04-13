<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();
function paramsTest(){
  //params传参方式 必须使用组件name
  // router.push('/haha/222/zhangsan/188')
  router.push({
    name: 'Haha',
    params: {
      id: 888,
      name: 'zhangsan222',
      age: 2222
    }
  })
}

function helloQuery(){
  // router.push('/hello?id=1&name=aaaa');
  router.push({
    path: '/hello',
    query: {
      id: 1,
      name: 'xxx'
    }
  })
}
</script>

<template>

  <router-link to="/">首页</router-link>
  <router-link to="/hello?id=1&name=zhangsan">Hello</router-link>
  <router-link :to="{
    path: '/hello',
    query: {
      id: 7788,
      name: 'haha'
    }
  }">Hello对象</router-link>

  <button @click="helloQuery">Hello传参</button>

  <router-link to="/haha/111/zhangsan/18">Haha111</router-link>
  <router-link :to="{
    name: 'Haha',
    params: {
      id: 777,
      name: 'zhangsan',
      age: 22
    }
  }">对象传参</router-link>
  <button @click="paramsTest">param传参</button>
  <router-link to="/user/007">用户中心</router-link>
<!--  -->
  <hr/>
  <router-view></router-view>
<!--
1、整合vue-router
2、配置vue-router
    配置路由表
    创建路由器
3、Vue实例使用router
4、配合 router-link 和 router-view


-->

</template>

<style scoped>
a {
  margin-left: 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
