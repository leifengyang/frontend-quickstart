<script setup>
import  {useMoneyStore} from '../stores/money.js'

let moneyStore = useMoneyStore();
function guaguale(){
  moneyStore.win(100);
}

function bangbang(){
  moneyStore.pay(5)
}
</script>

<template>
  <button @click="guaguale">刮刮乐</button>
  <button @click="bangbang">买棒棒糖</button>
</template>

<style scoped>

</style>
