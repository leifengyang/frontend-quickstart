<script setup>
import {useRoute} from 'vue-router'
let route = useRoute();
</script>

<template>
<h1>我是哈哈 {{$route.params.id}}==> {{$route.params.name}} ==> {{$route.params.age}}</h1>
  <div>
    {{route.params.id}} <br/>
    {{route.params.name}} <br/>
    {{route.params.age}} <br/>
  </div>
</template>

<style scoped>

</style>
