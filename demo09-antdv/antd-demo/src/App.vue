<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="/user">
          <user-outlined />
          <span>用户</span>
        </a-menu-item>
        <a-menu-item key="/order">
          <video-camera-outlined />
          <span>订单</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>物流</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import {ref, watch} from 'vue';
import {UserOutlined,VideoCameraOutlined,UploadOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons-vue'
import {useRouter} from "vue-router";
const selectedKeys = ref(['1']);
const collapsed = ref(false);

const router = useRouter();

watch(selectedKeys,()=>{
  console.log("菜单点击",selectedKeys.value[0])
  router.push(selectedKeys.value[0])

})
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
