<script setup>
import {reactive} from "vue";

const data = reactive({
  username: "zhangsan",
  agree: true,
  hobby: [],
  gender: "女",
  degree: "",
  course: []
})

</script>

<template>
  <div style="display: flex;">
    <div style="border: 1px solid black;width: 300px">
      <form>
        <h1>表单绑定</h1>
        <p style="background-color: azure">
          <label>姓名(文本框)：</label>
          <input v-model="data.username"/>
        </p>
        <p style="background-color: azure"><label>同意协议(checkbox)：</label>
          <input type="checkbox" v-model="data.agree"/>
        </p>
        <p style="background-color: azure">
          <label>兴趣(多选框)：</label><br/>
          <label><input type="checkbox" value="足球" v-model="data.hobby"/>足球</label>
          <label><input type="checkbox" value="篮球" v-model="data.hobby"/>篮球</label>
          <label><input type="checkbox" value="羽毛球" v-model="data.hobby"/>羽毛球</label>
          <label><input type="checkbox" value="乒乓球" v-model="data.hobby"/>乒乓球</label>
        </p>
        <p style="background-color: azure">
          <label>性别(单选框)：</label>
          <label><input type="radio" name="sex" value="男" v-model="data.gender">男</label>
          <label><input type="radio" name="sex" value="女" v-model="data.gender">女</label>
        </p>
        <p style="background-color: azure">
          <label>学历(单选下拉列表)：</label>
          <select v-model="data.degree">
            <option disabled value="">选择学历</option>
            <option>小学</option>
            <option>初中</option>
            <option>高中</option>
            <option>大学</option>
          </select>
        </p>
        <p style="background-color: azure">
          <label>课程(多选下拉列表)：</label>
          <br/>
          <select multiple v-model="data.course">
            <option disabled value="">选择课程</option>
            <option>语文</option>
            <option>数学</option>
            <option>英语</option>
            <option>道法</option>
          </select>
        </p>
      </form>
    </div>
    <div style="border: 1px solid blue;width: 200px">
      <h1>结果预览</h1>
      <p style="background-color: azure"><label>姓名：{{data.username}}</label></p>
      <p style="background-color: azure"><label>同意协议：{{data.agree}}</label>
      </p>
      <p style="background-color: azure">
        <label>兴趣：
          <li v-for="h in data.hobby">{{h}}</li>
        </label>
      </p>
      <p style="background-color: azure">
        <label>性别：{{data.gender}}</label>
      </p>
      <p style="background-color: azure">
        <label>学历：{{data.degree}}</label>
      </p>
      <p style="background-color: azure">
        <label>课程：
        <li v-for="c in data.course">{{c}}</li>
        </label>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
