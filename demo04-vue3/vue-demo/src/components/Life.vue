<script setup>

import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from "vue";

const count = ref(1);
function countAdd(){
  count.value ++;
}

//生命周期钩子函数

//挂载 去后台查询用户信息
onBeforeMount(()=>{
  //
  console.log("挂载前：count",count.value)
  console.log("挂载前：",document.getElementById("btn01"))
})

onMounted(()=>{
  //
  console.log("挂载完成：count",count.value)
  console.log("挂载完成：",document.getElementById("btn01"))

})

//更新： 前内容未变，数据变了
onBeforeUpdate(()=>{
  console.log("更新前：count",count.value)
  console.log("更新前：btn内容",document.getElementById("btn01").innerHTML)
})

onUpdated(()=>{
  console.log("更新完：count",count.value)
  console.log("更新完：btn内容",document.getElementById("btn01").innerHTML)
})

</script>

<template>
<button id="btn01" @click="countAdd">点 {{count}}</button>
</template>

<style scoped>

</style>
