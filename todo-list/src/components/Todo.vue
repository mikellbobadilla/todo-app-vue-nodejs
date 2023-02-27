<script setup>
import Btn from './Btn.vue'
const props = defineProps({
  title: {
    default: 'title',
    required: true
  },
  content:{
    default: 'title',
    required: true  
  },
  date:{
    default: 'dato',
    required: true
  }
})
</script>
<template>
  <div class="m-1 col-md-auto card bg-dark">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <p class="card-text">{{ date }}</p>
      <Btn class="btn-delete">delete</Btn>
      <Btn class="btn-update">update</Btn>
    </div>
  </div>
</template>