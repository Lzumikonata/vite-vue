<script setup>
import { ref, reactive, computed } from 'vue'

defineProps({
  msg: String,
  name: String,
})

defineEmits(['post-message'])
const model = defineModel()
console.log(model.value)
const count = ref(0)
const message = reactive({name: 'michael'})
const changeMessage = () => message.name = `wuke ${count.value}`
const calculateName = computed(() => message.name === 'michael' ? 'English' : message.name)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HM
    </p>
    <button type="button" @click="changeMessage">change</button>
    <button type="button" @click="$emit('post-message', {value: '123', bool: false})">change parents message</button>
    <h2>{{ model }}</h2>
    <input v-model="model" />
    <p>{{ calculateName }}</p>
  </div>
  <div>
    <!-- 测试透传 -->
    <p>{{ name }}</p>
    <button v-bind="$attrs">testAttribute</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
