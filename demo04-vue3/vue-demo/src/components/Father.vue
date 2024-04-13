<script setup>

import Son from "./Son.vue";
import {reactive, ref} from "vue";

//1、 父传子：单向数据流
// const money = ref(100);
// const books = ref(["西游记","水浒传"])

const data = reactive({
  money: 100,
  books: ["西游记","水浒传"]
})

function moneyMinis(arg){
  // alert("感知到儿子买了棒棒糖"+arg)
  data.money+=arg;
}
</script>

<template>
<div style="background-color: #f9f9f9">
  <h2>Father</h2>
  <button @click="data.money+=10">充值</button>
<!--  <Son :books="data.books" :money="data.money"-->
<!--       @buy="moneyMinis"/>-->
  <Son v-bind="data">
    <template v-slot:title>
      哈哈SonSon
    </template>

    <template #btn>
      买飞机
    </template>
  </Son>
</div>
</template>

<style scoped>

</style>
