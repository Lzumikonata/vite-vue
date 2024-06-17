<script setup>
import { ref } from 'vue'
import Select from '../select.vue'
import router from '../../router.js'
const buttonName = ref('Docs')
const options = ref([
  {name: 'Install', path: '/docs'},
  {name: 'Usage', path: '/docs/usage'}
])
const toPage = (path) => {
  router.push(path)
}
</script>
<template>
  <div class="bar-content">
    <div class="bar">
      <div><button @click="toPage('/')">Home</button></div>
      <div><button @click="toPage('/login')">Log In</button></div>
      <div><Select :button-name="buttonName" :options="options"></Select></div>
      <div><button @click="() => { $router.push({name: 'first', params: {versionID: 'first'}}) }">version</button></div>
    </div>
  </div>
</template>
<style scoped>
  .bar-content {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: right;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .bar {
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    padding: 10px 50px 0 50px;
  }
  .bar div {
    cursor: pointer;
  }
</style>
