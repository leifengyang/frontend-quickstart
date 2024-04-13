<script setup>
//1、定义属性：只读
// let props = defineProps(['money','books']);

let props = defineProps({
  money: {
    type: Number,
    required: true,
    default: 200
  },
  books: Array
});



//2、使用emit: 定义事件
let emits = defineEmits(['buy']);
function buy(){
  // props.money -= 5;
  emits('buy',-5);
}
</script>

<template>
<div style="background-color: #646cff;color: white">
  <h3>
    <slot name="title">
      哈哈Son
    </slot>
  </h3>
  <div>账户：{{props.money}}</div>
  <div>图书：
    <li v-for="b in props.books">{{b}}</li>
  </div>
  <button @click="buy">
    <slot name="btn"/>
  </button>
</div>
</template>

<style scoped>

</style>
