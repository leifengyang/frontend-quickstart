<script setup>

//1. 插值
import {computed, reactive, ref, watch, watchEffect} from "vue";

let name = "张三"

let car = reactive({
  brand: "小米",
  price: 9999
})

let fruits = ["苹果", "香蕉", "梨"]

//2. 指令: v-xxx：
// 基础指令：v-html、v-text
// 事件指令：v-on
// 判断指令：v-if
// 循环指令：v-for
// 属性绑定： v-bind； 单向绑定: 数据-页面
// 表单绑定：v-model； 双向绑定: 数据-页面
let msg = "<p style='color: red'>你好</p>"

function buy() {
  alert("购买成功")
}

//3. 属性绑定： v-bind； 默认数据不具备响应式特性
const url = ref("https://www.baidu.com");

// 响应式特性：  数据的变化可以更新到页面效果上
function changeUrl() {
  console.log(url)
  url.value = "https://www.atguigu.com"
  // url = ref("https://www.atguigu.com")
}


//4、响应式：ref()、reactive()；
//ref()：
//   1、把基本类型、对象类型数据使用 ref() 包装成响应式数据
//   2、使用 代理对象.value = ""
//   3、页面取值、属性绑定 直接 {{url}}
//reactive():
//   1、把对象类型使用 reactive() 包装成响应式数据
//   2、使用 代理对象 = ""、
//   3、页面取值、属性绑定 直接 {{变量名}}
function addPrice() {
  car.price += 100;
}

//最佳实践：
//1、我该用哪个函数？ 答：可以 ref() 一把梭、也可以 ref()包装基本数据、reactive()包装对象
//2、使用 const 声明响应式常量
//3、响应式数据具有深层响应式特性（属性.属性.属性 也都是响应式的）

// 安装 Vue.js devtools 插件，方便后续调试

//5、表单绑定：v-model

//7、计算属性：computed
const num = ref(1);
const totalPrice = computed(() => car.price * num.value);

//8、监听：watch/watchEffect
// watch(num,(value, oldValue, onCleanup)=>{
//   console.log("value",value)
//   console.log("oldValue",oldValue)
//   if(num.value > 3){
//     alert("超出限购数量")
//     num.value = 3;
//   }
// })
watchEffect(() => {
  if (num.value > 3) {
    alert("超出限购数量")
    num.value = 3;
  }

  if (car.price > 11000) {
    alert("太贵了")
    car.price = 11000;
  }
})

</script>

<template>
  <a :href="url" :abc="url"> Go ! {{ url }}</a>
  <button @click="changeUrl">改变地址</button>
  <h2>姓名：{{ name }}</h2>
  <h2>品牌：{{ car.brand }}</h2>
  <h2>价格：{{ car.price }}</h2>
  <h2>数量：{{ num }}</h2>
  <button @click="addPrice">加价</button>
  <button @click="num++">加量</button>
  <!--  <button v-on:click="buy">购买</button>-->
  <button @click.once="buy">购买 {{ totalPrice }}</button>
  <div v-html="msg"></div>
  <div> {{ msg }}</div>
  <div v-text="msg"></div>
  <span style="color: green" v-if="car.price < 1000">很便宜</span>
  <span style="color: red" v-if="car.price >= 1000">太贵了</span>

  <li v-for="(f,i) in fruits">{{ f }} ==> {{ i }}</li>
</template>

<style scoped>

</style>
