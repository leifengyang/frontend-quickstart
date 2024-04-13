<script setup>
import {useRoute} from 'vue-router'
let route = useRoute();
</script>

<template>
<h1>我是Hello
{{$route.query.id}} == {{$route.query.name}}
</h1>
  <div>
    {{route.query.id}} == {{route.query.name}}
  </div>
</template>

<style scoped>

</style>
