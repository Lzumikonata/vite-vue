<script setup>
import { ref } from 'vue'
defineProps({
  buttonName: String,
  options: Array
})

const isHidden = ref(true)
const isOver = ref(false)
const isOverButton = ref(false)
const ariaExpand = () => {
  isOverButton.value = true
  isHidden.value = false
}
const setAriaOver = () => {
  isOver.value = true
}
const setAriaLeave = () => {
  isOver.value = false
  setTimeout(() => {
    isOverButton.value ? isHidden.value = false : isHidden.value = true
  }, 150)
}
const ariaHidden = () => {
  isOverButton.value = false
  setTimeout(() => {
    isOver.value ? isHidden.value = false : isHidden.value = true
  }, 150)
}
</script>
<template>
  <div class="button-content">
    <button @mouseenter="ariaExpand" @mouseleave="ariaHidden">
    <span class="button-text">{{ buttonName }} <code class="button-text-icon">+</code></span>
    </button>
    <div class="options-content" :style="{ visibility: isHidden ? 'hidden' : 'visible' }" @mouseenter="setAriaOver" @mouseleave="setAriaLeave">
      <ul>
        <li v-for="option in options" class="item" @click="() => {$router.push(option.path)}">{{ option.name }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .button-content {
    position: relative;
  }
  .button-text-icon {
    margin-left: 4px;
    position: static;
  }
  .options-content {
    position: absolute;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 120px;
    margin-top: 8px;
    right: 0;
    padding: 10px 0 8px 3px;
    background-color: var(--main-bg-color);
    z-index: 999;
  }
  .item {
    cursor: pointer;
    margin-bottom: 10px;
  }
  .item:hover {
    color: #646cff;
  }
</style>
