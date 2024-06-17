<script setup>
import { ref } from 'vue'
import Bar from './components/bar/index.vue'
import HelloWorld from './components/HelloWorld.vue'
const postMessage = ref('init message')
const needMsg = ref('vite + vue')
const name = ref('Lisa')
const changePostMessage = msg => {
  const {value, bool} = msg
  postMessage.value = `new message${value}`
  if (!bool) needMsg.value = 'aha, aha'
}
// 测试透传
const changeName = () => {
  if (name.value === 'Lisa') name.value = 'maria'
  else name.value = 'Lisa'
}
</script>

<template>
  <Bar/>
  <router-view></router-view>
  <div>{{ postMessage }}</div>
  <HelloWorld :msg="needMsg" :name="name" @post-message="changePostMessage" @click="changeName"/>
</template>

<style scoped>
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
